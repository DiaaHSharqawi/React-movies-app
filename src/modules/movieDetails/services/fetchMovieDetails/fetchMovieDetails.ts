import { API } from "../../../shared/services/api";
import { MovieDetailsAPIResponse } from "./fetchMovieDetails.stypes";

export const fetchMovieDetails = async (movieId: string) => {
  const response = await API.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });

  console.log(`Res`, response);

  const movieDetails: MovieDetailsAPIResponse = response.data;

  console.log(`movieDetails`, movieDetails);

  return movieDetails;
};
