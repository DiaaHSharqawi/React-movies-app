import { useContext } from "react";
import { PageContext } from "../../../home/contexts/pageContext/PageContext";
import CustomPaginationItem from "./CustomPaginationItem";
import { StyledPagination } from "./Pagination.style";

function CustomPagination() {
  const { page, totalPages, handlePageChange } = useContext(PageContext);

  return (
    <StyledPagination
      size="large"
      shape="rounded"
      variant="outlined"
      count={totalPages}
      boundaryCount={1}
      page={page}
      onChange={(_, value) => handlePageChange(value)}
      renderItem={(item) => (
        <CustomPaginationItem {...item} currentPage={page} />
      )}
    />
  );
}

export default CustomPagination;
