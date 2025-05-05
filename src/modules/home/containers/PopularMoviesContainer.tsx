import { useCallback, useState } from "react";
import PopularMoviesCards from "../components/popularMovies/popularMoviesCards/PopularMoviesCards";
import usePopularMovies from "../hooks/usePopularMovies";

function PopularMoviesContainer() {
  const [page, setPage] = useState(1);
  const { isLoading, data } = usePopularMovies(page);
  const popularMovies = data?.popularMoviesMapping || [];
  const totalPages = data?.totalPages || 1;

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  return (
    <>
      <PopularMoviesCards
        isLoading={isLoading}
        popularMovies={popularMovies}
        page={page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default PopularMoviesContainer;
