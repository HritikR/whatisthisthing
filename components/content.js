import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Posts from '../components/posts'
import { getRedditPost } from '../pages/api/getredditpost'
import Loading from '../components/loading'

const Content = ({ redditPosts }) => {
  const [posts, setPosts] = useState(redditPosts.data.children);
  const [hasMore, setHasMore] = useState(true);
  const [after, setAfter] = useState(redditPosts.data.after);

  const getMorePost = async () => {
    const res = await getRedditPost(after)
    const newPosts = res.data.children;
    setPosts(posts => [...posts, ...newPosts]);
    (res.data.after != null) ? setAfter(res.data.after) : setHasMore(false);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<Loading/>}
        endMessage={''}
      >
         <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
        {posts.map(({ data }, index) => ( 
             (data.post_hint == "image" || data.is_gallery === true) &&
            <Posts key={`${data.id}-${index}`} index={index} title={data.title} thumbnail={ data.is_gallery ? data.media_metadata : (data.url.match(/\.(jpeg|jpg|gif|png)$/) != null ? data.url : data.preview.images[0].resolutions[2].url.replace(/&amp;/g, '&')) }
             is_gallery={data.is_gallery ? true : false} author={data.author} 
              status={ data.link_flair_text !== null ? data.link_flair_text : "Open" } timestamp={data.created}
           commentsLink={data.permalink}    />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};


export default Content;