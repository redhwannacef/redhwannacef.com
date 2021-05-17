import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

const rootElement = document.getElementById("root");
const render = rootElement.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
