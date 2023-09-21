import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import Community from "@/components/Community";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

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
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Resources
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <Link href="/">
              <li>Whitepaper</li>
            </Link>
            <Link href="/">
              <li>Brand Assets</li>
            </Link>
          </ul>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Products
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <Link href="/">
              <li>Blockchain</li>
            </Link>
            <Link href="/">
              <li>Governance</li>
            </Link>
          </ul>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Developers
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <Link href="/">
              <li>Documentation</li>
            </Link>
          </ul>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Foundation
          </h2>
          <ul
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            <Link href="/">
              <li>Contact</li>
            </Link>
            <Link href="/">
              <li>Job oppurtunities</li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
}
