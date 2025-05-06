import React, { createContext } from "react";

interface PageContextType {
  page: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}
export const PageContext = createContext<PageContextType>({
  page: 1,
  totalPages: 1,
  handlePageChange: () => {},
  setTotalPages: () => {},
});
