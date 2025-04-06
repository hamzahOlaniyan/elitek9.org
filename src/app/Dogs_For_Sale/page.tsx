import Hero from "@/components/Hero/Hero";
import { MediaQuery } from "@/components/utils/MediaQuery";
import PageLayout from "@/components/utils/PageLayout";
import React from "react";
import h from '../../../public/images/dogs_for_sale/h.jpg'
import Heading from "@/components/utils/Heading";
import { SaleCard } from "./SaleCard";



const page = () => {
  return <PageLayout>
    <Hero image={h} />
    <MediaQuery>
      <div className="my-12">
        <Heading heading='dogs for sale' />
        <div className="relative my-12 mb-48">
          <SaleCard />
        </div>
      </div>
    </MediaQuery>
  </PageLayout>;
};

export default page;
