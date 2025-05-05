import { Button, Typography } from "@mui/material";
import { Box, Stack, styled } from "@mui/system";
import { ElementType } from "react";

type TrendingMovieSlideContainerProps = {
  backdropPath: string;
};

const shouldForwardProp = (prop: string) => prop !== "backdropPath";

export const TrendingMovieSlideContainer = styled(Box, {
  shouldForwardProp: shouldForwardProp,
})<TrendingMovieSlideContainerProps>(({ backdropPath }) => ({
  position: "relative",
  height: "80vh",
  maxWidth: "100vw",
  background: `url(${backdropPath}) no-repeat center / cover`,
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

type StyledTypographyProps = {
  component?: ElementType;
};

export const StyledTypography = styled(Typography)<StyledTypographyProps>(
  () => ({
    color: "white",
  })
);

export const StyledWatchNowButton = styled(Button)(() => ({
  width: "20rem",
  padding: "16px",
}));
