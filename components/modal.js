import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import ImageGallery from './imagegallery'
import Image from 'next/image'
import { isMobile } from "mobile-device-detect";
import { getRedditAnswer } from '../pages/api/getredditpost'
export default function Modal({showModal, setShowModal, is_gallery, thumbnail, title, commentsLink, author, status}) {
    const [Answer, setAnswer] = useState("Searching for Answer!")
    useEffect(() => {
        const requestForAnswer = async () => {
            const res = await getRedditAnswer(author, commentsLink, status)
            setAnswer(res[0])
          };
       (showModal ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden"))
       showModal ? requestForAnswer() : null
      }, [showModal, author, commentsLink, status])
    return (
      <>
        {showModal ? (
          <>
          <div
    tabIndex={-1}
    className="overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  backdrop-blur-[2px] bg-black/25 h-full"
  >
    <div className="relative p-4 w-full h-auto md:h-auto">

      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
          <h3 className={`${(isMobile ? 'text-sm' : 'text-xl')} capitalize font-medium text-gray-900 md:text-sm dark:text-white`}>
              {title}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="extralarge-modal"  onClick={() => setShowModal(false)}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
        { (is_gallery == false )? (
  <Image loading="lazy" className="object-contain object-center w-full h-56" src={thumbnail} 
  alt="post-image" width={400} height={isMobile ? 400 : 120} layout="responsive"/>
     ) : (<ImageGallery gallery={thumbnail} width={400} height={isMobile ? 400 : 120} filltype={"object-contain"}/>)}
        </div>
        <div className="flex items-center text-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

<h3 className="text-md font-medium text-gray-900 md:text-sm dark:text-white">
<ReactMarkdown>{Answer}</ReactMarkdown>
          </h3>
        </div>
      </div>
    </div>
  </div>
            </>
        ) : null}
      </>
    );
  }