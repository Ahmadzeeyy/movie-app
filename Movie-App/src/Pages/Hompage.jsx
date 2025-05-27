import React, { useEffect, useState } from "react";
import { getPopularMovie } from "../utils/movieAPI";
// import { movieContext } from "../Context/MovieContext";
import MovieItem from "../components/MovieITem";
import ListMovie from "../components/ListMovie";
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
      <ListMovie popularMovie={popularMovie} />
    </>
  );
}
