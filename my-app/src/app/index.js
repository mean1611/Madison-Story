import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";

document.title = "Madison Story";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
