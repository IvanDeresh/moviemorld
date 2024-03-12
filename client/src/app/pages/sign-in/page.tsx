"use client";
import React from "react";
import FormSignin from "@/components/FormSignin";
import GoogleButton from "@/components/GoogleButton";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const page = () => {
  const route = useRouter();
  const session = useSession();
  if (session.data?.user) {
    route.replace(`/pages/profile`);
  }
  return (
    <div className="flex justify-center bg-[#313131] text-black items-center h-screen max-container">
      <div className=" w-[500px] h-[600px] rounded-xl shadow-2xl shadow-black  flex flex-col gap-[50px] justify-center items-center">
        <FormSignin />
        <GoogleButton />
      </div>
    </div>
  );
};

export default page;
