import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Button } from "@mui/material";
import { TMDB_IMAGE_BASE_URL } from "../../../../shared/constants";
import { TrendingMoviesMapped } from "../../../services/fetchTrendingMovies";
import {
  DarkOverlayContainer,
  StyledTypography,
  TrendingMovieDetailContainer,
  TrendingMovieSlideContainer,
} from "./HeroTrendingMovieSlide.style";

type HeroTrendingMovieSlideProps = {
  trendingMovieSlide: TrendingMoviesMapped;
};

function HeroTrendingMovieSlide({
  trendingMovieSlide,
}: HeroTrendingMovieSlideProps) {
  const backdropPathTrendingMovie = `${TMDB_IMAGE_BASE_URL}/${trendingMovieSlide.backdropPath}`;

  return (
    <>
      <TrendingMovieSlideContainer backdropPath={backdropPathTrendingMovie}>
        <DarkOverlayContainer>
          <TrendingMovieDetailContainer gap={8}>
            <StyledTypography variant="h3" component="h1">
              {trendingMovieSlide.title}
            </StyledTypography>

            <StyledTypography variant="h4" component="span">
              {trendingMovieSlide.releaseDate}
            </StyledTypography>

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
          </TrendingMovieDetailContainer>
        </DarkOverlayContainer>
      </TrendingMovieSlideContainer>
    </>
  );
}

export default HeroTrendingMovieSlide;
