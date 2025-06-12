// import { getPopularMovie } from "./movieAPI";

const API_URL = import.meta.env.VITE_API_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const BACKDROP_URL = import.meta.env.VITE_BACKDROP_URL;

export const endpoints = {
  popularMovie: `${API_URL}movie/popular`,
  trendingMovie: `${API_URL}trending/movie/week`,
  topRatedMovie: `${API_URL}top_rated`,
  detailMovie: (id) => {
    return `${API_URL}movie/${id}`;
  },
  imageUrl: (path) => {
    return `${IMAGE_URL}/${path}`;
  },
  backdrop: (path) => {
    return `${BACKDROP_URL}/${path}`;
  },
  searchMovie: (param) => {
    return `${API_URL}?query=${param}`;
  },
};
