"use client";
import React, { useState } from "react";
import PageLayout from "../../components/utils/PageLayout";
import Heading from "../../components/utils/Heading";
import { qandA } from "../K9_Assistance/data";
import { MediaQuery } from "@/components/utils/MediaQuery";

const Faq = () => {
  const [readmore, setReadmore] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  const handleReadMore = (idx: number) => {
    setReadmore(!readmore);
    setIndex(idx);
  };

  return (
    <PageLayout>
      <MediaQuery>
        <div className="pt-18 sm:mt-12">
          <Heading heading="faq" />
          <div className="my-6">
            {qandA.map((item: any, i: number) => (
              <div key={i} className="mb-6">
                <div className="bg-neutral-900  p-4 flex justify-between items-center cursor-pointer group">
                  <h1 className="text-neutral-300">{item.q}</h1>
                </div>
                <div className="p-2 py-4 border border-t-0 border-neutral-700">
                  <p>
                    {!readmore ? item.a.substring(0, 600) : item.a}
                    {"  "}
                    <span
                      onClick={() => handleReadMore(i)}
                      className="text-theme_gold underline cursor-pointer text-sm">
                      {!readmore ? "read more" : "read less"}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MediaQuery>
    </PageLayout>
  );
};

export default Faq;
