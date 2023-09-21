import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsFillChatFill,
  BsTwitter,
  BsTelegram,
  BsGithub,
} from "react-icons/bs";

export default function Community() {
  return (
    <div className="my-20 bg-[#505b63] py-12 sm:mx-20 px-4 rounded">
      <div className="flex flex-col align-center justify-center text-center">
        <h2 className="text-2xl font-semibold">Join the community</h2>
        <p className="pt-8 sm:px-40">
          Learn more about Maker, chat with the team, others in the community,
          and have your say in shaping the future of decentralized finance.
        </p>
      </div>
      <div className="flex flex-row px-4 gap-6 h-[100px] py-12 justify-center">
        <Link href="">
          <BsFillChatFill size={40} />
        </Link>
        <Link href="">
          <BsTwitter size={40} />
        </Link>
        <Link href="">
          <BsTelegram size={40} />
        </Link>
        <Link href="">
          <BsGithub size={40} />
        </Link>
      </div>
    </div>
  );
}
