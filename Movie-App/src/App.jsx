import { useEffect } from "react";
import Carousel from "./components/carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hompage from "./Pages/Hompage";

import { getTrendingMovie } from "./utils/movieAPI";
import { useState } from "react";
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
      <Navbar />
      <Carousel trendingMovie={trendingMovie} />
      <Hompage />
      <Footer />
    </>
  );
}

export default App;
