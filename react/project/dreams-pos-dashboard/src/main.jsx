import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./assets/scss/min.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";


ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
  <App />
</Provider>

);