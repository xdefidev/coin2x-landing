import React from "react";
import Image from "next/image";

export default function SectionB() {
  return (
    <div className="grid grid-rows-3 w-full mt-40 sm:px-40 px-6 sm:space-y-16  ">
      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        <div>
          <h2 className="text-2xl font-semibold px-8">
            Financial freedom with no volatility
          </h2>
          <p className="text-xl pt-6 px-8">
            A price-stable currency that you control. Generate C12 on your
            terms, instantly.
          </p>
          <button className="text-base pt-6 px-8 text-[#f29e]">
            Read the whitepaper
          </button>
        </div>
        <div className="flex justify-center align-center p-12">
          <Image
            src="/vercel.svg"
            className="dark:invert"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="text-2xl font-semibold px-8">
            Decentralized governance
          </h2>
          <p className="text-xl pt-6 px-8">
            A community of MKR token holders govern the Coin2x Protocol, the
            smart contracts that power C12.
          </p>
          <button className="text-base pt-6 px-8 text-[#f29e]">
            Learn more
          </button>
        </div>
        <div className="flex justify-center align-center p-12">
          <Image
            src="/vercel.svg"
            className="dark:invert"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        <div>
          <h2 className="text-2xl font-semibold px-8">A growing ecosystem</h2>
          <p className="text-xl pt-6 px-8">
            Over 400 apps and services have integrated C12, including wallets,
            DeFi platforms, games and more.
          </p>
          {/* <a className="text-base pt-6 px-8">Read the whitepaper</a> */}
        </div>
        <div className="flex justify-center align-center p-12">
          <Image
            src="/ecosystem.png"
            className=""
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
