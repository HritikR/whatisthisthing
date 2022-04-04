import Head from 'next/head'
import NavBar from '../components/navbar'
import { getRedditPost } from './api/getredditpost'
import Content from '../components/content'


export async function getServerSideProps(context) {
  const redditPosts = await getRedditPost()
  return {
    props: {
      redditPosts
    }
  }
}




export default function Home({redditPosts}) {
  return (
    <>
      <Head>
        <title>What is this thing?</title>
        <meta name="description" content="Created By Hritik R" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar title="What is that thing?"/>
      <section className="bg-white dark:bg-gray-900">
        
  <div className="container px-6 py-10 mx-auto">
  <a href="https://www.reddit.com/r/whatisthisthing/" target="_blank" rel="noreferrer">
  <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white hover:text-blue-400">
   /r/whatisthisthing
  </h1>
    </a>
  <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
  {`If you have an object and you don't know what it is, this is the place for you to search for an answer.We may not know the "why" but we can help with the "what".`}
  </p>
       <Content redditPosts={redditPosts}/>  
  </div>
</section>
    </>
  )
}
