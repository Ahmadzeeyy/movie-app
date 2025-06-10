import React from "react";
import MovieItem from "./MovieITem";

export default function ListMovie({ popularMovie }) {
  return (
    <div className="w-full p-4">
      {/* <h1 className="w-full mt-2 text-start text-xl font-semibold">
        {title}
      </h1> */}
      <div className="overflow-x-auto whitespace-nowrap p-3 scrollbar-none grid-flow-col">
        {popularMovie.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
