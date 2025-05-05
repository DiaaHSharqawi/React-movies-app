import "swiper/swiper-bundle.css";

import { Stack } from "@mui/system";
import HeroSection from "./components/hero/HeroSection";
import PopularMoviesSection from "./components/popularMovies/popularMoviesSection/PopularMoviesSection";

function Home() {
  return (
    <>
      <Stack spacing={8}>
        <HeroSection />
        <PopularMoviesSection />
      </Stack>
    </>
  );
}

export default Home;
