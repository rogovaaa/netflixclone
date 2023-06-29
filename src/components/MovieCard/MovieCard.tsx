import { Detail, IMovieProps } from "../../types/movie";
import { base_url } from "../../utils/constants";
import styles from "./styles.module.scss";
import { useState } from "react";
import { AddBtn } from "../Header/Buttons/EnterBtn/AddBtn";
import { useEffect } from "react";
import axios from "axios";
import PlayBtn from "../Header/Buttons/EnterBtn/PlayBtn";

const MovieCard = ({ docs }: IMovieProps) => {
  const [details, setDetails] = useState<Detail[]>([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3ZDQ0Y2RjNThhNTZlMDhmZTZjMmM0ZmE0M2FjNyIsInN1YiI6IjY0NzMxZWJkYmUyZDQ5MDBhN2Q2MjRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULjp5A0erehXj9DOgKf5A-WeR5Uh4vu0F_n_Z4aOMiQ",
    },
  };
  async function handleApiCall(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `
        https://api.themoviedb.org/3/movie/${docs?.id}?language=en-US`,
        options
      );
      setDetails(request.data);
      return request;
    }

    fetchData();
  }, []);
  console.log(details);
  const [showToolTip, setShowToolTip] = useState(false);
  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
    <div
      className={styles.preview}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <img
        key={docs?.id}
        src={`${base_url}${docs?.poster_path}`}
        alt={docs?.title}
      />
      {showToolTip && (
        <div className={styles.modal}>
          <img
            key={docs?.id}
            src={`${base_url}${docs?.poster_path}`}
            alt={docs?.title}
          />
          <div className={styles.block}>
            <div className={styles.cardBtns}>
              <PlayBtn />
              <AddBtn movie={docs!} />{" "}
              <div style={{ color: "rgb(36, 186, 22)" }}>
                {docs?.vote_average}
              </div>
            </div>
            {docs?.original_title}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
