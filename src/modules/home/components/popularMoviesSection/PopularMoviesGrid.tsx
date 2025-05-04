import { Grid } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../../services/fetchPopularMovies";
import PopularMoviesGridItem from "./PopularMoviesGridItem";

function PopularMoviesGrid() {
  const { data: popularMovies, isLoading } = useQuery({
    queryKey: ["popular-movies-grid"],
    queryFn: () => fetchPopularMovies(),
  });

  if (isLoading) {
    return <h1> Loading ....</h1>;
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
                <PopularMoviesGridItem popularMovie={popularMovie} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default PopularMoviesGrid;
