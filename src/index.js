import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomeTemplate from "./HomeTemplate/HomeTemplate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
);
