import React from 'react'
import TopProduct from './TopProduct'

const TopProducts = () => {

    const ImageSource = [
        { src: "/topProducts/product_1.svg" },
        { src: "/topProducts/product_2.svg" },
        { src: "/topProducts/product_3.svg" },
        { src: "/topProducts/product_4.svg" },
        { src: "/topProducts/product_5.svg" },
        { src: "/topProducts/product_6.svg" },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-64 mt-64 justify-items-center lg:gap-y-72 lg:mt-72 xl:gap-y-80">

            {
                ImageSource.map((item, index) => {
                    return (
                        <TopProduct key={index} imgSrc={item.src} />
                    )
                })
            }
        </div>
    )
}

export default TopProducts
