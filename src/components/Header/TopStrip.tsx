import React from 'react'
import { AiFillTikTok, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { CgFacebook } from "react-icons/cg";
import { MediaQuery } from '../utils/MediaQuery'
import { IoIosMail } from "react-icons/io";


export const TopStrip = () => {
    return (
        <div className="bg-theme_gold">
            <MediaQuery>
                <div className="flex items-center justify-center md:justify-between gap-4 text-black py-1">
                    <strong className="text-sm font-semibold capitalize">
                        The avant-garde of security k9 worldwide
                    </strong>
                    <div className="hidden sm:flex items-center gap-1">
                        <a href="https://www.instagram.com/elitek9worldwide/?igshid=1nda2zqnahtl3">
                            <AiFillInstagram className="hover:bg-yellow-500 rounded-md active:scale-95" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCNleC5A1XMzovfinK7PXk7g">
                            <AiFillYoutube className="hover:bg-yellow-500 rounded-md active:scale-95" />
                        </a>
                        <a href="https://www.tiktok.com/@elitek9international?_t=ZM-8uiWSel48Ck&_r=1">
                            <AiFillTikTok className="hover:bg-yellow-500 rounded-md active:scale-95" />
                        </a>
                        <a href="https://www.facebook.com/share/1BQJiG27cF/">
                            <CgFacebook className="hover:bg-yellow-500 rounded-md active:scale-95" />
                        </a>
                        <p className="text-xs font-semibold">@elitek9worldwide</p>
                        <div className="flex items-center">
                            <IoIosMail />
                            <p className="text-xs font-semibold">elitek9@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
