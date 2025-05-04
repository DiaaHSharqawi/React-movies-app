import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PopularMoviesGrid from "./PopularMoviesGrid";

function PopularMoviesSection() {
  return (
    <>
      <Box
        component={"section"}
        sx={{
          height: "80vh",
          width: "100%",
          padding: "3rem",
        }}
      >
        <Typography variant={"h4"} component={"h2"}>
          Popular Movies
        </Typography>
        <Divider
          sx={{
            width: 1 / 4,
            borderBottomWidth: "5px",
            borderBottomColor: "#083c84",
            mt: 1,
          }}
        />
        <Box sx={{ m: 6 }} />
        <PopularMoviesGrid />
      </Box>
    </>
  );
}

export default PopularMoviesSection;
