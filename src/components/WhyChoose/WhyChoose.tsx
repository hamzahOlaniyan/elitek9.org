import React from "react";
import { data } from "./data";
import Heading from "../utils/Heading";
import { MediaQuery } from "../utils/MediaQuery";

const WhyChoose = () => {
  return (
    <MediaQuery>
      <div className="my-12">
        <Heading heading="why choose use" subheading="elite k9 international" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-12 gap-y-6 gap-2 sm:gap-6 ">
          {data.map((item: any) => (
            <article
              key={item.title}
              className="bg-neutral-900 p-3 rounded-md space-y-2">
              <h1 className="text-teal-600 uppercase font-medium">
                {item.title}
              </h1>
              <p className="leading-5 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </MediaQuery>
  );
};

export default WhyChoose;
