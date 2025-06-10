import { Link, NavLink } from "react-router-dom";
import { endpoints } from "../utils/endpoints";

const API_URL = import.meta.env.VITE_API_URL;

export default function MovieItem({ movie }) {
  // console.log(popularMovie);

  return (
    <Link to={`/detail/${movie?.id}`}>
      <div className=" w-1/6  shadow-sm  px-1  inline-block cursor-pointer">
        {/* <NavLink to={`/detail${movie.id}`}></NavLink> */}
        <picture className="w-full max-w-md">
          <img
            src={`${endpoints.imageUrl(movie?.poster_path)}`}
            alt="Shoes"
            className="object-cover aspect-[2/3] rounded-lg transition-all hover:scale-105 duration-150"
          />
        </picture>
        {/* <div className="relative">
        <h4 className="   lg:text-base-content sm:text-sm font-semibold ps-1 pt-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-center ">
          {movie?.title || movie?.name || movie?.original_name}
        </h4>
      </div> */}
      </div>
    </Link>
  );
}
