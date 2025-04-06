import React from "react";
// import { navigation } from "../Header/menuData";
import Image from 'next/image'
import Link from 'next/link'
// import footerLOGO from "../Header/img/Elitek9_new_logo_2025@2x.png";
// import international from "../Header/img/international.webp";
import { AiFillTikTok, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { CgFacebook } from "react-icons/cg";
// import { MediaQuery } from "../utils/MediaQuery";

const Footer = () => {
  return (
    <div className="sticky">
      <div className="bg-black py-6">
        {/* <MediaQuery> */}
          <div className="space-y-3 md:space-y-0 md:grid grid-cols-4 items-start gap-8 pb-6 border-b border-neutral-900">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 relative">
                {/* <Link href={"/"}>
                  <Image
                    src={footerLOGO}
                    alt="LOGO"
                    fill={true}
                    priority
                    className="h-full w-full object-contain object-center"
                  />
                </Link> */}
              </div>
              <div className="w-28 h-12 relative">
                {/* <Image
                  src={international}
                  alt="LOGO"
                  fill={true}
                  priority
                  className="h-full w-full object-contain object-center"
                /> */}
              </div>
            </div>
            <div className="text-sm">
              <p className="italic">
                If you you hear the barking of dogs or the braying of donkeys at
                night, seek refuge in Allah for they see what you do not see.
              </p>
              <br />
              <p className="text-teal-600 text-xs">
                Prophet Muhammad Peace and blessings be upon him Narrated by
                Jaabir ibn Abdullah
              </p>
            </div>
            <div className="">
              <h2 className="uppercase mb-3 text-stone-400">quick link</h2>
              <ul className="">
                {/* {navigation.map((item: any, i: number) => (
                  <li key={i}>
                    <Link
                      href={item.path}
                      className="hover:text-theme_gold text-sm w-full md:w-fit">
                      {item.title}
                    </Link>
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="">
              <h2 className="uppercase mb-3 text-stone-400">contact us</h2>
              <div className="text-sm">
                <p className="font-semibold">+220 222 0333 </p>
                <p className="font-semibold">+44 7960600613</p>
                <br />
                <p>
                  UK Address: 119 Shelbourne Road Tottenham, London, N17 9YD, UK
                </p>
                <br />
                <p>
                  GM Address: Bakoteh Tippa Garage opposite Agib Bank Kombo,
                  Gambia Working Hours: Monday - Saturday 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 relative self-center">
            <h1 className="uppercase text-center mb-2 text-sm">follow us</h1>
            <div className="flex flex-col justify-center gap-3 items-center ">
              <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/elitek9worldwide/?igshid=1nda2zqnahtl3">
                  <AiFillInstagram className="hover:text-theme_gold text-2xl active:scale-95" />
                </a>
                <a href="https://www.youtube.com/channel/UCNleC5A1XMzovfinK7PXk7g">
                  <AiFillYoutube className="hover:text-theme_gold text-2xl active:scale-95" />
                </a>
                <a href="https://www.tiktok.com/@elitek9international?_t=ZM-8uiWSel48Ck&_r=1">
                  <AiFillTikTok className="hover:text-theme_gold text-2xl active:scale-95" />
                </a>
                <a href="https://www.facebook.com/share/1BQJiG27cF/">
                  <CgFacebook className="hover:text-theme_gold text-2xl active:scale-95" />
                </a>
              </div>
            </div>
          </div>
        {/* </MediaQuery> */}
      </div>
      <div className="bg-indigo-800 py-2 relative text-sm flex gap-1">
        {/* <MediaQuery> */}
          <span className="">© 2025 by EliteK9 International |</span>
          <span><strong><a href="https://www.nextgeninterface.com"></a>Website Design By <u>nextgeninterface</u></strong></span>
        {/* </MediaQuery> */}
      </div>
    </div>
  );
};

export default Footer;
