import { Box } from "@mui/system";
import MovieDetailsContainer from "../../containers/MovieDetailsContainer";

function MovieDetailsSection({ movieId }: { movieId: string }) {
  return (
    <Box component={"section"} sx={{ mt: "3rem", height: "100vh" }}>
      <MovieDetailsContainer movieId={movieId} />
    </Box>
  );
}

export default MovieDetailsSection;
