import { Typography } from "@mui/material";
import PopularMoviesContainer from "../../../containers/PopularMoviesContainer";
import {
  StyledDivider,
  StyledPopularMoviesSection,
} from "./PopularMoviesSection.style";

function PopularMoviesSection() {
  return (
    <>
      <StyledPopularMoviesSection component="section">
        <Typography variant="h4" component="h2">
          Popular Movies
        </Typography>
        <StyledDivider />
        <PopularMoviesContainer />
      </StyledPopularMoviesSection>
    </>
  );
}

export default PopularMoviesSection;
