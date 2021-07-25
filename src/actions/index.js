// {
//     type: 'ADD_MOVIES',
//         movies:[]
// }
// {
//     type: "DECREASE_COUNT";
// }

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UNFAVOURITE = "UNFAVOURITE";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";

export function addMovie(movies) {
  return {
    type: "ADD_MOVIES",
    movies: movies,
  };
}
export function addFavourite(movie) {
  return {
    type: "ADD_FAVOURITE",
    movie,
  };
}
export function unfavourite(movie) {
  return {
    type: "UNFAVOURITE",
    movie,
  };
}

export function show_favourite(val) {
  return {
    type: "SHOW_FAVOURITE",
    val,
  };
}
