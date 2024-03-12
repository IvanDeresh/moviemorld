"use client";
import React from "react";
import CurrentlyPlaying from "@/components/currently/CurrentlyPlaying";
import ComingSoon from "@/components/coming/ComingSoon";
import AboutUs from "@/components/AboutUs";
import NewsComponent from "@/components/News";
import Hero from "@/components/Hero";
const page = () => {
  return (
    <div className=" font-montserrat">
      <Hero />
      <CurrentlyPlaying />
      <ComingSoon />
      <AboutUs />
      <NewsComponent />
    </div>
  );
};

export default page;
