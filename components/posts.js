import React, { useState } from "react";
import Image from 'next/image'
import moment from 'moment'
import ImageGallery from './imagegallery'
import Modal from '../components/modal'

export default function Posts(props) {
const [showModal, setShowModal] = useState(false);
var dateString = moment.unix(props.timestamp).format("DD/MM/YYYY hh:ss A");
  return (
    <>
    <Modal title={props.title} showModal={showModal} setShowModal={setShowModal} is_gallery={props.is_gallery} thumbnail={props.thumbnail} commentsLink={props.commentsLink} author={props.author} status={props.status} />
    <div className="max-w-sm mx-auto w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:border border-solid md: border border-solid">
    { (props.is_gallery == false )? (
  <Image loading="lazy" className="object-cover object-center w-full h-56" src={props.thumbnail} 
  alt="post-image" width={400} height={200} layout="responsive"/>
     ) : (<ImageGallery gallery={props.thumbnail} width={400} height={200} filltype="object-cover"/>)}
  <div className="px-6 py-4">
    <p className="py-2 text-gray-700 dark:text-gray-400">
                {props.title}
    </p>
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  />
</svg>

      <h1 className="px-2 text-sm">{props.author}</h1>
    </div>
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  />
</svg>


      <h1 className="px-2 text-sm">{props.status}</h1>
    </div>
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  />
</svg>
      <h1 className="px-2 text-sm">{dateString}</h1>
    </div>
  </div>
  
  <div className="container mx-auto items-center">
  <div className="flex flex-col items-center py-6 space-y-3 text-center">
  <button className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"
   onClick={()=>{setShowModal(true)}}
  >
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>

  <span className="mx-1">View Answer</span>
</button>

</div>
</div>
</div>
</>
  )
}
