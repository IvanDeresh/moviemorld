"use client";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { signOut, useSession } from "next-auth/react";
import { useMovies } from "@/func";
import Image from "next/image";
import React, { useEffect } from "react"; // Import React and useEffect

const Page = () => {
  // Changed from 'page' to 'Page'
  const router = useRouter();
  const { data: session } = useSession(); // Destructure data from session
  const movies = useMovies(1);

  useEffect(() => {
    // Added useEffect to handle redirect
    if (!session?.user) {
      router.replace("/pages/sign-in");
    }
  }, [session, router]);

  return (
    <div className="h-screen  flex flex-col justify-center text-white bg-[#121212] items-center">
      <div>
        {session?.user ? (
          <div className="border py-[50px] rounded-md flex-col w-[400px] overflow-hidden h-[450px] flex gap-[20px] justify-center  items-center">
            <div className="flex flex-col gap-[20px]">
              <div className="w-[300px]  h-[50px] border-2 flex justify-around items-center rounded-md">
                {session.user.email}
              </div>
            </div>
            <h1 className="text-">Recommended for you</h1>
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
              className="w-[150px]  hover:text-[#fff] text-[#8d090d] transition-colors duration-500 hover:bg-[#8D090D] h-[50px] bg-[#0e0d0d] rounded-md"
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

export default Page; // Changed from 'page' to 'Page'
