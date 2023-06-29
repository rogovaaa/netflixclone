import { IMoviesListAction } from "./types"
import { IData} from "../types/data"
import { defaultvalue } from "./actions"
import { LOAD_MOVIES } from "./actions"

const moviesListReducer = (state: IData = defaultvalue, action: IMoviesListAction): IData => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {
                ...state,
                results: action.payload.results,
                total_pages: action.payload.total_pages,
                
                page: action.payload.page,
                total_result: action.payload.total_result,
            }
        default:
            return state
    }
}

export default moviesListReducer