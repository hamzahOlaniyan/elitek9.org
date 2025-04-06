import React from 'react'
import { sales } from './sales'
import Image from 'next/image'
import { GoCheck } from 'react-icons/go'

export const SaleCard = () => {

    const Info = ({ text, label }: { text: string | React.ReactNode, label: string }) => (
        <div className="flex  gap-2 capitalize">
            <span className='text-sm font-light text-nowrap'>{label}:</span>
            <h1 className='font-semibold'>{text}</h1>
        </div>
    )
    return (
        <div className='lg:grid grid-cols-2 gap-6 gap-y-10'>
            {sales.map((sell) => {
                const { img,
                    name,
                    breed,
                    sex,
                    age,
                    trained,
                    list,
                    description,
                } = sell

                return (
                    <article key={name} className='my-10 lg:my-0 bg-neutral-900 rounded-lg p-3'>
                        <div className="w-full grid grid-col-1 sm:grid-cols-[1fr_1fr] sm:gap-4 mb-3">
                            <div className="h-[20rem] w-full sm:h-[18rem]  relative">
                                <Image src={img} alt={sell.name} fill={true} className='h-full w-full relative object-cover object-center rounded-lg' />
                            </div>
                            <div className="flex flex-col xs:flex-row sm:flex-col gap-5 mt-3 sm:mt-0">
                                <div className="">
                                    <Info label='name' text={name} />
                                    <Info label='breed' text={breed} />
                                    <Info label='sex' text={sex} />
                                    <Info label='age' text={age} />
                                    <Info label='trained in' text={trained} />
                                </div>
                                <div className="">
                                    {list.map((l, idx: number) => (
                                        <ul key={idx} className='flex items-center gap-1 text-teal-200/90'>
                                            <GoCheck />
                                            <li>{l}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='text-sm'>{description}</p>
                    </article>
                )
            })}
        </div>
    )
}
