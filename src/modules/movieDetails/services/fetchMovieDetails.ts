import { API } from "../../shared/services/api";

const fetchMovieDetails = async (id: number) => {
  const response = await API.get(`/movie/${id}`, {
    params: {
      language: "en-US",
    },
  });
};
