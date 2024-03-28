"use client";
import { useMovies } from "@/func";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
<<<<<<< HEAD:client/src/components/ComingSoonMap.tsx
const ComingSoonMap = () => {
  const movies = useMovies(1);
=======
const ComingSoonMap = React.memo(() => {
  const [page, setPage] = useState(2);
  const movies = useMovies(page);
>>>>>>> auth:client/src/components/coming/ComingSoonMap.tsx
  const [hoveredMovies, setHoveredMovies] = useState<MovieMap>({});
  type MovieMap = { [key: number]: boolean };
  return (
    <div className="flex flex-wrap gap-[30px]">
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
              <div className="absolute overflow-hidden w-[200px] top-[180px] text-white text-bold p-[20px]">
                <h1 className="text-[13px]">{movie.title}</h1>
                <p className="text-[12px]">{movie.release_date}</p>
                <div className="relative">
                  <div className="bg-slate-300 opacity-30 w-[30px] h-[15px] rounded-md absolute top-0 left-0"></div>
                  <p className="text-[12px] relative right-[-7px] top-[-2px] z-10">
                    {movie.original_language}
                  </p>
                </div>
                <p className="text-[12px]">
<<<<<<< HEAD:client/src/components/ComingSoonMap.tsx
                  {movie.vote_average.toFixed(1)} : IMD&apos;b
=======
                  {movie.vote_average.toFixed(1)} : IMDb
>>>>>>> auth:client/src/components/coming/ComingSoonMap.tsx
                </p>
              </div>
              {hoveredMovies[movie.id] && (
                <Link
                  href={`/pages/cinema/order/${movie.id}?page=${page}`}
                  className="absolute top-0 left-0 w-[100%] h-full flex justify-center items-center bg-black bg-opacity-50"
                >
                  <OrderButton />
                </Link>
              )}
            </div>
          </Link>
        ))}
      <div
        onClick={() => {
          setPage(page + 1);
        }}
        className="w-[150px]  hover:text-[#fff] text-[#8d090d] transition-colors duration-500 flex justify-center items-center self-center ml-[50px] hover:bg-[#8D090D] h-[50px] bg-[#0e0d0d] rounded-md"
      >
        NEXT
      </div>
    </div>
  );
});
ComingSoonMap.displayName = "ComingSoonMap";
export default ComingSoonMap;
