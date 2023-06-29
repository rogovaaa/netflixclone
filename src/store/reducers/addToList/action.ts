import { IMovie } from '../../../types/movie'
import { IFavoriteListState } from './types'

export const ADD_TO_LIST = 'ADD_TO_LIST'
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST'
export const defaultState: IFavoriteListState = {
    favoritesMovies: [],
}

export const addToListAction = (movie: IMovie) => {
    return {
        type: ADD_TO_LIST,
        payload: movie,
    }
}
export const deleteFromListAction = (id: number | undefined) => {
    return {
        type: DELETE_FROM_LIST,
        payload: id,
    }
}
