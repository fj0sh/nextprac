"use client";

import React, { Children, createContext, useContext } from "react";

type themeProviderProps = {
  children: React.ReactNode;
};

const themeContext = createContext<any | undefined>(undefined);
const useThemeContext = () => useContext(themeContext);

const themeProvider = (props: themeProviderProps) => {
  const { children } = props;

  return <themeContext.Provider value={{}}>{children}</themeContext.Provider>;
};

export default themeProvider;
export { useThemeContext };
