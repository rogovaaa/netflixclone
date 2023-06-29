import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios, * as others from "axios";

import Slider from "../Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { IMovie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";

const Row = ({ title, fetchUrl }: any) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3ZDQ0Y2RjNThhNTZlMDhmZTZjMmM0ZmE0M2FjNyIsInN1YiI6IjY0NzMxZWJkYmUyZDQ5MDBhN2Q2MjRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULjp5A0erehXj9DOgKf5A-WeR5Uh4vu0F_n_Z4aOMiQ",
    },
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl, options);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div style={{ padding: "0 40px", position: "relative", bottom: "60px" }}>
      <Slider title={title}>
        {movies &&
          movies?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard docs={item} />
              </SwiperSlide>
            );
          })}
      </Slider>
    </div>
  );
};

export default Row;
