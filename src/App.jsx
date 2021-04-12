import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Home from "./pages/home";
import About from "./pages/about";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#222222",
    },
  },
  typography: {
    button: {
      textTransform: "inherit",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html,body,#root": {
          height: "100%",
          minHeight: "100%",
        },
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
