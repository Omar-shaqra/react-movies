import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginate from "./paginate";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

const MoviesList = ({ getpage, pagecount }) => {
  const [movies, setmovies] = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const dataMovies = useSelector((state) => {
    state.movies = movies;
  });

  useEffect(() => {
    setmovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2>there is no movies</h2>
      )}
      {movies.length >= 1 ? (
        <Paginate getpage={getpage} pagecount={pagecount} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
