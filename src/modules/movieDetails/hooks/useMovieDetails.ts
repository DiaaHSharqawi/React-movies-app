import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../services/fetchMovieDetails/fetchMovieDetails";

function useMovieDetails(movieId: string) {
  return useQuery({
    queryKey: ["movie-id", movieId],
    queryFn: () => fetchMovieDetails(movieId),
  });
}
export default useMovieDetails;
