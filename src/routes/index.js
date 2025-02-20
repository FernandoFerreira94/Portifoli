import { Route, Routes } from "react-router-dom";

import Page404 from "../pages/page404";

import Home from "../pages/home";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
