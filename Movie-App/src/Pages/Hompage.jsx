import React, { useEffect, useState } from "react";
import { getPopularMovie, getTrendingMovie } from "../utils/movieAPI";
// import { movieContext } from "../Context/MovieContext";
import MovieItem from "../components/MovieITem";
import ListMovie from "../components/ListMovie";
import Carousel from "../components/carousel";

export default function Hompage() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);

  // const [movie, dispatch] = useReducer(movieContext);
  // reducer movie

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getPopularMovie();
      setPopularMovie(data);
    };
    const fetchTrending = async () => {
      const data = await getTrendingMovie();
      setTrendingMovie(data);
    };

    fetchdata();
    fetchTrending();
    // console.log(popularMovie);
  }, []);


  return (
    <>
      <div className=" flex flex-col ">
        <ListMovie popularMovie={popularMovie} title={"Popular Movie"} />
        <ListMovie popularMovie={trendingMovie} title={"Trending Movie This Week"} />
      </div>
    </>
  );
}
