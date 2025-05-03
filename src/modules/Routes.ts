import { createBrowserRouter } from "react-router";
import Home from "./home/Home";
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
    ],
  },
]);
