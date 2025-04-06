'use client'
import React, { useState } from 'react'
import Image from "next/image";


export const Card = ({ items }: { items: any }) => {

    const [selected, setSelectedTesti] = useState('')
    const [readMore, setReadMore] = useState(false)

    return (
        <div className="w-full space-y-2 p-4 shadow-md overflow-hidden shadow-neutral-900 bg-neutral-900 rounded-md">
            <div className="w-full flex gap-2">
                <div className="w-16 h-16 rounded-full relative overflow-hidden flex-shrink-0">
                    <Image
                        src={items?.img}
                        alt="quotes"
                        className="object-cover object-center h-full w-full"
                    />
                </div>
                <div className="">
                    <h3 className="text-md">{items?.name}</h3>
                    <h4 className="text-xs text-neutral-400">
                        {items?.occupation}
                    </h4>
                </div>
            </div>
            <p className="text-xs duration-300 transition-colors">
                {`${!readMore ? `${items.quote.substring(0, 350)}${items.quote.length > 320 ? '...' : ''}` : items.quote}`}
                {items.quote.length > 350 && <button onClick={() => setReadMore(!readMore)} className='text-teal-400/80 active:scale-95 ml-1'>{`${readMore ? 'show less' : 'read more'}`}</button>}

            </p>
        </div >
    )
}
