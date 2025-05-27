import React, { useEffect, useState } from "react";
import { getPopularMovie, getTrendingMovie } from "../utils/movieAPI";
// import { movieContext } from "../Context/MovieContext";
import MovieItem from "../components/MovieITem";
import ListMovie from "../components/ListMovie";
import Carousel from "../components/carousel";

export default function Hompage() {
  const [popularMovie, setPopularMovie] = useState([]);

  // const [movie, dispatch] = useReducer(movieContext);
  // reducer movie

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getPopularMovie();
      setPopularMovie(data);
    };
    fetchdata();
    // console.log(popularMovie);
  }, []);


  return (
    <>
      <div className=" flex flex-col gap-12">
        <ListMovie popularMovie={popularMovie} title={"Popular Movie"} />
        <ListMovie popularMovie={popularMovie} title={"Best Movie"} />
      </div>
    </>
  );
}
