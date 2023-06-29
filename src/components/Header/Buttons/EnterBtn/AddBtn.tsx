import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CompleteSvg from "../../../../svg/CompleteSvg";
import FavoritesSvg from "../../../../svg/FavoritesSvg";
import {
  addToListAction,
  deleteFromListAction,
} from "../../../../store/reducers/addToList/action";
import { favoritesMoviesSelector } from "../../../../store/selectors";

import { IMovie } from "../../../../types/movie";
import styles from "../styles.module.scss";

export const AddBtn = (props: { movie: IMovie }) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const favoritemovies = useSelector(favoritesMoviesSelector);
  const isFavoritePost = (favoriteMoviesId: number | undefined) => {
    return favoritemovies.find((movie) => movie.id === favoriteMoviesId);
  };
  const toggleFavoritesPosts = (movie: IMovie) => {
    if (!isFavoritePost(movie.id)) {
      dispatch(addToListAction(movie));
    } else {
      dispatch(deleteFromListAction(movie.id));
    }
  };

  return (
    <button
      onClick={() => toggleFavoritesPosts(movie)}
      className={
        isFavoritePost(movie.id)
          ? `${styles.favbutton} ${styles.active}`
          : `${styles.favbutton}`
      }
    >
      {isFavoritePost(movie.id) ? <CompleteSvg /> : <FavoritesSvg />}
    </button>
  );
};
