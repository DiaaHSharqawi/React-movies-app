import { useCallback, useMemo, useState } from "react";
import { PageContext } from "./PageContext";

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const value = useMemo(
    () => ({
      page,
      handlePageChange,
      totalPages,
      setTotalPages,
    }),
    [page, handlePageChange, totalPages, setTotalPages]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
