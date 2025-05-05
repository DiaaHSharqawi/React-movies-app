import CustomPaginationItem from "./CustomPaginationItem";
import { StyledPagination } from "./Pagination.style";

type PaginationProps = {
  page: number;
  handlePageChange: { (page: number): void };
};

function Pagination({ page, handlePageChange }: PaginationProps) {
  return (
    <StyledPagination
      size="large"
      shape="rounded"
      variant="outlined"
      count={10}
      page={page}
      onChange={(_, value) => handlePageChange(value)}
      renderItem={(item) => (
        <CustomPaginationItem {...item} currentPage={page} />
      )}
    />
  );
}

export default Pagination;
