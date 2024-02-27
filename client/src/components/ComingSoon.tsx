"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { CurrentPlaying } from "@/types/index";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ComingSoon = React.memo(() => {
  const [movies, setMovies] = useState<CurrentPlaying | null>(null);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            params: { language: "en-US", page: "2" },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJiMmJjZDNhYTIyZDZiZThhN2Y3ZGM5ZDhlN2IxYSIsInN1YiI6IjY1ZDA4NzQ5ZTYyNzE5MDE4MTcxM2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8KnRoxBXrT9goCrF0kZ6F6eR9klZTM2PzaLXvhw4D5Q",
            },
          }
        );
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",

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

  return (
    <div className="my-[100px]">
      <h2 className="text-[20px] font-bold my-[50px] flex justify-between mx-[50px]">
        Coming Soon
        <span className="text-[14px]">
          see more <TrendingFlatIcon />
        </span>
      </h2>

      <div className="carousel-wrapper  ">
        <div className="w-[60vw] flex justify-between gap-[50px] absolute top-[1450px]">
          <button
            onClick={goToPrev}
            className="z-50 text-white bg-slate-200 w-[50px] h-[50px] rounded-full"
          >
            <ArrowBackIosIcon />
          </button>
          <button
            onClick={goToNext}
            className="z-50  text-white absolute right-[13px] bg-slate-200 w-[50px] h-[50px] rounded-full"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {movies &&
            movies.results.map((movie) => (
              <Link href="/" key={movie.id} className="relatieve">
                <div style={{ display: "flex", justifyContent: "center" }}>
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
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
});

export default ComingSoon;
