import { useEffect } from "react";
import Carousel from "./components/carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hompage from "./Pages/Hompage";
import { BrowserRouter, Route, Routes } from "react-router";

import { getTrendingMovie } from "./utils/movieAPI";
import { useState } from "react";
import DetailMovie from "./Pages/DetailMovie";


function App() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const results = await getTrendingMovie();
      setTrendingMovie(results);
    };
    fetch();
  }, []);
  return (
    <>
      {/* <Navbar /> */}

      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hompage/>}/>
          <Route path="/detail/:detailId" element={<DetailMovie/>}/>
          <Route path="/detail/:detailId" element={<DetailMovie/>}/>

      </Routes>
      </BrowserRouter>
      <Carousel trendingMovie={trendingMovie} />
      <Hompage />
      <Footer />
    </>
  );
}

export default App;
