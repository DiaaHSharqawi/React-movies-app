import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Button, Typography } from "@mui/material";
import { Box, Stack, styled } from "@mui/system";
import { TMDB_IMAGE_BASE_URL } from "../../../shared/constants";
import { TrendingMoviesMapped } from "../../services/fetchTrendingMovies";
import "./heroSwiper.module.css";

function HeroTrendingMovieSlide({
  trendingMovieSlide,
}: {
  trendingMovieSlide: TrendingMoviesMapped;
}) {
  const TrendingMovieSlideContainer = styled(Box)(() => ({
    position: "relative",
    height: "80vh",
    maxWidth: "100vw",
    background: `url(${TMDB_IMAGE_BASE_URL}/${trendingMovieSlide.backdropPath}) 
    no-repeat
     center / cover `,
    backgroundPosition: "50% 20%",
    borderRadius: "1rem",
  }));

  const DarkOverlayContainer = styled(Box)(() => ({
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: "1rem",
    position: "absolute",
    width: "100%",
    height: "100%",
  }));

  return (
    <>
      <TrendingMovieSlideContainer
        sx={{
          m: 2,
        }}
      >
        <DarkOverlayContainer>
          <Stack
            gap={8}
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              component={"h1"}
              sx={{
                color: "white",
              }}
            >
              {trendingMovieSlide.title}
            </Typography>

            <Typography
              variant="h4"
              component={"span"}
              sx={{
                color: "white",
              }}
            >
              {trendingMovieSlide.releaseDate}
            </Typography>

            <Button
              sx={{
                width: 1 / 4,
                p: 2,
              }}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SlideshowIcon />}
            >
              Watch now !
            </Button>
          </Stack>
        </DarkOverlayContainer>
      </TrendingMovieSlideContainer>
    </>
  );
}

export default HeroTrendingMovieSlide;
