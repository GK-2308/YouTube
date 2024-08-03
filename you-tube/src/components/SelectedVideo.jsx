import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SelectedVideo = () => {
  const data = useSelector((store) => store.selected?.data);

  console.log(data);

  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {data?.map((video) => (
        <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SelectedVideo;
