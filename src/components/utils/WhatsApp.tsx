import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/+2202220333"
      className="sm:hidden w-12 h-12 bg-green-600 rounded-full fixed bottom-5 right-5 shadow-sm text-white shadow-neutral-800 flex justify-center items-center z-50">
      <BsWhatsapp className="self-center text-2xl" />
    </a>
  );
};

export default WhatsApp;
