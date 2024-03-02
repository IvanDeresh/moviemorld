"use client";
import { fetchMovies } from "@/func";
import React from "react";
const page = ({ id }: { id: number }) => {
  const movies = fetchMovies();
  return (
    <div className="h-screen custom-shadow-top-bottom">
      <div></div>
      <div></div>
    </div>
  );
};

export default page;
