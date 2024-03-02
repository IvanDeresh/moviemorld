"use client";
import { fetchMovies } from "@/func";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
const page = () => {
  const movies = fetchMovies();
  const [hoveredMovies, setHoveredMovies] = useState<MovieMap>({});
  type MovieMap = { [key: number]: boolean };
  return (
    <div className="flex flex-wrap gap-[30px] mt-[100px]">
      {movies &&
        movies.results.map((movie) => (
          <Link href="/" key={movie.id} className={`relative`}>
            <div
              className="relative"
              onMouseEnter={() =>
                setHoveredMovies((prevHoveredMovies) => ({
                  ...prevHoveredMovies,
                  [movie.id]: true,
                }))
              }
              onMouseLeave={() =>
                setHoveredMovies((prevHoveredMovies) => ({
                  ...prevHoveredMovies,
                  [movie.id]: false,
                }))
              }
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
              <div className="absolute overflow-x-hidden w-[200px] top-[180px] text-white text-bold p-[20px]">
                <h1 className="text-[13px]">{movie.title}</h1>
                <p className="text-[12px]">{movie.release_date}</p>
                <div className="relative">
                  <div className="bg-slate-300 opacity-30 w-[30px] h-[15px] rounded-md absolute top-0 left-0"></div>
                  <p className="text-[12px] relative right-[-7px] top-[-2px] z-10">
                    {movie.original_language}
                  </p>
                </div>
                <p className="text-[12px]">
                  {movie.vote_average.toFixed(1)} : IMD'b
                </p>
              </div>
              {hoveredMovies[movie.id] && (
                <Link
                  href={`/pages/cinema/order/${movie.id}`}
                  className="absolute top-0 left-0 w-[100%] h-full flex justify-center items-center bg-black bg-opacity-50"
                >
                  <OrderButton />
                </Link>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default page;
