"use client";
import { fetchMovies } from "@/func";
import React from "react";

const HeroComponent = React.memo(({ id }: { id: number }) => {
  const movies = fetchMovies();
  return (
    <div>
      {movies?.results.map((item) => (
        <div>
          {id === item.id && (
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                width: "1000px",
                height: "700px",
                backgroundSize: "cover",
              }}
              className="rounded-3xl"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
});

export default HeroComponent;
