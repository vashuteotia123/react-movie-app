// {
//     type: 'ADD_MOVIES',
//         movies:[]
// }
// {
//     type: "DECREASE_COUNT";
// }

export const ADD_MOVIES = "ADD_MOVIES";
export function addMovie(movies) {
  return {
    type: "ADD_MOVIES",
    movies: movies,
  };
}
