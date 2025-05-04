import DateRangeIcon from "@mui/icons-material/DateRange";
import StarIcon from "@mui/icons-material/Star";
import { Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { TMDB_IMAGE_BASE_URL } from "../../../shared/constants";
import { PopularMoviesMapped } from "../../services/fetchPopularMovies";

function PopularMoviesGridItem({
  popularMovie,
}: {
  popularMovie: PopularMoviesMapped;
}) {
  return (
    <>
      <Stack spacing={4}>
        <Stack
          spacing={3}
          sx={{
            width: "100%",
            height: "380px",
            borderRadius: "1rem",
            cursor: "pointer",
            background: `url(${TMDB_IMAGE_BASE_URL}/${popularMovie.backdropPath})
             no-repeat
             center/cover`,
            justifyContent: "end",
            p: 2,
          }}
        >
          <Chip
            icon={
              <DateRangeIcon
                style={{
                  color: "#fff",
                }}
              />
            }
            label={popularMovie.releaseDate.split("-")[0]}
            sx={{
              backgroundColor: "rgba(8, 60, 132, 1)",
              fontWeight: "bold",
              width: 2 / 4,
              color: "#fff",
            }}
          />
          <Chip
            icon={
              <StarIcon
                style={{
                  color: "#f5d002",
                }}
              />
            }
            label={popularMovie.voteAverage}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              fontWeight: "bold",
              width: 1,
              color: "#f5d002",
            }}
          />
        </Stack>
        <Typography variant="h6" component={"span"} textAlign={"center"}>
          {popularMovie.title}
        </Typography>
      </Stack>
    </>
  );
}

export default PopularMoviesGridItem;
