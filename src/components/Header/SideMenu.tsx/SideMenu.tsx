"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'


const SideMenu = ({
  navigation,
  showMenu,
  setShowMenu,
}: {
  navigation: {}[];
  showMenu: boolean;
  setShowMenu: any;
}) => {
  const router = useRouter();
  const pathname = usePathname()

  const handleNavigation = (path: string): any => {
    router.push(`${path}`);
    setTimeout(() => {
      setShowMenu(false);
    }, 1500);
  };
  return (
    <aside
      className={`${showMenu === true ? "block" : "hidden"
        } bg-theme_dark w-full h-[89vh] relative left-0 z-40 border-t border-neutral-800`}>

      <ul className="flex flex-col justify-between p-5 my-4 relative h-full z-10">
        <li className="flex flex-col justify-start gap-1">
          {navigation.map((item: any, i: number) => (
            <button
              key={i}
              onClick={() => handleNavigation(item.path)}
              className={`${item.path === pathname ? 'text-theme_gold hover:theme_gold' : ''} capitalize font-semibold text-left text-xl py-3`}>
              {item.title}
            </button>
          ))}
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
