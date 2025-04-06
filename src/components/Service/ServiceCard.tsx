import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import img1 from "./img/guard-dog1.jpg";
import img2 from "./img/obedience.jpg";
import img3 from "./img/imprintingibz.jpg";

const service = [
    { title: "Guarding Dog Training", img: img1 },
    { title: "Obedience Training", img: img2 },
    { title: "Puppy Imprinting", img: img3 },
];


export const ServiceCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
            {service.map((item: any, i: number) => (
                <Link
                    key={i}
                    href={"/Dog_Training"}
                    className="w-full rounded-md overflow-hidden bg-theme_dark active:scale-95 relative">
                    <div className="opacity-0 hover:opacity-25 bg-neutral-900 absolute top-0 bottom-0 w-full h-full z-10 transition"></div>
                    <div className="w-full h-[20vh] md:h-[40vh] relative">
                        <Image
                            src={item.img}
                            alt="leash training"
                            fill={true}
                            className="object-cover object-center group:hover:bg-neutral-600 scale-100 hover:scale-95 transition w-full h-full"
                            priority
                        />
                    </div>
                    <div className="text-center p-3 space-y-1">
                        <h2 className="font-semibold ">
                            {item.title}
                        </h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}
