import { moviesResponse,moviesResponseBySearch } from "../service/Movies"
import { IData } from "../types/data"
import { IMoviesListAction } from "./types"
import { GlobalDispatch } from './store'
import { IMovie } from "../types/movie"
export const LOAD_MOVIES = 'LOAD_MOVIES'
export const defaultvalue: IData = {
    results: [] as IMovie[],
    total_result: 0,
    
    page: 0,
    total_pages: 0,
} 
export const loadMoviesAction = (movies: IData): IMoviesListAction => {
    return {
        type: LOAD_MOVIES,
        payload: movies,
    }
}

export const loadMoviesAsyncAction = (fetchUrl:string): any => {
    return (dispatch: GlobalDispatch): any => {
        moviesResponse(fetchUrl).then((movies: IData) =>
            dispatch(loadMoviesAction(movies)))
    }
}

export const loadMoviesBySearchAsyncAction = ( query: string | undefined): any => {
    return (dispatch: GlobalDispatch): any => {
        moviesResponseBySearch(query).then((movies: IData) =>
            dispatch(loadMoviesAction(movies)))
    }
}