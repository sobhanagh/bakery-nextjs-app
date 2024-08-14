import Image from "next/image"
import Link from "next/link"

const Footer = () => {

    const Icons = [
        { src: "icons/facebook.svg" },
        { src: "icons/instagram.svg" },
        { src: "icons/pinterest.svg" },
        { src: "icons/whatsapp.svg" },
    ]

    return (
        <div>
            <Image src={"/footer.svg"} alt="home" width={1} height={1}
                className="absolute w-full h-5/6 sm:h-3/6 object-cover -z-10" />
            <div className="flex flex-col px-5 py-2">
                <div className="flex justify-between md:px-10">
                    <Link href="/">
                        <Image
                            src={"/logo.svg"}
                            width={1}
                            height={1}
                            alt="logo"
                            className="size-16 md:size-18 lg:size-20"
                        />
                    </Link>
                    <div className="flex items-center gap-2">
                        <p className="text-brownColor sm:text-xl lg:text-2xl">Follow us</p>
                        {
                            Icons.map((icon, index) => {
                                return (
                                    <Link href={"#"} key={index}>
                                        <Image
                                            src={icon.src}
                                            width={25}
                                            height={25}
                                            alt="logo"
                                        />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-5 mt-5 sm:mt-10">
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-brownColor font-bold text-xl sm:text-2xl">About us</h2>
                        <div className="sm:text-lg flex flex-col items-center sm:items-start">
                            <p className="text-white">(456) 789-12301</p>
                            <p className="text-white">info@modrino.co.uk</p>
                            <p className="text-white">South 13th street</p>
                            <p className="text-white">New york America</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-brownColor font-bold text-xl sm:text-2xl">Explore</h2>
                        <div className="sm:text-lg flex flex-col items-center sm:items-start">
                            <p className="text-white">Home</p>
                            <p className="text-white">Products</p>
                            <p className="text-white">Contact us</p>
                            <p className="text-white">Services</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-brownColor font-bold text-xl sm:text-2xl">Recent News</h2>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between gap-3">
                                <Image
                                    src={"/recent_news/first.svg"}
                                    width={50}
                                    height={50}
                                    alt="recent news"
                                    className="size-14 sm:size-16"
                                />
                                <div className="flex flex-col">
                                    <p className="text-brownColor text-xs">June 14,2024</p>
                                    <p className="text-white text-sm">Puff Pastry bliss.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <Image
                                    src={"/recent_news/second.svg"}
                                    width={50}
                                    height={50}
                                    alt="recent news"
                                    className="size-14 sm:size-16"
                                />
                                <div className="flex flex-col">
                                    <p className="text-brownColor text-xs">June 14,2024</p>
                                    <p className="text-white text-sm">Puff Pastry bliss.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
