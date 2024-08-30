"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext<any>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState();
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchStates = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return { searchValue, setSearchValue };
};

export { SearchContext, SearchProvider, useSearchStates };
