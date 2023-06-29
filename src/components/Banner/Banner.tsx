import React from "react";
import { useState, useEffect } from "react";
import { requests } from "../../utils/constants";
import axios from "axios";
import { IMovie } from "../../types/movie";
import "./Banner.scss";
const Banner = () => {
  const [randomMovie, setRandomMovie] = useState<IMovie>();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);
      setRandomMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {randomMovie?.title ||
            randomMovie?.title ||
            randomMovie?.original_title}
        </h1>{" "}
        <div className="buttons">
          <button className="button"> Play</button>
          <button className="button">My list</button>
        </div>
      </div>

      <div className="banner--fadeBottom " />
    </header>
  );
};

export default Banner;
