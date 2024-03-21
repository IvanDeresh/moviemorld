"use client";
import React, { useEffect } from "react"; // Import React and useEffect
import FormSignin from "@/components/FormSignin";
import GoogleButton from "@/components/GoogleButton";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace(`/pages/profile`);
    }
  }, [session, router]);

  return (
    <div className="flex justify-center bg-[#313131] text-black items-center h-screen max-container">
      <div className=" w-[500px] h-[600px] rounded-xl shadow-2xl shadow-black  flex flex-col gap-[50px] justify-center items-center">
        <FormSignin />
        <GoogleButton />
      </div>
    </div>
  );
};

export default Page;
