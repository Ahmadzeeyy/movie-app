const API_KEY = import.meta.env.VITE_TMDB_MOVIE_API_KEY;
import { endpoints } from "./endpoints";



// https://api.themoviedb.org/3/movie/popular
import axios from "axios";
export async function getPopularMovie() {
  try {
    const { data } = await axios.get(endpoints.popularMovie, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return data?.results;
    // console.log(data?.results);
  } catch (error) {
    console.log(error?.message);
  }
}

export async function getTopRatedMovie() {
  try {
    const { data } = await axios.get(endpoints.topRatedMovie, {
      headers: {
        Authorization: `Barer ${API_KEY}`,
      },
    });
  } catch (error) {
    console.log(error?.message);
  }
}
