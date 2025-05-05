import objectMapper from "object-mapper";
import { API } from "../../shared/services/api";

type PopularMovies = {
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

type PopularMoviesAPIResponse = {
  results: Array<PopularMovies>;
};

type PopularMoviesMapped = {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  video: boolean;
  releaseDate: string;
};

const PopularMoviesMapper = {
  id: "id",
  backdrop_path: "backdropPath",
  title: "title",
  vote_average: "voteAverage",
  video: "video",
  release_date: "releaseDate",
};

export const fetchPopularMovies = async ({
  page = 1,
}: {
  page: number;
}): Promise<{
  popularMoviesMapping: Array<PopularMoviesMapped>;
  totalPages: number;
}> => {
  const response = await API.get(`/movie/popular?&page=${page}`);
  console.log(response);

  // const totalPages: number = response.data["total_pages"];
  const totalPages: number = 500; // Due to an error from backend I will make it constant

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
