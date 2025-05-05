import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { TMDB_IMAGE_BASE_URL } from "../../../../shared/constants";
import { PopularMoviesMapped } from "../../../services/fetchPopularMovies";
import {
  PopularMovieCardDetailsContainer,
  StyledDateRangeIcon,
  StyledMovieReleaseDateDetailChip,
  StyledMovieVoteAverageDetailChip,
  StyledStarIcon,
} from "./PopularMovieCardDetails.styles";

type PopularMovieCardDetailsProps = {
  popularMovie: PopularMoviesMapped;
};

function PopularMovieCardDetails({
  popularMovie,
}: PopularMovieCardDetailsProps) {
  const releaseDate = popularMovie.releaseDate.split("-")[0];
  const popularMovieBackdropUrl = `${TMDB_IMAGE_BASE_URL}/${popularMovie.backdropPath}`;

  return (
    <>
      <Stack spacing={4}>
        <PopularMovieCardDetailsContainer
          backdropURL={popularMovieBackdropUrl}
          spacing={3}
        >
          <StyledMovieReleaseDateDetailChip
            chipIcon={<StyledDateRangeIcon />}
            chipLabel={releaseDate}
          />
          <StyledMovieVoteAverageDetailChip
            chipIcon={<StyledStarIcon />}
            chipLabel={popularMovie.voteAverage.toString()}
          />
        </PopularMovieCardDetailsContainer>
        <Typography variant="h6" component="span" textAlign="center">
          {popularMovie.title}
        </Typography>
      </Stack>
    </>
  );
}

export default PopularMovieCardDetails;
