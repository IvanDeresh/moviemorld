export type Movies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type resultForMovies = {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};
export type DateRange = {
  maximum: string;
  minimum: string;
};
export type CurrentPlayingMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type CurrentPlaying = {
  dates: DateRange;
  page: number;
  results: CurrentPlayingMovie[];
  total_pages: number;
};
export type News = {
  date: string;
  title: string;
  description: string;
  image: string;
  author: string;
  id: number;
};
export type Props = {
  params: {
    id: string;
  };
};
