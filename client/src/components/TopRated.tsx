import React, { useState, useEffect } from "react";
import axios from "axios";
const PearlsOfYear = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: { language: "en-US", page: "1" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJiMmJjZDNhYTIyZDZiZThhN2Y3ZGM5ZDhlN2IxYSIsInN1YiI6IjY1ZDA4NzQ5ZTYyNzE5MDE4MTcxM2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8KnRoxBXrT9goCrF0kZ6F6eR9klZTM2PzaLXvhw4D5Q",
          },
        }
      );
      setMovies(response.data);
    };
    fetchMovies();
  }, []);
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[90%] ">
        <h2 className="text-[20px]">Pearls of all time</h2>
      </div>
      <div className="h-[1px] bg-gray-400 w-[90%]"></div>
    </div>
  );
};

export default PearlsOfYear;
