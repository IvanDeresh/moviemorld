"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = "/pages/profile";
  return (
    <div
      className=" bg-white text-black cursor-pointer w-[200px] h-[50px] rounded-xl text-[15px] leading-6 flex flex-col justify-center items-center"
      onClick={() => signIn("google", { callbackUrl })}
    >
      Sign in with Google
    </div>
  );
};

export default GoogleButton;
