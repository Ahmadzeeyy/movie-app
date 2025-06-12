import React, { useEffect, useState } from "react";
import { getDetailMovie } from "../utils/movieAPI";
import { useParams } from "react-router-dom";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export default function DetailMovie() {
  const [detailMovie, setdetailMovie] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDetailMovie(detailId);
      setdetailMovie(response);
      console.log(response);
    };
    fetchData();
  }, [detailId]);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`${IMAGE_URL}/${detailMovie?.belongs_to_collection?.poster_path} || `}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
