import React from "react";
import Image, { StaticImageData } from "next/image";
import { MediaQuery } from "../utils/MediaQuery";

type HeroProp = {
  image: StaticImageData;
  header?: string;
  subheader?: string;
};

const Hero = ({ image, header, subheader }: HeroProp) => {
  return (
    <div className="flex justify-center items-center w-full h-[21vh] md:h-[45vh] relative">
      <div className="z-10 absolute w-full h-full bg-black/35 flex flex-col items-center justify-center"></div>
      <Image
        src={image}
        alt="hero-img"
        fill={true}
        className="object-cover object-center w-full h-full rounded-md overflow-hidden"
        priority
      />
      <MediaQuery>
        <div className="w-full sm:w-3/4 relative m-auto [text-shadow:_0_1px_15px_#000] text-center font-bold z-40">
          <h1 className="text-3xl sm:text-4xl leading-7 uppercase font-bold text-neutral-50 py-2">
            {header}
          </h1>
          <p className="text-white text-sm md:text-2xl leading-5 [text-shadow:_0_1px_10px_#000]">{subheader}</p>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Hero;
