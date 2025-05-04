import { Box } from "@mui/system";
import { Outlet } from "react-router";
import Header from "../header/Header";

function Root() {
  return (
    <>
      <Header />
      <Box component={"main"}>
        <Outlet />
      </Box>
    </>
  );
}

export default Root;
