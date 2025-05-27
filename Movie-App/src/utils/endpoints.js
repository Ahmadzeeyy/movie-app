import { getPopularMovie } from "./movieAPI";

const API_URL = import.meta.env.VITE_API_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export const endpoints = {
  popularMovie: `${API_URL}/popular`,
  topRatedMovie: `${API_URL}/top_rated`,
  imageUrl: (path) => {
    return `${IMAGE_URL}/${path}`;
  },
  searchMovie: (param) => {
    return `${API_URL}?query=${param}`;
  },
};
