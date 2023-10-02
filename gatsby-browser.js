import "./src/styles/global.css";
import { AppProviders } from "./src/core/components/app-providers";
import React from "react";

export const wrapRootElement = ({ element }) => (
  <AppProviders>{element}</AppProviders>
);
