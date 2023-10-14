import { ThemeProvider } from "@material-tailwind/react";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavBar } from "./NavBar";

const theme = {
  button: {
    defaultProps: {
      color: "teal",
    },
  },
};

const queryClient = new QueryClient();

interface GlobalProviderProps {
  children?: ReactNode;
}

export const AppProviders = ({ children }: GlobalProviderProps) => {
  return (
    <ThemeProvider value={theme}>
      <NavBar />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
