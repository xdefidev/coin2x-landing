import React from "react";
import Image from "next/image";

export default function SectionA() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:h-[379px] h-[600px] w-full">
      <div className="bg-white flex justify-center align-center">
        <Image
          src="/lg-black.png"
          width={200}
          height={200}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="bg-[#505b63] flex flex-col  justify-center sm:px-12 px-6">
        <h2 className="text-2xl font-semibold">
          The world’s first unbiased currency
        </h2>
        <p className="text-xl pt-4">
          C12 is a stable, decentralized currency that does not discriminate.
          Any individual or business can realize the advantages of digital
          money.
        </p>
      </div>
    </div>
  );
}
