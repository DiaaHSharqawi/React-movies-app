import objectMapper from "object-mapper";
import { API } from "../../../shared/services/api";
import {
  FetchPopularMoviesProps,
  PopularMoviesAPIResponse,
  PopularMoviesMapped,
  PopularMoviesMapper,
} from "./fetchPopularMovies.types";

export const fetchPopularMovies = async ({
  page = 1,
}: {
  page: number;
}): Promise<FetchPopularMoviesProps> => {
  const response = await API.get(`/movie/popular?`, {
    params: {
      page: page,
    },
  });
  console.table(response);

  // Due to an error from backend I will make it constant
  // const totalPages: number = response.data["total_pages"];
  const totalPages: number = 500;
  const { results: popularopularMoviesResponse }: PopularMoviesAPIResponse =
    response.data;

  const popularMoviesMapping: Array<PopularMoviesMapped> =
    popularopularMoviesResponse.map((movie) => {
      return objectMapper.merge(
        movie,
        {},
        PopularMoviesMapper
      ) as PopularMoviesMapped;
    });

  console.log(popularMoviesMapping);
  return { popularMoviesMapping, totalPages };
};
