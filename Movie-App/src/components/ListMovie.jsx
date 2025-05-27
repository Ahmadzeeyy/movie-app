import React from "react";
import MovieItem from "./MovieITem";

export default function ListMovie({ popularMovie, title }) {
  return (
    <div classname="w-full">
      <h1 className="w-full my-6 text-center text-2xl font-semibold">
        {title}
      </h1>
      <div className="container flex justify-center  flex-wrap gap-4 mx-auto items-stretch">
        {popularMovie.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
