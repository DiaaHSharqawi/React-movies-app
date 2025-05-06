import { Chip } from "@mui/material";
import { ReactElement } from "react";

type PopularMovieDetailChipProps = {
  chipIcon: ReactElement;
  chipLabel: string;
  className?: string;
};

function PopularMovieDetailChip({
  chipIcon,
  chipLabel,
  className,
}: PopularMovieDetailChipProps) {
  return <Chip icon={chipIcon} label={chipLabel} className={className} />;
}

export default PopularMovieDetailChip;
