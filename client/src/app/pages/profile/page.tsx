"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import CurrentlyPlayingMap from "@/components/currently/CurrentlyPlayingMap";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  const session = useSession();
  if (!session.data?.user) {
    router.replace("/pages/sign-in");
  }
  return (
    <div className="h-screen flex flex-col justify-center text-white bg-[#121212] items-center">
      <div>
        {session.data?.user ? (
          <div className="border rounded-md flex-col w-[400px] h-[450px] flex gap-[20px] justify-center  items-center">
            <div className="flex w-[] gap-[20px]">
              <div className="border-2 h-[65px] flex justify-center items-center rounded-xl w-[80px]">
                <Image
                  alt="photo"
                  src={session.data?.user?.image!}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="border-2  h-[65px] flex gap-[10px] justify-center items-center rounded-xl w-[200px]">
                <span>Role:</span> USER
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[300px]  h-[50px] border-2 flex justify-around items-center rounded-md">
                {session.data?.user?.name}
              </div>
              <div className="w-[300px]  h-[50px] border-2 flex justify-around items-center rounded-md">
                {session.data?.user?.email}
              </div>
            </div>
            <button
              className="w-[150px]  duration-300 hover:bg-[#292929] h-[50px] rounded-md border-2"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Log out
            </button>
          </div>
        ) : (
          <button
            className="w-[200px] hover:translate-y-[-2px] h-[75px] text-[20px] border-2 rounded-md shadow-2xl shadow-white"
            onClick={() => router.push("/pages/sign-in")}
          >
            Go to login page
          </button>
        )}
      </div>
    </div>
  );
};

export default page;
