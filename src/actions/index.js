export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SHOW_FAV = "SHOW_FAV";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie: movie,
  };
}

export function removeFromFav(movie) {
  return {
    type: REMOVE_FROM_FAV,
    movie: movie,
  };
}

export function setShowFav(val) {
  return {
    type: SHOW_FAV,
    val,
  };
}

export function handleAddMovieToList(id) {
  console.log(id);
  const url = `https://www.omdbapi.com/?apikey=b602cb2d&i=${id}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        //dispatch an action to store the movie to the store
        dispatch(addMovieToList(movie));
      });
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=b602cb2d&s=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        //dispatch an action to store the movie to the store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
