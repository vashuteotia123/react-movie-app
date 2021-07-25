import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  UNFAVOURITE,
  SHOW_FAVOURITE,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showfavourites: false,
};
export function movies(state = initialMoviesState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //       ...state,
  //       list: action.movies,
  //     };
  //   }
  //   return state;
  // }

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case UNFAVOURITE:
      const filtered = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filtered,
      };
    case SHOW_FAVOURITE:
      return {
        ...state,
        showfavourites: action.val,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};

export function search(state = { result: {} }, action) {
  return state;
}

const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
    movies,
    search,
})