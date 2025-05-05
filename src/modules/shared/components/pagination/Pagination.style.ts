import {
  Pagination,
  PaginationItem,
  PaginationItemProps,
  PaginationProps,
} from "@mui/material";
import { styled } from "@mui/system";

type StyledPagination = PaginationProps;

export const StyledPagination = styled(Pagination)<StyledPagination>(() => ({
  padding: "24px",
  margin: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "1rem",
  "& .MuiPagination-ul": {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
}));

type StyledPaginationItemProps = PaginationItemProps & {
  isItemSelected: boolean;
  itemPage: number;
  currentPage: number;
};

export const StyledPaginationItem = styled(PaginationItem)(
  ({ isItemSelected, itemPage, currentPage }: StyledPaginationItemProps) => ({
    width: "100%",
    color: isItemSelected ? "#000" : "#fff",
    backgroundColor: isItemSelected ? "#13afe9" : "#083c84",
    gap: "100%",
    "&:hover": {
      backgroundColor: itemPage === currentPage ? "#0b7ec4" : "#d1d1d1",
      color: isItemSelected ? "#fff" : "#000",
    },
  })
);
