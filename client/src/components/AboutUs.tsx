import React from "react";
import { cinema_real } from "@/assets/img";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="custom-shadow-top-bottom flex font-montserrat">
      <div className="w-[58%] p-[50px] gap-[10px] flex flex-col">
        <h1 className="text-[20px]">About us </h1>
        <h2 className="text-[14px]">2008-2018</h2>
        <p className="text-[13px]">
          According to the State Program for the Development of Ukraine Cinema
          for 2008-2018, Movie World, one of the oldest cinemas in the country,
          was inaugurated on December 27, 2011 after major reconstruction. In
          addition to the current repertoire of films, which includes the most
          interesting new films, presentations of national films...
        </p>
      </div>
      <Image src={cinema_real} alt="dadas" width={500} />
    </div>
  );
};

export default AboutUs;
