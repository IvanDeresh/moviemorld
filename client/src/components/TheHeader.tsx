"use client";
import { cinema } from "@/assets/img";
import { useMovies } from "@/func";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const TheHeader = React.memo(() => {
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
  const movies1 = useMovies(1);
  const [click, setClick] = useState(false);
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
  const [isSearched, setIsSearched] = useState(false);
  const session = useSession();
  return (
    <header className="flex max-2xl:left-[15%] top-[10px] max-sm:left-[0] max-sm:flex  max-sm:justify-around z-50 max-sm:w-[100%] text-white absolute  justify-around items-center w-[70%]">
      <Link href="/">
        <Image src={cinema} width={40} alt="logo" />
      </Link>
      <input
        onChange={(e: any) => {
          setQuery(e.target.value);
        }}
        onClick={() => setIsSearched(true)}
        placeholder="Serch"
        className="h-[35px] outline-none max-sm:w-[150px] text-gray-400 w-[300px] bg-[#141414] p-[10px] rounded-md"
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
                <div className="hover:text-[#8D090D] transition-colors duration-500">
                  {movie.title}
                </div>
              </Link>
            ))}
        </div>
      )}

      <ul className=" w-[30%] max-xl:hidden  flex justify-between">
        <Link
          className="hover:text-[#8D090D] transition-colors duration-500"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-[#8D090D] transition-colors duration-500"
          href="/pages/profile"
        >
          Profile
        </Link>
        <Link
          className="hover:text-[#8D090D] transition-colors duration-500"
          href="/pages/recomended"
        >
          Recomended
        </Link>
      </ul>
      <div className=" max-xl:hidden">
        {session.data?.user ? null : (
          <Link
            href="/pages/sign-in"
            className="hover:text-[white] flex  justify-center items-center text-[#8D090D] hover:bg-[#8D090D] transition-colors duration-500 bg-gray-100 w-[150px] h-[40px] rounded-xl"
          >
            Sign in
          </Link>
        )}
      </div>
      <button
        className="hidden w-[40px] h-[40px] active:bg-[#f84248] bg-[#8d090d] hover:bg-[#fff] hover:text-[#8d090d] duration-700 max-xl:justify-center max-xl:items-center rounded-md max-xl:flex"
        onClick={() => setClick(!click)}
      >
        {click === true ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`absolute  ${
          click ? "flex" : "hidden"
        } bg-[#121212] w-[200px] min-[1280px]:hidden flex-col items-center py-[20px] h-[300px] top-[70px] rounded-md right-[30px]`}
      >
        <h2 className="text-[#8d090d] font-montserrat text-[20px] font-bold">
          MovieWorld
        </h2>
        <ul className="flex  flex-col gap-[5px] my-[20px]">
          <Link
            className="hover:text-[#8D090D] transition-colors duration-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#8D090D] transition-colors duration-500"
            href="/pages/profile"
          >
            Profile
          </Link>
          <Link
            className="hover:text-[#8D090D] transition-colors duration-500"
            href="/pages/recomended"
          >
            Recomended
          </Link>
        </ul>
        {session.data?.user ? null : (
          <Link
            href="/pages/sign-in"
            className="hover:text-[white] flex mt-[50px] justify-center items-center text-[#8D090D] hover:bg-[#8D090D] transition-colors duration-500 bg-gray-100 w-[150px] h-[40px] rounded-xl"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
});

TheHeader.displayName = "header";

export default TheHeader;
