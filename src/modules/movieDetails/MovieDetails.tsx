import { Stack } from "@mui/system";
import { useParams } from "react-router";
import MovieDetailsSection from "./components/movieDetailsSection/MovieDetailsSection.tsx";

function MovieDetails() {
  const { movieId } = useParams();
  if (!movieId) return;

  return (
    <>
      <Stack spacing={4}>
        <MovieDetailsSection movieId={movieId} />
      </Stack>
    </>
  );
}

export default MovieDetails;
