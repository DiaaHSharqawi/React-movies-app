import { Box } from "@mui/system";
import { useState } from "react";
import Loader from "../../shared/components/loader/Loader";
import HeroSwiper from "../components/hero/heroSwiper/HeroSwiper";
import useTrendingMovies from "../hooks/useTrendingMovies";

type TrendingMoviesTyle = "day" | "week";

function HeroSwiperContainer() {
  const [timeWindow] = useState<TrendingMoviesTyle>("day");
  const { isLoading, data: trendingMovies } = useTrendingMovies(timeWindow);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {trendingMovies && (
        <Box component={"section"}>
          <HeroSwiper trendingMovies={trendingMovies} />
        </Box>
      )}
    </>
  );
}

export default HeroSwiperContainer;
