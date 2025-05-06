import { createBrowserRouter } from "react-router";
import Home from "./home/Home";
import MovieDetails from "./movieDetails/MovieDetails";
import Root from "./shared/components/root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/movie",
        children: [
          {
            path: ":movieId",
            Component: MovieDetails,
          },
        ],
      },
    ],
  },
]);
