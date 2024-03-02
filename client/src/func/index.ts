import axios from "axios";
import { useEffect, useState } from "react";
import { News as NewsType, CurrentPlaying } from "@/types";
export const fetchNewsData = () => {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsType[]>(
          "http://localhost:3003/news"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);
  return news;
};

export const fetchMovies = () => {
  const [movies, setMovies] = useState<CurrentPlaying | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing",
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  return movies;
};

export const fetchSecondMovies = () => {
  const [movies, setMovies] = useState<CurrentPlaying | null>(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            params: { language: "en-US", page: "2" },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJiMmJjZDNhYTIyZDZiZThhN2Y3ZGM5ZDhlN2IxYSIsInN1YiI6IjY1ZDA4NzQ5ZTYyNzE5MDE4MTcxM2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8KnRoxBXrT9goCrF0kZ6F6eR9klZTM2PzaLXvhw4D5Q",
            },
          }
        );
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  return movies;
};
