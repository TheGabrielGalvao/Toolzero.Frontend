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

interface GlobalProviderProps {
  children?: ReactNode;
}

export const AppProviders = ({ children }: GlobalProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider value={theme}>
      <NavBar />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
