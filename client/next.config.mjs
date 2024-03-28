/** @type {import('next').NextConfig} */
import * as dotenv from "dotenv";
dotenv.config();
const nextConfig = {
  images: {
    domains: [
      "static.coinstats.app",
      "i.pinimg.com",
      "image.tmdb.org",
      "lh3.googleusercontent.com",
      "m.media-amazon.com",
      "ohkino.pl",
      "parade.com",
      "resizing.flixster.com",
      "variety.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
};

export default nextConfig;
