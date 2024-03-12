"use client";
import { useMovies } from "@/func";
import React from "react";

const HeroComponent = React.memo(function HeroComponent({
  id,
}: {
  id: number;
}) {
  const movies = useMovies();
  return (
    <div className="">
      {movies?.results.map((item) => (
        <div key={item.id}>
          {id === item.id && (
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                width: "100vw",
                height: "700px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
});

export default HeroComponent;
