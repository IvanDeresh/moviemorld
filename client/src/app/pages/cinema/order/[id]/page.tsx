"use client";
import React from "react";
import { fetchMovies, fetchNewsData, fetchSecondMovies } from "@/func";
import type { Props } from "@/types";
import MovieCard from "@/components/MovieCard";
import OrderModelWindow from "@/components/OrderModelWindow";

const MovieDisplay = ({ params: { id } }: Props) => {
  const movies = fetchMovies();
  const movies2 = fetchSecondMovies();
  const filteredMovies = movies?.results.filter((m) => m.id === Number(id));
  const filteredMovies2 = movies2?.results.filter((m) => m.id === Number(id));
  return (
    <div className="h-auto z-50 bg-[#121212] text-black shadow-2xl">
      <div className="">
        {filteredMovies?.map((movies) => (
          <div key={movies.id}>
            <MovieCard
              title={movies.title}
              backdrop_path={movies.backdrop_path}
              poster_path={movies.poster_path}
              vote_average={movies.vote_average}
            />
          </div>
        ))}
        {filteredMovies?.length == 0 && (
          <div>
            {filteredMovies2?.map((movies) => (
              <div key={movies.id}>
                <MovieCard
                  title={movies.title}
                  backdrop_path={movies.backdrop_path}
                  poster_path={movies.poster_path}
                  vote_average={movies.vote_average}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDisplay;
