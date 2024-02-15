import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import Paginate from "./components/paginate";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAllMovies } from "./redux/actions/movieAction";

function App() {
  const [movies, setmovies] = useState([]);
  const [pagecount, setpagecount] = useState(0);

  // const getAllmovies = async () => {
  //   const res = await axios.get(
  //     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=32f78e1878ad3c9d4e8e34158ef689d5"
  //   );

  //   setmovies(res.data.results);
  //   setpagecount(res.data.total_pages);
  // };

  const getpage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=32f78e1878ad3c9d4e8e34158ef689d5`
    );

    setmovies(res.data.results);
    setpagecount(res.data.total_pages);
  };

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=32f78e1878ad3c9d4e8e34158ef689d5&query=${word}`
      );
      setmovies(res.data.results);
      setpagecount(res.data.total_pages);
    }
  };

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={<MoviesList getpage={getpage} pagecount={pagecount} />}
            />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
