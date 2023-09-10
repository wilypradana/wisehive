import React from "react";
import ReactDOM from "react-dom/client";

import Coaching from "./component/service/1on1coaching";
import Homepage from "./component/Homepage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/">element={<Homepage />}</Route>
      <Route path="/service/1on1-coaching">element={<Coaching />}</Route>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
