import objectMapper from "object-mapper";
import { API } from "../../../shared/services/api";
import {
  TimeWindow,
  TrendingMoviesAPIResponse,
  TrendingMoviesMapped,
} from "./fetchTrendingMovies.types";

const trendingMoviesMapper = {
  id: "id",
  backdrop_path: "backdropPath",
  title: "title",
  vote_average: "voteAverage",
  video: "video",
  release_date: "releaseDate",
};

export const fetchTrendingMovies = async (
  timeWindow: TimeWindow
): Promise<Array<TrendingMoviesMapped>> => {
  const response = await API.get(`/trending/movie/${timeWindow}`);

  const { results: trendingMoviesResponse }: TrendingMoviesAPIResponse =
    response.data;

  const trendingMoviesMapping: Array<TrendingMoviesMapped> =
    trendingMoviesResponse.map((movie) => {
      return objectMapper.merge(
        movie,
        {},
        trendingMoviesMapper
      ) as TrendingMoviesMapped;
    });

  console.log(trendingMoviesMapping);
  return trendingMoviesMapping;
};
