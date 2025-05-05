import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TrendingMoviesMapped } from "../../../services/fetchTrendingMovies";
import HeroTrendingMovieSlide from "../heroTrendingMovieSlide/HeroTrendingMovieSlide";
import "./heroSwiper.module.css";

type HeroSwiperProps = {
  trendingMovies: TrendingMoviesMapped[];
};

function HeroSwiper({ trendingMovies }: HeroSwiperProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        virtual={true}
        navigation={{}}
        modules={[Navigation, Virtual]}
        className="mySwiper"
        effect="slide"
        speed={1200}
      >
        {trendingMovies.map((movie) => {
          return (
            <>
              <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                <HeroTrendingMovieSlide trendingMovieSlide={movie} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default HeroSwiper;
