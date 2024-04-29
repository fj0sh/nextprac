"use client";

import { MovieProps } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

type FavoritesProviderProps = {
  children: React.ReactNode;
};

const faveContext = createContext<any | undefined>(undefined);

const useFaveContext = () => useContext(faveContext);

const FavoritesProvider = (props: FavoritesProviderProps) => {
  const { children } = props;
  const [fave, setFave] = useState<MovieProps[]>([]);

  return (
    <faveContext.Provider value={{ fave, setFave }}>
      {children}
    </faveContext.Provider>
  );
};

export default FavoritesProvider;

export { useFaveContext };
