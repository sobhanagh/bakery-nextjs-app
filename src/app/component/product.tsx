import Image from "next/image"

type productType = {
    title: string,
    category: string,
    price: number,
    img: string,
    desc: string,
}

const Product = ({ title, category, price, img, desc }: productType) => {

    return (
        <div className="flex flex-col gap-3 sm:flex-row w-5/6">
            <Image
                src={img}
                width={1000}
                height={1000}
                alt="product"
                className="sm:w-1/2 sm:h-56 w-full h-72 object-cover rounded-lg border-brownColor border-4"
            />
            <div className="flex flex-col gap-1 sm:w-1/2">
                <div className="flex justify-between font-semibold border-b-4 border-dotted">
                    <h2>{title}</h2>
                    <p className="text-brownColor">${price}</p>
                </div>
                <p className="text-gray-500 text-base">{desc}</p>
            </div>
        </div>
    )
}

export default Product
