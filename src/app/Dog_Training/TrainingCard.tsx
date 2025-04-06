import React from "react";
import Image from "next/image";
import { GoCheck } from 'react-icons/go'

type TrainingCardProp = {
  item: any;
};

const TrainingCard = ({ item }: TrainingCardProp) => {
  return (
    <article
      key={item.title}
      className="shadow-lg rounded-md overflow-hidden bg-neutral-900">
      <div className="w-full h-40 relative">
        <Image
          src={item.img}
          alt="hero-img"
          fill={true}
          sizes={"1000"}
          className="object-cover object-[0_-1.5rem] w-full h-full"
        />
      </div>
      <div className={`p-1 px-4 bg-neutral-950`}>
        <p className="uppercase font-semibold">{item.title}</p>
        <p className="font-semibold text-sm">{item?.heading}</p>
        <div className="flex justify-between text-sm">
          <span>{`${item.level && `Level - ${item.level} | ${item.weeks}`}`}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm">{item.description}</p>
        <div className="my-2 flex flex-wrap gap-y-1 gap-1">
          {item.points.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center p-0 m-0 gap-1 text-xs px-2 rounded-sm text-teal-200/90 bg-neutral-800 ">
              <GoCheck />
              <span>{item}</span>
            </div>
          ))}
        </div>
        {item.footnote && <p className="text-xs">* {item.footnote}</p>}
      </div>
    </article>
  );
};

export default TrainingCard;
