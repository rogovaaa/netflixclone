import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadMoviesBySearchAsyncAction } from "../store/actions";
import MovieCard from "../components/MovieCard/MovieCard";
import { moviesSelector } from "../store/selectors";
import NavBar from "../components/NavBar/NavBar";

import axios, * as others from "axios";
import { IMovie } from "../types/movie";
const SearchPage = () => {
  const movies = useSelector(moviesSelector);

  const { name } = useParams();
  const dispatch = useDispatch();

  const query = `${name}
  }`;

  useEffect(() => {
    dispatch(loadMoviesBySearchAsyncAction(query));
  }, [dispatch, query]);
  console.log(query);
  return (
    <div>
      <NavBar isScrolled />
      {!movies.length ? (
        <h1>No movies on your request</h1>
      ) : (
        <div
          style={{
            padding: "140px 0 0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "80px 40px",
          }}
        >
          {movies.map((item) => (
            <MovieCard key={item.id} docs={item} />
          ))}
        </div>
      )}
      <div></div>
    </div>
  );
};

export default SearchPage;
