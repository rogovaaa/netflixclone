import { IMoviesListAction } from "../../types";
import SearchActionTypes from "./types";

SearchActionTypes
const INITIAL_STATE = {
    searchItems: []
  };
  
  const searchReducer = (state = INITIAL_STATE, action:IMoviesListAction) => {
    const { type, payload } = action;
    switch (type) {
      case SearchActionTypes.SET_SEARCH_DATA: {
        return { ...state, searchItems: payload };
      }
      default:
        return state;
    }
  };
  
  export default searchReducer;