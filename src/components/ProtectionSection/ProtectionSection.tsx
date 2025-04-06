import Link from "next/link";
import React from "react";
import Heading from "../utils/Heading";
import { MediaQuery } from "../utils/MediaQuery";

const ProtectionSection = () => {
  return (
    <>
      <div className="relative bg-black text-white py-20 p-4">
        <MediaQuery>
          <div className="text-center flex flex-col items-center">
            <Heading heading="Protection Dog Training" />
            <div className="w-full lg:w-[70%] self-center relative leading-8 mt-6">
              <p className="mb-6 font-light">
                ELITE K9 formally known as PTS K9 is a family-owned business that
                began 2 decades ago with the breeding, training and selling of
                guard dogs by Dog Master Ibrahim Kinteh. Founded in the UK, Elite
                K9 has supplied world-class protection and security dogs to
                families, military and security forces around the world.
              </p>
              <Link
                href={"/About_Us"}
                className="text-black capitalize mt-12 rounded-sm bg-white p-3 font-semibold relative hover:bg-theme_gold hover:text-black active:scale-95 duration-200">
                Read more about us
              </Link>
            </div>
          </div>
        </MediaQuery>
      </div>
    </>
  );
};

export default ProtectionSection;
