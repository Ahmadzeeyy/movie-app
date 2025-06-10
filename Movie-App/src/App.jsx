import { useEffect } from "react";
import Carousel from "./components/carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hompage from "./Pages/Hompage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { useState } from "react";
import DetailMovie from "./Pages/DetailMovie";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/detail/:detailId" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>

      {/* <Hompage /> */}
      <Footer />
    </>
  );
}

export default App;
