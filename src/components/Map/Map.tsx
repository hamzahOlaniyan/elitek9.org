import React from "react";
import centerImg from "./center.jpeg";
import Image from "next/image";
import Heading from "../utils/Heading";
import { MediaQuery } from "../utils/MediaQuery";

const Map = () => {
  return (
    <div className="text-center">
      <MediaQuery>
        <Heading
          heading="Where We Are"
          subheading=" Visit our dog training center, Bakoteh Tippa Garage , opposite Agib
          Bank"
        />
      </MediaQuery>

      <div className="grid grid-col-1 md:grid-cols-[2fr_1fr] mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.6019835994057!2d-16.695410784727773!3d13.436946008130707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29989928f65b9%3A0x8843c06955264d7f!2sManjai%20Kunda%2C%20Serrekunda!5e0!3m2!1sen!2sgm!4v1650439394088!5m2!1sen!2sgm"
          width="100%"
          height="450"
          loading="lazy"
        />
        <div className="bg-slate-200 relative h-[20vh] md:h-full">
          <Image
            src={centerImg}
            alt="center"
            fill={true}
            className="object-cover object-center w-full h-[30vh] md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
