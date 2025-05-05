import { PaginationRenderItemParams } from "@mui/material";
import { StyledPaginationItem } from "./Pagination.style";

type CustomPaginationItemProps = PaginationRenderItemParams & {
  currentPage: number;
};

function CustomPaginationItem({
  currentPage,
  ...item
}: CustomPaginationItemProps) {
  return (
    item && (
      <StyledPaginationItem
        isItemSelected={item.selected}
        itemPage={item.page!}
        currentPage={currentPage}
        {...item}
      />
    )
  );
}

export default CustomPaginationItem;
