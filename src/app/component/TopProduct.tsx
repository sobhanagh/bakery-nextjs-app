import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


type TopProductProps = {
    imgSrc: string
}

const TopProduct = ({ imgSrc }: TopProductProps) => {

    return (
        <div
            className="relative flex flex-col justify-end w-52 small:w-72 lg:w-80 xl:w-9/12 xl:mb-10 hover:-translate-y-5 transition-all duration-200">
            <Image className='absolute z-10 w-full object-cover' src={imgSrc} width={200} height={200} alt="bread" />
            <div className="flex z-30 flex-col text-white px-4 py-4 w-full h-full">
                <h3>$40</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <h2>Whole Grain</h2>
                        <h3>Bread</h3>
                    </div>
                    <Link className="bg-orange-900 sm:hover:bg-orange-800 transition duration-300 px-5 py-2 rounded-md text-white lg:px-6 lg:py-2 lg:text-xl" href="#">Add</Link>
                </div>
            </div>
        </div>
    )
}

export default TopProduct
