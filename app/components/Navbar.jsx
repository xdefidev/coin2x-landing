import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between my-6 sm:px-24 px-6">
      <div>
        <Image
          src="/lg-black.png"
          width={100}
          height={100}
          alt="logo"
          className="dark:invert "
        />
      </div>
      <div>
        <ul className="sm:flex justify-evenly gap-8 hidden ">
          <li>Developers</li>
          <li>Learn</li>
          <li>Community</li>
          <Link href="https://explorer.coin12pay.com/" target="_blank">
            {" "}
            <li>Explorer</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
