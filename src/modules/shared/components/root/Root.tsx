import { Outlet } from "react-router";
import Header from "../header/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
