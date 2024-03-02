import React from "react";
import Image from "next/image";
import { mainstreet, beaty, oldkosmos, aula } from "@/assets/img";
const page = () => {
  return (
    <div className="h-auto my-[150px] text-white font-montserrat flex justify-around">
      <div className=" flex flex-col gap-[50px]">
        <div className="flex gap-[50px]">
          <div className="flex text-black w-[400px] relative h-[250px] custom-shadow-top-bottom">
            <p className="absolute w-[400px] h-[250px] p-[30px] flex justify-center items-center">
              Movie World is a state-of-the-art cinema located in
              Ivano-Frankivsk, Ukraine, offering an immersive movie-watching
              experience for audiences of all ages.
            </p>
          </div>
          <div className="flex w-[400px] relative h-[250px] justify-between custom-shadow-top-bottom">
            <Image src={oldkosmos} alt="1" className="w-[400px] h-[250px]" />
            <p className="absolute w-[400px] h-[250px] p-[30px] flex justify-center items-center">
              Situated in the heart of Ivano-Frankivsk, Movie World boasts
              cutting-edge facilities and modern amenities, making it a premier
              destination for movie enthusiasts in the region.
            </p>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex w-[400px] relative h-[250px] justify-between custom-shadow-top-bottom">
            <p className="absolute w-[400px] h-[250px] p-[30px] flex justify-center items-center">
              Featuring multiple screens equipped with the latest projection
              technology, Movie World presents a diverse selection of films
              ranging from blockbuster hits to indie gems, catering to a wide
              range of cinematic tastes.
            </p>
            <Image src={mainstreet} alt="2" className="w-[400px] h-[250px]" />
          </div>
          <div className="flex w-[400px] relative h-[250px] justify-between custom-shadow-top-bottom">
            <Image src={aula} alt="3" className="w-[400px] h-[250px]" />
            <p className="absolute w-[400px] h-[250px] p-[30px] flex justify-center items-center">
              With its comfortable seating, spacious auditoriums, and superior
              sound systems, Movie World ensures that every moviegoer enjoys
              unparalleled comfort and quality during their cinematic journey.
            </p>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex w-[400px] text-black relative h-[250px] justify-between custom-shadow-top-bottom">
            <p className="absolute w-[400px] h-[250px] p-[30px] flex justify-center items-center">
              In addition to its exceptional movie screenings, Movie World also
              hosts special events, premieres, and film festivals, fostering a
              vibrant cultural atmosphere within the Ivano-Frankivsk community.
              Whether you're a casual movie buff or a devoted cinephile, Movie
              World promises an unforgettable cinematic experience that
              transports you to new worlds and inspires your imagination.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="absolute z-50 flex justify-center items-center">
              Fostering a vibrant cultural atmosphere within the Ivano-Frankivsk
              community. Whether you're a casual movie buff or a devoted
              cinephile, Movie World promises an unforgettable cinematic
              experience that transports you to new worlds and inspires your
              imagination.
            </p>
            <Image
              src={beaty}
              alt="4"
              className="w-[400px] hover:blur-sm h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
