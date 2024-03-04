"use client";
import React, { useState, useRef } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OrderButton from "./OrderButton";
import { fetchSecondMovies } from "@/func";

const CurrentlyPlaying = React.memo(() => {
  const sliderRef = useRef<Slider>(null);
  const movies = fetchSecondMovies();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "25%",
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  type MovieMap = { [key: number]: boolean };
  const [hoveredMovies, setHoveredMovies] = useState<MovieMap>({});

  return (
    <div className="mt-[100px] relative">
      <h2 className="text-[20px] font-bold my-[50px] flex justify-between mx-[50px]">
        Currently playing
        <Link href="/pages/currently-playing" className="text-[14px]">
          see more <TrendingFlatIcon />
        </Link>
      </h2>

      <div className="carousel-wrapper  ">
        <div className="w-full flex justify-between gap-[50px] absolute top-[200px]">
          <button
            onClick={goToPrev}
            className="z-50 text-gray-500 bg-slate-200 w-[50px] h-[50px] rounded-full"
          >
            <ArrowBackIosIcon />
          </button>
          <button
            onClick={goToNext}
            className="z-50  text-gray-500 absolute right-[13px] bg-slate-200 w-[50px] h-[50px] rounded-full"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {movies &&
            movies.results.map((movie) => (
              <Link href="/" key={movie.id} className="relative">
                <div
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
                  style={{ display: "flex", justifyContent: "center" }}
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
                      className="absolute top-0 max-xl:w-[100%] max-xl:left-0 w-[70%] left-[42px] h-full flex justify-center items-center bg-black bg-opacity-50"
                    >
                      <OrderButton />
                    </Link>
                  )}
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
});

export default CurrentlyPlaying;
