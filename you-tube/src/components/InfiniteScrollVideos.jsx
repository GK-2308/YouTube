// src/InfiniteScrollVideos.js
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
``;
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import fetchVideos from "../utils/fetchVideos";

const InfiniteScrollVideos = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreVideos = async () => {
    const response = await fetchVideos(nextPageToken);
    setVideos([...videos, ...response.items]);
    setNextPageToken(response.nextPageToken);
    if (!response.nextPageToken) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMoreVideos();
  }, []);

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchMoreVideos}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more videos to load</p>}
    >
      <div className="flex flex-wrap">
        {videos[0] && <AdVideoCard info={videos[0]} />}
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollVideos;
