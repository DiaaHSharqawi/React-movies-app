import "swiper/swiper-bundle.css";

import { Stack } from "@mui/system";
import HeroSection from "./components/heroSection/HeroSection";
import PopularMoviesSection from "./components/popularMoviesSection/popularMoviesSection/PopularMoviesSection";

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
