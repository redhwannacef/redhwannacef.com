import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import Home from "./pages/home";
import About from "./pages/about";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#bf616a",
    },
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
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
});

const theme = responsiveFontSizes(muiTheme);

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
