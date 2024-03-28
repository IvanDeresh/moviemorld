"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useMovies } from "@/func";
import Image from "next/image";
import axios from "axios";

type Ticket = {
  name: string;
  email: string;
  title: string;
  payment: boolean;
  time: string;
  numberSeat: number[];
};

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const movies = useMovies(1);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchUserTicket = async () => {
      try {
        if (session?.user) {
          const response = await axios.get<Ticket[]>(
            `http://localhost:3003/ticket/email?email=${session?.user?.email}`
          );
          setTickets(response.data);
        } else {
          router.replace("/pages/sign-in");
        }
      } catch (error) {
        console.error("Error fetching user tickets:", error);
        // Handle error (e.g., show error message to user)
      }
    };

    fetchUserTicket();
  }, [session, router]);

  useEffect(() => {
    if (!session?.user) {
      router.replace("/pages/sign-in");
    }
  }, [session, router]);

  return (
    <div className="h-screen font-montserrat gap-[10px] flex  justify-center text-[#505050] bg-[#121212] items-center">
      <div className="h-[660px] border-[#1f1e1e] p-[20px] items-center  overflow-y-scroll gap-[10px] flex flex-col rounded-md w-[300px] border-2">
        <h1 className="text-[20px] text-[#8d090d] w-[150px] h-[40px] rounded-md shadow-2xl bg-[#0e0d0d] flex justify-center items-center ">
          Your tickets
        </h1>
        <div className="flex flex-col gap-[20px]">
          {tickets.map((ticket) => (
            <div
              className="border-2 border-[#1f1e1e] min-h-[200px] w-[250px] p-[10px]"
              key={ticket.title}
            >
              <h2 className="border-b border-[#1f1e1e] pb-[10px]">
                {ticket.title}
              </h2>
              <p className="border-b border-[#1f1e1e] py-[10px]">
                Payment status: {ticket.time ? "paid" : "not paid"}
              </p>
              <p className="border-b border-[#1f1e1e] py-[10px]">
                Time: {ticket.time}
              </p>
              <div className="flex overflow-x-scroll border-[#1f1e1e] gap-[5px] border-b py-[10px]">
                {ticket.numberSeat.map((seat) => (
                  <div
                    className="bg-[#0e0d0d] rounded-md flex justify-center items-center min-w-[30px] min-h-[30px]"
                    key={seat}
                  >
                    {seat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div>
          {session?.user && (
            <div className="border-2 border-[#1f1e1e] py-[50px] rounded-md flex-col w-[400px] overflow-hidden h-[450px] flex gap-[20px] justify-center  items-center">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[300px]  h-[50px] border-[#1f1e1e] border-2 flex justify-around items-center rounded-md">
                  {session.user.email}
                </div>
              </div>
              <h1 className="text-">Recommended for you</h1>
              <div className="gap-[10px] overflow-x-hidden h-[250px]  flex">
                {movies?.results.map((movie) => (
                  <div
                    key={movie.id}
                    className="w-[100px] h-[145px] border-2 border-[#1f1e1e]"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}
                      width={100}
                      height={150}
                    />
                  </div>
                ))}
              </div>

              <button
                className="w-[150px]  hover:text-[#fff] text-[#8d090d] transition-colors duration-500 hover:bg-[#8D090D] h-[50px] bg-[#0e0d0d] rounded-md"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </button>
            </div>
          )}
        </div>
        <div className="border-2 border-[#1f1e1e] rounded-md w-[400px] text-white h-[200px]"></div>
      </div>
    </div>
  );
};

export default Page;
