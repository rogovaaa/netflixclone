import { IMovie } from '../../../types/movie'
import { ADD_TO_LIST, defaultState, DELETE_FROM_LIST } from './action'
import { IFavoriteActionType, IFavoriteListState } from './types'

const addToListReducer = (state: IFavoriteListState = defaultState, action: IFavoriteActionType): IFavoriteListState => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {
                ...state,
                favoritesMovies: [...state.favoritesMovies, action.payload as IMovie],
            }
        case DELETE_FROM_LIST:
            const filterPosts = state.favoritesMovies.filter(
                (movie) => movie.id !== action.payload
            )
            return {
                ...state,
                favoritesMovies: [...filterPosts],
            }
        default:
            return state
    }
}

export default addToListReducer