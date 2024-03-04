"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  addProduct,
  removeProduct,
  clearCart,
} from "@/store/features/seat-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import DeleteIcon from "@mui/icons-material/Delete";
import OrderModelWindow from "./OrderModelWindow";
const date = [
  { id: 1, day: 1 },
  { id: 2, day: 2 },
  { id: 3, day: 3 },
  { id: 4, day: 4 },
  { id: 5, day: 5 },
  { id: 6, day: 6 },
  { id: 7, day: 7 },
];
const hours = [
  { id: 1, time: "17:00" },
  { id: 2, time: "18:45" },
  { id: 3, time: "19:30" },
  { id: 4, time: "20:15" },
  { id: 5, time: "22:00" },
  { id: 6, time: "7:45" },
  { id: 7, time: "11:30" },
];
const booked = [34, 49, 63, 72, 46, 50, 74, 67, 56, 68, 69, 75, 73];
const MovieCard = ({
  title,
  backdrop_path,
  vote_average,
  poster_path,
}: {
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
}) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [backdropOrPoster, setBackdropOrPoster] = useState<string>(poster_path);
  const [time, setTime] = useState<string>("17:00");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dates, setDates] = useState<number>(1);
  const seats = [];
  const dispatch = useDispatch();
  const seatetes = useSelector((state: RootState) => state.seates.value);
  const purchaes = seatetes
    .reduce((total, seat) => total + seat.price, 0)
    .toFixed(2);
  for (let i = 0; i < 7; i++) {
    for (let j = 1; j <= 12; j++) {
      const seatId = 3 * 10 + (i - 2) * 12 + j;
      seats.push({ id: seatId, row: i + 1, seat: j, price: 12.5 * (i + 1) });
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      const widthOfWindow = window.innerWidth;
      setBackdropOrPoster(
        widthOfWindow <= 600 || widthOfWindow >= 1200
          ? poster_path
          : backdrop_path
      );
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [backdrop_path, poster_path]);
  return (
    <div className="flex max-xl:flex-col max-xl:flex font-montserrat text-white">
      <div className="relative ">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropOrPoster}`}
          alt={title}
          width={backdropOrPoster === poster_path ? 610 : 1200}
          height={2000}
        />
        <div className="border-b-2 border-red-700 top-[200px] max-xl:top-[100px] left-[100px] text-[20px] font-bold absolute">
          {title}
        </div>
        <div className="flex  max-md:left-[40px] justify-around flex-col items-center py-[50px] w-[409px] h-[524px] bg-[#121212] absolute max-xl:top-[170px] top-[270px] left-[100px]">
          <h1 className="text-[25px]">SELECTED SEATS</h1>
          <div
            className={`flex flex-col w-[70%] gap-[20px] ${
              seatetes.length >= 8 && "overflow-y-scroll"
            }`}
          >
            {seatetes.map((item) => (
              <div className="flex justify-around">
                <div className="w-[15px] h-[15px] opacity-50 bg-gray-700 rounded-full"></div>
                <div>seat : {item.number_seats}</div>
                <div>price: {item.price.toFixed(2)}</div>
                <div
                  onClick={() => {
                    dispatch(removeProduct(item.id));
                  }}
                  className="cursor-pointer"
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <div
                className="cursor-pointer w-[200px] h-[40px] bg-[#0f0f0f] rounded-xl flex justify-center items-center"
                onClick={() => dispatch(clearCart())}
              >
                Clear card
              </div>
              <button
                onClick={() => {
                  setModalVisibility(true);
                }}
                className="w-[200px] h-[40px] rounded-xl bg-[#8D090D]"
              >
                Purchaes: {purchaes}$
              </button>
            </div>
            <span className="text-gray-600 text-[15px]">
              Time left to purchase: {time}
            </span>
          </div>
        </div>
      </div>
      <div className="max-xs:mt-[150px] flex max-xl:ml-[150px] max-xl:w-[40%] flex-col gap-[20px] justify-center items-center w-[50%]">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <h2>Date</h2>
          <div className="flex gap-[10px]">
            {date.map((date) => (
              <div
                key={date.id}
                onClick={() => setDates(Number(date))}
                className="flex justify-center cursor-pointer items-center bg-[#2B2B2B] rounded-full h-[50px] w-[35px]"
              >
                {date.day}
              </div>
            ))}
          </div>
          <div className="bg-gray-200 h-[1px] w-[100%]"></div>
        </div>
        <div className="flex mt-[50px] flex-col justify-center items-center gap-[20px]">
          <h2>Time</h2>
          <div className="flex gap-[10px]">
            {hours.map((hours) => (
              <div
                className="w-[60px] cursor-pointer text-[13px] bg-[#323231] h-[25px] flex justify-center items-center  rounded-2xl"
                key={hours.id}
                onClick={() => setTime(hours.time)}
              >
                {hours.time}
              </div>
            ))}
          </div>
          <div className="bg-gray-200 h-[1px] w-[100%]"></div>
        </div>
        <div className="flex flex-col justify-center mt-[50px] items-center gap-[20px]">
          <div className="flex">
            <div className="flex flex-col gap-[15px]">
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F</div>
              <div>G</div>
            </div>
            <div className="w-[400px] grid grid-cols-12 gap-2 mx-[20px]">
              {seats.map((seat) => (
                <div
                  onClick={() => {
                    if (
                      seatetes.some((item) => item.number_seats === seat.id)
                    ) {
                      alert("this place already selected");
                    } else if (booked.includes(seat.id)) {
                      alert("Please select other seat");
                    } else {
                      dispatch(
                        addProduct({
                          id: seat.id,
                          time: time,
                          date: dates,
                          title: title,
                          price: seat.price,
                          poster_path: poster_path,
                          vote_average: vote_average,
                          number_seats: seat.id,
                        })
                      );
                      setSelected([...selected, seat.id]);
                    }
                  }}
                  key={seat.id}
                  className={`flex cursor-pointer text-[12px] justify-center opacity-50 items-center h-[25px] w-[25px] rounded-full bg-gray-400 ${
                    seatetes.some((item) => item.number_seats === seat.id) &&
                    "bg-red-700"
                  } ${booked.includes(seat.id) && "bg-gray-700 "} `}
                >
                  {seat.id}
                </div>
              ))}
            </div>
            <div className="flex flex-col  text-gray-500 gap-[15px]">
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F</div>
              <div>G</div>
            </div>
          </div>
          <div className="flex gap-[30px] text-[12px]">
            <span className="flex gap-[10px] items-center">
              <div className="w-[15px] h-[15px] opacity-50 bg-gray-400 rounded-full"></div>
              <div>Avaible</div>
            </span>
            <span className="flex gap-[10px] items-center">
              <div className="w-[15px] h-[15px] opacity-50 bg-gray-700 rounded-full"></div>
              <div>Booked</div>
            </span>
            <span className="flex gap-[10px] items-center">
              <div className="w-[15px] h-[15px] opacity-50 bg-red-600 rounded-full"></div>
              <div>Selected</div>
            </span>
          </div>
        </div>
      </div>
      <OrderModelWindow
        modalVisibility={modalVisibility}
        purchaes={Number(purchaes)}
        setModalVisibility={setModalVisibility}
      />
    </div>
  );
};

export default MovieCard;
