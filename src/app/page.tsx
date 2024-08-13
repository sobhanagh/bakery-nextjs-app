import Image from "next/image";
import Link from "next/link";
import TopProducts from "./component/TopProducts";
import FirstBuy from "./component/FirstBuy";


export default function Home() {
  return (
    <main className="mb-10">
      <div className="h-screen -mb-44">
        <Image src={"/home.svg"} alt="home" width={1} height={1}
          className="absolute h-full w-full object-cover top-0 left-0 -z-10 blur-xs sm:blur-none" />
        <div className="flex flex-col sm:items-start sm:ml-10 lg:ml-16 justify-center items-center gap-3 mt-32">
          <h4 className="text-brownColor md:text-xl">Delicious Cafe</h4>
          <h1 className="text-white text-3xl md:text-4xl mb-10 font-bold">Sweet Treats,Perfect Eats</h1>
          <div className="flex items-center gap-5">
            <Link className="bg-orange-900 sm:hover:bg-orange-800 transition duration-300 px-5 py-2 rounded-md text-white" href="#">Shop Now</Link>
            <Link className="text-brownColor" href="#">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className='text-2xl lg:text-3xl text-center mb-16'>Top Products</h1>
        <div className="mt-5">
          <TopProducts />
        </div>
      </div>
      <div className="mt-10">
        <FirstBuy />
      </div>

    </main >
  );
}
