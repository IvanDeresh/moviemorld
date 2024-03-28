"use client";
import React from "react";
import { useMovies } from "@/func";
import type { Props } from "@/types";
import MovieCard from "@/components/MovieCard";
import { useSearchParams } from "next/navigation";

const MovieDisplay = ({ params: { id } }: Props) => {
  const searchParams = useSearchParams();

  const pageNumber = searchParams.get("page") ?? "1";

  const movies = useMovies(parseInt(pageNumber));
  const filteredMovies = movies?.results.filter((m) => m.id === Number(id));

  return (
    <div className="h-auto z-50 bg-[#121212] text-black shadow-2xl">
      <div className="">
        {filteredMovies?.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              title={movie.title}
              backdrop_path={movie.backdrop_path}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
