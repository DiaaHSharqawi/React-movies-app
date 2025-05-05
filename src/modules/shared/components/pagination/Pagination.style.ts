import { Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPagination = styled(Pagination)(() => ({
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

type StyledPaginationItemProps = {
  isItemSelected: boolean;
  itemPage: number;
  currentPage: number;
};

const StyledPaginationKeys = ["isItemSelected", "itemPage", "currentPage"];

const shouldForwardProp = (props: string) =>
  !StyledPaginationKeys.includes(props);

export const StyledPaginationItem = styled(PaginationItem, {
  shouldForwardProp: shouldForwardProp,
})(({ isItemSelected, itemPage, currentPage }: StyledPaginationItemProps) => ({
  width: "100%",
  color: isItemSelected ? "#000" : "#fff",
  backgroundColor: isItemSelected ? "#13afe9" : "#083c84",
  gap: "100%",
  "&:hover": {
    backgroundColor: itemPage === currentPage ? "#0b7ec4" : "#d1d1d1",
    color: isItemSelected ? "#fff" : "#000",
  },
}));
