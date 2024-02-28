import React from "react";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import ComingSoon from "@/components/ComingSoon";
import AboutUs from "@/components/AboutUs";
import NewsComponent from "@/components/News";
import Hero from "@/components/Hero";
const page = () => {
  return (
    <div className="my-[50px] font-montserrat">
      <Hero />
      <CurrentlyPlaying />
      <ComingSoon />
      <AboutUs />
      <NewsComponent />
    </div>
  );
};

export default page;
