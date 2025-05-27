import { endpoints } from "../utils/endpoints";

const API_URL = import.meta.env.VITE_API_URL;

export default function MovieItem({ movie }) {
  // console.log(popularMovie);

  return (
    <div className="card bg-base-100 w-72  shadow-sm transition-all border-2 border-gray-500 hover:border-gray-400 hover:scale-101">
      <figure>
        <img
          src={`${endpoints.imageUrl(movie?.poster_path)}`}
          alt="Shoes"
          className="h-72"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {movie?.title || movie?.name || movie?.original_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {movie?.overview?.length > 100
            ? `${movie?.overview.slice(0, 100)}...`
            : movie?.overview}
        </p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
}
