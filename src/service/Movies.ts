import { API_KEY } from "../utils/constants";
export const moviesResponse = (fetchUrl:string) => {
    const URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
    const request = new Request(URL, {
        method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3ZDQ0Y2RjNThhNTZlMDhmZTZjMmM0ZmE0M2FjNyIsInN1YiI6IjY0NzMxZWJkYmUyZDQ5MDBhN2Q2MjRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULjp5A0erehXj9DOgKf5A-WeR5Uh4vu0F_n_Z4aOMiQ'
    }
    })

    return fetch(request)
        .then((response) => response.json())
       
}
export const moviesResponseBySearch = ( query: string | undefined): Promise<any> => {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  const request = new Request(URL, {
     method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3ZDQ0Y2RjNThhNTZlMDhmZTZjMmM0ZmE0M2FjNyIsInN1YiI6IjY0NzMxZWJkYmUyZDQ5MDBhN2Q2MjRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULjp5A0erehXj9DOgKf5A-WeR5Uh4vu0F_n_Z4aOMiQ'
  }
  })

  return fetch(request)
      .then((response) => response.json())
}

