import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/courses" element={<App />} />
    </Routes>
  </BrowserRouter>
);
