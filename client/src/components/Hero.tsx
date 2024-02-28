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
    slidesToShow: 5,
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
    <div className="my-[100px] relative h-screen">
      <div className="absolute">
        <HeroComponent id={id} />
      </div>
      <div className="carousel-wrapper z-50 relative top-[500px]">
        <div className="w-[60vw] flex justify-between gap-[50px] absolute top-[110px]">
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
              <Link href="" key={movie.id} className="relatieve">
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
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
});

export default Hero;
