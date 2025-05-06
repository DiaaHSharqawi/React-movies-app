import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router";
import { TMDB_IMAGE_BASE_URL } from "../../../../shared/constants";
import {
  PopularMovieCardDetailsContainer,
  StyledDateRangeIcon,
  StyledMovieReleaseDateDetailChip,
  StyledMovieVoteAverageDetailChip,
  StyledStarIcon,
} from "./PopularMovieCardDetails.styles";

type PopularMovies = {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  video: boolean;
  releaseDate: string;
};

type PopularMovieCardDetailsProps = {
  popularMovie: PopularMovies;
};

function PopularMovieCardDetails({
  popularMovie,
}: PopularMovieCardDetailsProps) {
  const releaseDate = popularMovie.releaseDate.split("-")[0];
  const popularMovieBackdropUrl = `${TMDB_IMAGE_BASE_URL}/${popularMovie.backdropPath}`;
  const navigate = useNavigate();
  const handleNavigate = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <Stack spacing={4}>
        <PopularMovieCardDetailsContainer
          onClick={() => {
            handleNavigate(popularMovie.id.toString());
          }}
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
