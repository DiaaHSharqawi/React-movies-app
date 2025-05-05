import { API } from "../../../shared/services/api";
import { MovieDetailsAPIResponse } from "./fetchMovieDetails.stypes";

export const fetchMovieDetails = async (movieId: number) => {
  const response = await API.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });

  const { results: movieDetails }: MovieDetailsAPIResponse = response.data;
  console.log(movieDetails);
};
