import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => <h1>Hello, world!</h1>;
const About = () => <h1>Hello, from the about page!</h1>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
