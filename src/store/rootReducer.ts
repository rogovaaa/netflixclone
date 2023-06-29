import { combineReducers } from "redux";
import moviesListReducer from "./reducer";
import addToListReducer from "./reducers/addToList/reducer";


const rootReducer = combineReducers({
   movies:moviesListReducer,
   favoriteMovies:addToListReducer,
    
})

export default rootReducer