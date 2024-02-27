import React from "react";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import ComingSoon from "@/components/ComingSoon";
import AboutUs from "@/components/AboutUs";
const page = () => {
  return (
    <div className="my-[50px] font-montserrat">
      <div className="w-full flex justify-center my-[50px] ">
        <div className="bg-class h-[65vh] w-[90%] rounded-3xl"></div>
      </div>
      <CurrentlyPlaying />
      <ComingSoon />
      <AboutUs />
    </div>
  );
};

export default page;
