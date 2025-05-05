import { Alert } from "@mui/material";
import { useCallback, useState } from "react";
import Loader from "../../shared/components/loader/Loader";
import PopularMoviesCards from "../components/popularMovies/popularMoviesCards/PopularMoviesCards";
import usePopularMovies from "../hooks/usePopularMovies";

function PopularMoviesContainer() {
  const [page, setPage] = useState(1);
  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const { isLoading, isError, data } = usePopularMovies(page);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Alert severity="error">Error popular movies</Alert>;
  }
  if (!data) {
    return <Alert severity="warning">No data available</Alert>;
  }

  const { popularMovies, totalPages } = data;
  const isDataAvailable = popularMovies.length > 0 && totalPages > 0;

  return (
    <>
      {isDataAvailable && (
        <PopularMoviesCards
          popularMovies={popularMovies}
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default PopularMoviesContainer;
