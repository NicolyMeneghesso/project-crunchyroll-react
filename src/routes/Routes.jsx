import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import HomePage from "../pages/Home/containers/HomePage.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <HomePage />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;