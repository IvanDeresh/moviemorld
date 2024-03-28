"use client";
import React from "react";
import { useMovies } from "@/func";
import type { Props } from "@/types";
import MovieCard from "@/components/MovieCard";
import { useSearchParams } from "next/navigation";

const MovieDisplay = ({ params: { id } }: Props) => {
<<<<<<< HEAD
  const movies = useMovies(1);
=======
  const searchParams = useSearchParams();

  const pageNumber = searchParams.get("page") ?? "1";

  const movies = useMovies(parseInt(pageNumber));
>>>>>>> auth
  const filteredMovies = movies?.results.filter((m) => m.id === Number(id));

  return (
    <div className="h-auto z-50 bg-[#121212] text-black shadow-2xl">
      <div className="">
<<<<<<< HEAD
        {filteredMovies?.map((movies) => (
          <div key={movies.id}>
=======
        {filteredMovies?.map((movie) => (
          <div key={movie.id}>
>>>>>>> auth
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
