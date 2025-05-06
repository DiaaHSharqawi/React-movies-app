import { Alert } from "@mui/material";
import { useContext, useEffect } from "react";
import Loader from "../../shared/components/loader/Loader";
import PopularMoviesCards from "../components/popularMovies/popularMoviesCards/PopularMoviesCards";
import { PageContext } from "../contexts/pageContext/PageContext";
import usePopularMovies from "../hooks/usePopularMovies";

function PopularMoviesContainer() {
  const { page, totalPages, setTotalPages } = useContext(PageContext);
  const { isLoading, isError, data } = usePopularMovies(page);

  useEffect(() => {
    if (data) {
      console.log(`Use effect total pages :${data.totalPages}`);
      setTotalPages(data.totalPages);
    }
  }, [setTotalPages, data]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Alert severity="error">Error popular movies</Alert>;
  }
  if (!data) {
    return <Alert severity="warning">No data available</Alert>;
  }

  const { popularMovies } = data;
  const isDataAvailable = popularMovies.length > 0 && totalPages > 0;

  return (
    <>
      {isDataAvailable && <PopularMoviesCards popularMovies={popularMovies} />}
    </>
  );
}

export default PopularMoviesContainer;
