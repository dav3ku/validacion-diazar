import React from "react";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Index from "./Pages/Index";
import Validate from "./Pages/Validate";

import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "./Theme";
import Box from "@mui/material/Box";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="validate" element={<Validate />}>
          <Route path=":ID" element={<Validate />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
