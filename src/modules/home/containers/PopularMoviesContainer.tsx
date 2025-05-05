import { useCallback, useState } from "react";
import Loader from "../../shared/components/loader/Loader";
import PopularMoviesCards from "../components/popularMovies/popularMoviesCards/PopularMoviesCards";
import usePopularMovies from "../hooks/usePopularMovies";

function PopularMoviesContainer() {
  const [page, setPage] = useState(1);
  const { isLoading, data: popularMovies } = usePopularMovies(page);
  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PopularMoviesCards
        isLoading={isLoading}
        popularMovies={popularMovies}
        page={page}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default PopularMoviesContainer;
