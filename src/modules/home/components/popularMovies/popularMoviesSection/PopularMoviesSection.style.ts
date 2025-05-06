import { Divider } from "@mui/material";
import { Box, BoxProps, styled } from "@mui/system";

export const StyledPopularMoviesSection = styled(Box)<BoxProps>(() => ({
  height: "80vh",
  width: "100%",
  padding: "4rem",
}));

export const StyledDivider = styled(Divider)(() => ({
  width: "25%",
  borderBottomWidth: "5px",
  borderBottomColor: "#083c84",
  margin: "2rem 0",
}));
