"use client";
import { fetchMovies } from "@/func";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeroComponent from "./HeroComponent";

const Hero = React.memo(() => {
  const [id, setId] = useState(969492);
  const sliderRef = useRef<Slider>(null);
  const movies = fetchMovies();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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

  return (
    <div className="mb-[50px] relative h-screen overflow-x-hidden">
      <div className="absolute ">
        <HeroComponent id={id} />
      </div>
      <div className="carousel-wrapper z-50 relative top-[500px]">
        <div className="w-full flex justify-between gap-[50px] absolute top-[110px]">
          <button
            onClick={goToPrev}
            className="z-50 text-gray-400 bg-slate-200 w-[50px] h-[50px] rounded-full"
          >
            <ArrowBackIosIcon />
          </button>
          <button
            onClick={goToNext}
            className="z-50  text-gray-400 absolute right-[13px] bg-slate-200 w-[50px] h-[50px] rounded-full"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <Slider className="p-[40px]" ref={sliderRef} {...settings}>
          {movies &&
            movies.results.map((movie) => (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={150}
                  height={200}
                  className="rounded-xl"
                  onClick={() => setId(movie.id)}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
});

export default Hero;
