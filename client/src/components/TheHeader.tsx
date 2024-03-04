"use client";
import { cinema } from "@/assets/img";
import { fetchMovies, fetchSecondMovies } from "@/func";
import { CurrentPlaying, CurrentPlayingMovie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TheHeader = () => {
  const getFilteredItems = (query: string, items: any) => {
    if (!query) {
      return items;
    } else {
      return items.filter((item: any) => {
        return (
          (item.id && item.id.toString().includes(query)) || // Перетворюємо item.id у рядок за допомогою toString()
          item.title.includes(query)
        );
      });
    }
  };
  const [query, setQuery] = useState("");
  const movies1 = fetchMovies();
  const movies2 = fetchSecondMovies();
  function capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function formatMovieTitle(title: any) {
    const words = title.toLowerCase().split(" ");
    const capitalizedWords = words.map((word: any) =>
      capitalizeFirstLetter(word)
    );
    return capitalizedWords.join(" ");
  }

  const filteredItems = getFilteredItems(
    formatMovieTitle(query),
    movies1?.results
  );
  const filteredItems2 = getFilteredItems(
    formatMovieTitle(query),
    movies2?.results
  );
  const [isSearched, setIsSearched] = useState(false);
  return (
    <header className="flex  max-sm:flex  max-sm:justify-around z-50 max-sm:w-[100%] text-white absolute top-[20px] justify-around items-center w-[70%]">
      <Link href="/">
        <Image src={cinema} width={40} alt="logo" />
      </Link>
      <input
        onChange={(e: any) => {
          setQuery(e.target.value);
        }}
        onClick={() => setIsSearched(true)}
        placeholder="Serch"
        className="h-[35px] outline-none max-sm:w-[150px] text-gray-400 w-[300px] bg-gray-100 p-[10px] rounded-2xl"
      />

      {isSearched && (
        <div
          onMouseLeave={() => setIsSearched(false)}
          className="z-50 mt-[300px] gap-[10px] px-[40px] absolute border-none flex-col top-[-200px] max-sm:left-[50px] left-[100px] border-2 w-[500px] text-white max-sm:w-[300px]  max-h-[300px] rounded-2xl flex p-[30px] bg-[#121212] overflow-y-scroll min-h-[300px]"
        >
          {Array.isArray(filteredItems) &&
            filteredItems.length > 0 &&
            filteredItems.map((movie: any) => (
              <Link
                href={`/pages/cinema/order/${movie.id}`}
                className="h-[60px] w-full flex justify-between items-center"
                key={movie.id}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={40}
                  height={40}
                />
                <div className="hover:text-[#65f5e6] transition-colors duration-500">
                  {movie.title}
                </div>
              </Link>
            ))}
          {Array.isArray(filteredItems2) &&
            filteredItems2.length > 0 &&
            filteredItems2.map((movie: any) => (
              <Link
                href={`/pages/cinema/order/${movie.id}`}
                className="h-[60px] w-full flex justify-between items-center"
                key={movie.id}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={40}
                  height={40}
                />
                <div className="hover:text-[#65f5e6] transition-colors duration-500">
                  {movie.title}
                </div>
              </Link>
            ))}
        </div>
      )}

      <ul className=" w-[30%] max-xl:hidden  flex justify-between">
        <Link
          className="hover:text-[#65f5e6] transition-colors duration-500"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-[#65f5e6] transition-colors duration-500"
          href="/"
        >
          Online
        </Link>
        <Link
          className="hover:text-[#65f5e6] transition-colors duration-500"
          href="/pages/cinema"
        >
          Order
        </Link>
        <Link
          className="hover:text-[#65f5e6] transition-colors duration-500"
          href="/pages/contact"
        >
          Info
        </Link>
      </ul>
      <button className="hover:text-[white] text-[#65f5e6] hover:bg-[#65f5e6] transition-colors duration-500 bg-gray-100 w-[150px] h-[40px] rounded-xl">
        Sign in
      </button>
    </header>
  );
};

export default TheHeader;
