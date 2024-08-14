import Link from "next/link"

const FirstBuy = () => {
    return (
        <div style={{ backgroundImage: "url('first_buy.svg')" }}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-96 bg-no-repeat bg-contain bg-center sm:bg-cover">
            <div className="flex flex-col items-center py-10 small:gap-3 lg:gap-10 lg:py-14">
                <h2 className="text-orange-900 md:text-2xl lg:text-6xl font-bold">20% Off  Your First Order</h2>
                <p className="w-2/4 text-xs small:text-sm sm:text-base text-center md:text-2xl lg:text-3xl">
                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.
                </p>
                <Link className="bg-orange-900 sm:hover:bg-orange-800 transition duration-300 px-2 py-1 md:px-5 md:py-2 lg:px-8 lg:py-4 lg:text-xl rounded-md text-white" href="#">
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default FirstBuy
