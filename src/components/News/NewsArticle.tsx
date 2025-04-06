import React from "react";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

const NewsArticle = ({
  articles,
  handleShowArticle,
  id,
}: {
  articles: {}[];
  handleShowArticle: (index: number) => void;
  id: any;
}) => {
  return (
    <>
      {articles.map((item: any, i: number) => (
        <article
          key={i}
          className="flex gap-2 border-b  border-neutral-700 py-2">
          <div className="w-full h-[8rem] lg:h-full relative">
            <Image
              src={item.img}
              alt="leash training"
              fill={true}
              className="object-contain object-center w-full h-full"
            />
          </div>
          <div className="text-xs space-y-1.5">
            <h2 className=" font-bold text-md ">{item.title}</h2>
            <p>{item.content.substring(0, 100)}...</p>
            <div className="float-right flex items-center gap-2 cursor-pointer  hover:bg-neutral-900 p-1 rounded-sm">
              <a className="text-theme_gold font-semibold"
                onClick={() => handleShowArticle(i)}
                title="more detail">
                more details
              </a>
              <IoMdArrowForward className="text-theme_gold" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewsArticle;
