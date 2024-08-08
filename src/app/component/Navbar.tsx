"use client";


import Link from "next/link"
import Image from "next/image";


const Navbar = () => {

    const Links = [
        { title: "Home", address: "/" },
        { title: "Blog", address: "/blog" },
        { title: "Contact Us", address: "/contactus" },
        { title: "Services", address: "/services" },
    ]

    const showLinks = () => {
        const ul = document.querySelector("ul");

        if (ul?.classList.contains("max-h-0")) {
            ul?.classList.remove("max-h-0")
            ul?.classList.add("max-h-96")
        }
        else {
            ul?.classList.add("max-h-0")
            ul?.classList.remove("max-h-96")
        }
    }


    return (
        <div className="flex items-center justify-between flex-wrap p-5 md:px-10">
            <Link href="/">
                <Image
                    src={"/logo.svg"}
                    width={1}
                    height={1}
                    alt="logo"
                    className="size-16 md:size-18 lg:size-20"
                />
            </Link>
            <button className="md:hidden mb-3" onClick={showLinks}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <ul className="flex ml-3 flex-col w-full overflow-hidden max-h-0 mt-2 transition-all duration-300 md:max-h-96 md:w-auto md:flex-row md:gap-3 lg:gap-5 md:mt-0 md:ml-0 md:mb-3">
                {
                    Links.map((item) => {
                        return (
                            <Link className="lg:hover:text-brownColor transition-colors duration-200" key={item.address} href={item.address}>
                                {item.title}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar
