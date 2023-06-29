import { IMovie } from "./movie"
export interface IData {
    results: IMovie[],
    page?: number,
    total_pages?: number ,
    total_result?: number,
}