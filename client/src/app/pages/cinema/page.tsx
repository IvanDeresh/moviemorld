"use client";
import { useMovies } from "@/func";
import React from "react";
const page = ({ id }: { id: number }) => {
  const movies = useMovies(1);
  return (
    <div className="h-screen custom-shadow-top-bottom">
      <div></div>
      <div></div>
    </div>
  );
};

export default page;
