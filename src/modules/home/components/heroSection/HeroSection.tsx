import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../../services/fetchTrendingMovies";
import HeroSwiper from "./HeroSwiper";

function HeroSection() {
  const { data: trendingMovies, isLoading } = useQuery({
    queryKey: ["hero-section-trending-movies"],
    queryFn: () => fetchTrendingMovies("day"),
  });

  console.log(trendingMovies);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <HeroSwiper trendingMovies={trendingMovies!} />
    </>
  );
}

export default HeroSection;
