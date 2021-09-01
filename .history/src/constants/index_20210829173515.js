//HABILITAR PROXY INVERSO PARA CORS INTERCEPTOR
//const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.themoviedb.org/3/";
const popular_movies_get = "movie/popular?";
const movie_search = "search/movie";
const movies_get = "movie/{movie_id}";
const api_key = "api_key = 2c4e30626dc1fcee2a373a9a71cf70f1";


export const popularGet = popular_movies_get => `${base_url}${popular_movies_get}${api_key}`;
export const moviesGet = movies_get => `${base_url}${movies_get}${api_key}`;
