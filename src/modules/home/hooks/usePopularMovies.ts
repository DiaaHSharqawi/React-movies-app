import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../services/fetchPopularMovies/fetchPopularMovies";

function usePopularMovies(page: number) {
  return useQuery({
    queryKey: ["popular-movies-grid", page],
    queryFn: () => fetchPopularMovies({ page }),
  });
}

export default usePopularMovies;
