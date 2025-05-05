import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Loader from "../../shared/components/loader/Loader";
import HeroSwiper from "../components/hero/heroSwiper/HeroSwiper";
import useTrendingMovies from "../hooks/useTrendingMovies";

type TrendingMoviesType = "day" | "week";

function HeroSwiperContainer() {
  const [timeWindow] = useState<TrendingMoviesType>("day");
  const {
    isLoading,
    data: trendingMovies,
    isError,
  } = useTrendingMovies(timeWindow);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Alert severity="error">Error popular movies</Alert>;
  }

  if (!trendingMovies) {
    return <Alert severity="warning">No data available</Alert>;
  }

  const isDataAvailable = trendingMovies.length > 0;

  return (
    <>
      {isDataAvailable && (
        <Box component={"section"}>
          <HeroSwiper trendingMovies={trendingMovies} />
        </Box>
      )}
    </>
  );
}

export default HeroSwiperContainer;
