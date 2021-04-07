import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createMuiTheme,
  CssBaseline,
  Typography,
  ThemeProvider,
} from "@material-ui/core";

const Home = () => <Typography>Hello, world!</Typography>;
const About = () => <Typography>Hello, from the about page!</Typography>;

const theme = createMuiTheme();

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
