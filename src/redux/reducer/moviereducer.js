import { Allmovies } from "../types/moviesType";

export const movieReducer = (state = { movies: [], pagecount: 0 }, action) => {
  switch (action.type) {
    case Allmovies:
      return { movies: action.data, pagecount: action.pages };
    default:
      return state;
  }
};
