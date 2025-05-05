import { Typography } from "@mui/material";
import { Box, BoxProps, Stack, styled, TypographyProps } from "@mui/system";
import { ElementType } from "react";

type TrendingMovieSlideContainerProps = BoxProps & {
  backdropPath: string;
};

export const TrendingMovieSlideContainer = styled(
  Box
)<TrendingMovieSlideContainerProps>(({ backdropPath }) => ({
  position: "relative",
  height: "80vh",
  maxWidth: "100vw",
  background: `url(${backdropPath}) 
    no-repeat
     center / cover `,
  backgroundPosition: "50% 20%",
  borderRadius: "1rem",
  margin: "16px",
}));

export const DarkOverlayContainer = styled(Box)(() => ({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  borderRadius: "1rem",
  position: "absolute",
  width: "100%",
  height: "100%",
}));

export const TrendingMovieDetailContainer = styled(Stack)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

type StyledTypographyProps = TypographyProps & {
  component?: ElementType;
};
export const StyledTypography = styled(Typography)<StyledTypographyProps>(
  () => ({
    color: "white",
  })
);
