import React from "react";
import MovieItem from "./MovieITem";

export default function ListMovie({ popularMovie }) {
  console.log(popularMovie);

  return (
    <div classname="w-full">
      <h3>popular movie </h3>
      <div className="container flex justify-center items-center flex-wrap gap-4 mx-auto items-stretch">
        {popularMovie.map((movie) => {
          console.log(movie);
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
