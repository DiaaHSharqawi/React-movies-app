import { Grid } from "@mui/system";
import Loader from "../../../../shared/components/loader/Loader";
import Pagination from "../../../../shared/components/pagination/Pagination";
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
          width={1}
        >
          {popularMovies.map((popularMovie) => {
            return (
              <Grid size={3} key={popularMovie.id}>
                <PopularMovieCardDetails popularMovie={popularMovie} />
              </Grid>
            );
          })}

          {popularMovies && (
            <Pagination page={page} handlePageChange={handlePageChange} />
          )}
        </Grid>
      )}
    </>
  );
}

export default PopularMoviesCards;
