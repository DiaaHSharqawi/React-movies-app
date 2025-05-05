export type TimeWindow = "day" | "week";

export type TrendingMovies = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TrendingMoviesAPIResponse = {
  results: Array<TrendingMovies>;
};

export type TrendingMoviesMapped = {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  video: boolean;
  releaseDate: string;
};
