import { Allmovies, movieApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(movieApi);
    console.log(res.data);
    dispatch({
      type: Allmovies,
      data: res.data.result,
      pages: res.data.total_pages,
    });
  };
};
