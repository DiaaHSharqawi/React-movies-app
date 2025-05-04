import { Stack } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { fetchTrendingMovies } from "../../services/fetchTrendingMovies";
import HeroSwiper from "./HeroSwiper";

function HeroSection() {
  const { data: trendingMovies, isLoading } = useQuery({
    queryKey: ["hero-section-trending-movies"],
    queryFn: () => fetchTrendingMovies("day"),
  });

  console.log(trendingMovies);
  if (isLoading) {
    return (
      <>
        <Stack
          sx={{
            width: 1,
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BeatLoader size={25} color="#083c84" loading={isLoading} />
        </Stack>
      </>
    );
  }

  return (
    <>{trendingMovies && <HeroSwiper trendingMovies={trendingMovies} />}</>
  );
}

export default HeroSection;
