import React from "react";
import Heading from "../utils/Heading";
import { ServiceCard } from "./ServiceCard";



export const Service = () => {
  return (
    <div className="w-full">
      <Heading
        heading="our services"
        subheading="Here at Elite K9 we provide various training programs to cater to your
          needs and objectives."
      />
      <ServiceCard />
    </div>
  );
};

