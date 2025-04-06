"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./img/Elitek9_new_logo_2025@2x.png";
import { GrMenu } from "react-icons/gr";
import SideMenu from "./SideMenu.tsx/SideMenu";
import { MdOutlineClose } from "react-icons/md";
import { navigation } from "./menuData";
import { EliteBadge } from "../utils/EliteBadge";
import { Navlink } from "./Navlink";
import { TopStrip } from "./TopStrip";
import { MediaQuery } from "../utils/MediaQuery";
import international from './img/international.webp'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-[50] shadow-md shadow-neutral-900">
      <TopStrip />
      <div className="py-2 bg-[#0f0f0f]">
        <MediaQuery>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 relative">
                <Link href={"/"}>
                  <Image
                    src={logo}
                    alt="LOGO"
                    fill={true}
                    priority
                    className="h-full w-full object-contain object-center"
                  />
                </Link>
              </div>
              <div className="w-40 h-16 relative">
                <Image
                  src={international}
                  alt="LOGO"
                  fill={true}
                  priority
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
            <Navlink />
            {showMenu === true ? (
              <MdOutlineClose
                onClick={() => setShowMenu(!showMenu)}
                className="block md:hidden text-3xl"
              />
            ) : (
              <GrMenu
                onClick={() => setShowMenu(!showMenu)}
                className="block md:hidden text-3xl"
              />
            )
            }
          </div>
        </MediaQuery>
      </div>
      <SideMenu
        navigation={navigation}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </nav>
  );
};

export default Header;
