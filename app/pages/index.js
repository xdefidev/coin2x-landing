import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import Community from "@/components/Community";
import { BsFillPlayFill } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6">
      <Navbar />
      <div className="w-full sm:max-w-4xl items-center justify-between text-sm my-40">
        <h1 className="text-5xl font-semibold">A better, smarter currency</h1>
        <p className="text-xl mt-6">
          C12 can be used by anyone, anywhere, anytime.
        </p>
        <div className="my-8 gap-4 flex">
          <button className="py-2 px-4  text-base rounded-2xl hover:bg-white hover:text-black ">
            Use C12
          </button>
          <button className="py-2 px-4 bg-white text-black text-base rounded-2xl flex">
            <BsFillPlayFill size={25} />
            Play Video
          </button>
        </div>
      </div>
      <SectionA />
      <SectionB />
      <Community />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Resources
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <li>Whitepaper</li>
            <li>Brand Assets</li>
          </ul>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Products
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <li>Whitepaper</li>
            <li>Brand Assets</li>
          </ul>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Developers
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <li>Whitepaper</li>
            <li>Brand Assets</li>
          </ul>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Foundation
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <li>Whitepaper</li>
            <li>Brand Assets</li>
          </ul>
        </a>
      </div>
    </main>
  );
}
