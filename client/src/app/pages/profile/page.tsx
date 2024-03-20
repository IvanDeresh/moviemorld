"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import CurrentlyPlayingMap from "@/components/currently/CurrentlyPlayingMap";
import Link from "next/link";
import { fetchMovies } from "@/func";
const page = () => {
  const router = useRouter();
  const session = useSession();
  const movies = fetchMovies();
  if (!session.data?.user) {
    router.replace("/pages/sign-in");
  }
  return (
    <div className="h-screen  flex flex-col justify-center text-white bg-[#121212] items-center">
      <div>
        {session.data?.user ? (
          <div className="border py-[50px] rounded-md flex-col w-[400px] overflow-hidden h-[450px] flex gap-[20px] justify-center  items-center">
            <div className="flex flex-col gap-[20px]">
              <div className="w-[300px]  h-[50px] border-2 flex justify-around items-center rounded-md">
                {session.data?.user?.email}
              </div>
            </div>
            <h1 className="text-">Recomended for you</h1>
            <div className="gap-[10px] overflow-x-hidden h-[250px]  flex">
              {movies?.results.map((movie) => (
                <div key={movie.id} className="w-[100px] h-[145px] border-2">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width={100}
                    height={150}
                  />
                </div>
              ))}
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
