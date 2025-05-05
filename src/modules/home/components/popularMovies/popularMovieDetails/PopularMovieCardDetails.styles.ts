import DateRangeIcon from "@mui/icons-material/DateRange";
import StarIcon from "@mui/icons-material/Star";
import { Stack, StackProps, styled } from "@mui/system";
import PopularMovieDetailChip from "./PopularMovieDetailChip";

type PopularMovieCardDetailsContainerProps = StackProps & {
  backdropURL: string;
};

export const PopularMovieCardDetailsContainer = styled(Stack)(
  ({ backdropURL }: PopularMovieCardDetailsContainerProps) => ({
    background: `url(${backdropURL}) no-repeat center / cover`,
    width: "100%",
    height: "380px",
    borderRadius: "1rem",
    cursor: "pointer",
    justifyContent: "end",
    padding: "16px",
  })
);

export const StyledMovieVoteAverageDetailChip = styled(PopularMovieDetailChip)(
  () => ({
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
    width: "100%",
    color: "#f5d002",
  })
);

export const StyledMovieReleaseDateDetailChip = styled(PopularMovieDetailChip)(
  () => ({
    backgroundColor: "rgba(8, 60, 132, 1)",
    fontWeight: "bold",
    width: "50%",
    color: "#fff",
  })
);

export const StyledDateRangeIcon = styled(DateRangeIcon)(() => ({
  color: "#fff",
}));

export const StyledStarIcon = styled(StarIcon)(() => ({
  color: "#f5d002 !important",
}));
