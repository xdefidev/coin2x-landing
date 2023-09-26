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
          Learn more about Coin2x, chat with the team, others in the community,
          and have your say in shaping the future of decentralized finance.
        </p>
      </div>
      <div className="flex flex-row px-4 gap-6 h-[100px] py-12 justify-center">
        <Link href="mailto:contact@coin12pay.com" target="_blank">
          <BsFillChatFill size={40} />
        </Link>
        <Link
          href="https://x.com/coin12capital?s=21&t=Z_ExBochL-wLS-cel6694w"
          target="_blank"
        >
          <BsTwitter size={40} />
        </Link>
        <Link href="https://t.me/coin12capitalllc" target="_blank">
          <BsTelegram size={40} />
        </Link>
        <Link href="https://github.com/Coin12Pay" target="_blank">
          <BsGithub size={40} />
        </Link>
      </div>
    </div>
  );
}
