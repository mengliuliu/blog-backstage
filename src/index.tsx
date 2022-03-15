// import { log } from "./log";
// import "./style.css";

// log("mengliu");

// import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

import "./style.css"
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <App />,
  document.getElementById("root")
);
