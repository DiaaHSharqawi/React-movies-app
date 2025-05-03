import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { TMDB_IMAGE_BASE_URL } from "../../../shared/constants";
import { TrendingMoviesMapped } from "../../services/fetchTrendingMovies";

function HeroTrendingMovieSlide({
  trendingMovieSlide,
}: {
  trendingMovieSlide: TrendingMoviesMapped;
}) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          maxWidth: "100vw",
          background: `url(${TMDB_IMAGE_BASE_URL}/${trendingMovieSlide.backdropPath}) 
          no-repeat
           center / cover `,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <Stack
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
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default HeroTrendingMovieSlide;
