'use client'
import React from 'react'
import { navigation } from "./menuData";
import Link from 'next/link';
import { usePathname } from 'next/navigation'



export const Navlink = () => {
    const pathname = usePathname()

    return (
        <ul className="hidden lg:flex item-center justify-center self-center gap-1">
            {navigation.map((item: any, i: number) => (
                <div key={i} className="flex gap-1">
                    <li className="self-center flex justify-center items-center">
                        <Link
                            href={item.path}
                            className={`${item.path === pathname ? 'text-theme_gold hover:theme_gold' : ''} capitalize hover:text-neutral-400 active:scale-95 duration-300`}>
                            {item.title}
                        </Link>
                    </li>
                    <p className='text-neutral-600'>|</p>
                </div>

            ))}
        </ul>
    )
}
