// import { createContext } from "react";

import { createContext } from "react";

// export const createContext = createContext(null);

// export const movieReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_MOVIE":
//       return { ...state, movie: action.payload };
//     case "SET_POPULAR_MOVIE":
//       return { ...state, popularMovie: action.payload };
//     case "SET_MOVIE_DETAIL":
//       return { ...state, movieDetail: action.payload };
//     default:
//       return state;
//   }
// }

export const movieContext = createContext(null);
export const popularMovieContext = createContext(null);
export const movieDetailContext = createContext(null);
