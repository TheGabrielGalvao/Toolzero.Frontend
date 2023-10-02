import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { NavBar } from "./NavBar";

const theme = {
  button: {
    defaultProps: {
      color: "teal",
    },
  },
};

export const AppProviders = ({ children }: HTMLElement) => {
  return (
    <ThemeProvider value={theme}>
      <NavBar />
      {children}
    </ThemeProvider>
  );
};
