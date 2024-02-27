import { cinema } from "@/assets/img";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TheHeader = () => {
  return (
    <header className="flex justify-around items-center w-full mt-[20px]">
      <Link href="/">
        <Image src={cinema} width={40} alt="logo" />
      </Link>
      <ul className=" w-[25vw] flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/">Online</Link>
        <Link href="/pages/cinema">Offline</Link>
        <Link href="/">Contact</Link>
      </ul>
      <button>Sign in</button>
    </header>
  );
};

export default TheHeader;
