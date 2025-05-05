import { Pagination } from "@mui/material";
import { Grid } from "@mui/system";
import Loader from "../../../../shared/components/loader/Loader";
import { PopularMoviesMapped } from "../../../services/fetchPopularMovies";
import PopularMovieCardDetails from "../popularMovieDetails/PopularMovieDetails";

type PopularMoviesCardsProps = {
  page: number;
  handlePageChange: { (page: number): void };
  popularMovies: PopularMoviesMapped[] | undefined;
  isLoading: boolean;
};

function PopularMoviesCards({
  popularMovies,
  isLoading,
  handlePageChange,
  page,
}: PopularMoviesCardsProps) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {popularMovies && (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={6}
          sx={{
            width: 1,
          }}
        >
          {popularMovies.map((popularMovie) => {
            return (
              <Grid size={3} key={popularMovie.id}>
                <PopularMovieCardDetails popularMovie={popularMovie} />
              </Grid>
            );
          })}
        </Grid>
      )}

      {popularMovies && (
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => handlePageChange(value)}
        />
      )}
    </>
  );
}

export default PopularMoviesCards;
