import { Typography } from "@mui/material";
import PopularMoviesContainer from "../../../containers/PopularMoviesContainer";
import { PageProvider } from "../../../contexts/pageContext/PageProvider";
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
        <PageProvider>
          <PopularMoviesContainer />
        </PageProvider>
      </StyledPopularMoviesSection>
    </>
  );
}

export default PopularMoviesSection;
