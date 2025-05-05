import { Alert, Container } from "@mui/material";
import Loader from "../../shared/components/loader/Loader";
import MovieDetailsContent from "../components/movieDetailsContent/MovieDetailsContent";
import useMovieDetails from "../hooks/useMovieDetails";

function MovieDetailsContainer({ movieId }: { movieId: string }) {
  console.log(`Movie id is ${movieId}`);
  const { data: movieDetails, isLoading, isError } = useMovieDetails(movieId);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Alert severity="error">Error movie details</Alert>;
  }
  if (!movieDetails) {
    return <Alert severity="warning">No data available</Alert>;
  }

  return (
    <>
      <Container
        sx={{
          width: 1,
          height: 1,
          mt: 6,
        }}
      >
        <MovieDetailsContent movieDetails={movieDetails} />
      </Container>
    </>
  );
}

export default MovieDetailsContainer;
