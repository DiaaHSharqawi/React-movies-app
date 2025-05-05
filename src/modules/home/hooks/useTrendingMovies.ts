import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../services/fetchTrendingMovies/fetchTrendingMovies";

type UseTrendingMoviesTyle = "day" | "week";

function useTrendingMovies(timeWindow: UseTrendingMoviesTyle) {
  return useQuery({
    queryKey: ["hero-section-trending-movies"],
    queryFn: () => fetchTrendingMovies(timeWindow),
  });
}

export default useTrendingMovies;
