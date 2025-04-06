"use client";
import React, { useState } from "react";
import NewsArticle from "./NewsArticle";
// import shortclip from "../../Assets/videos/";
// import { articles } from "./data";

const News = () => {
  const [show, setShow] = useState(0);
  const [id, setId] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const handleShowArticle = (index: number) => {
    setShowVideo(false);
    setShow(index);
    setId(index);
  };
  return (
    <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_2fr] md:gap-6">
      <div className="flex flex-col gap-4">
        <div className="bg-neutral-900 py-2 rounded-sm ">
          <h1 className="uppercase font-semibold  text-white px-1">news</h1>
        </div>
        {/* <NewsArticle
          articles={articles}
          handleShowArticle={handleShowArticle}
          id={id}
        /> */}
      </div>
      <div className="bg-neutral-900 p-2 shadow-inner shadow-inner-black rounded-lg">
        <div className="h-[20rem] p-2 overflow-scroll overflow-x-hidden [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-thumb]:rounded-full
           [&::-webkit-scrollbar-track]:bg-neutral-700
           [&::-webkit-scrollbar-thumb]:bg-neutral-600">
          {/* <Article articles={articles[show]} id={id} /> */}
        </div>
        {/* {showVideo ? (
          <div className="w-full h-full">
            <video
              className="w-full h-full object-cover object-center"
              controls
              muted
              autoPlay
              preload="none">
              <source
                src={require("../../Assets/videos/shortclip.mp4")}
                type="video/mp4"
              />
            <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        ) : (
        )} */}
      </div>
    </div>
  );
};

export default News;
