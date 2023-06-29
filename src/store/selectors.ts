import { GlobalState } from "./store"
export const moviesSelector = (state: GlobalState) => state.movies.results
export const favoritesMoviesSelector = (state: GlobalState) => state.favoriteMovies.favoritesMovies