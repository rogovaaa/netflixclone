import { IBaseActionType} from "../types/types"
import { IData } from "../types/data"
export interface IMoviesListAction extends IBaseActionType {
    payload: IData

}