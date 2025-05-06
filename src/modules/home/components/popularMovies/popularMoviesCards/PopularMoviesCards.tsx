import { Grid } from "@mui/system";
import Pagination from "../../../../shared/components/pagination/CustomPagination";
import PopularMovieCardDetails from "../popularMovieDetails/PopularMovieDetails";

type PopularMovies = {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  video: boolean;
  releaseDate: string;
};

type PopularMoviesCardsProps = {
  popularMovies: PopularMovies[] | undefined;
};

function PopularMoviesCards({ popularMovies }: PopularMoviesCardsProps) {
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
              <Grid
                size={{
                  xs: 10,
                  sm: 6,
                  md: 3,
                }}
                key={popularMovie.id}
              >
                <PopularMovieCardDetails popularMovie={popularMovie} />
              </Grid>
            );
          })}

          {popularMovies && <Pagination />}
        </Grid>
      )}
    </>
  );
}

export default PopularMoviesCards;
