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

export async function getTrendingMovie() {
  try {
    const { data } = await axios.get(endpoints.trendingMovie, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return data?.results;
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
    return data?.results;
  } catch (error) {
    console.log(error?.message);
  }
}

export async function getDetailMovie(id) {
  try {
    const { data } = await axios.get(endpoints.detailMovie(id), {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error?.message);
  }
}
