import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovie, show_favourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovie(data));
    console.log("STATE", this.props.store.getState());
  }
  isMovieFavorite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(show_favourite(val));
  };

  render() {
    const { movies } = this.props.store.getState();
    const { list, favourites, showfavourites } = movies;
    console.log("RENDER", this.props.store.getState());
    const displayMovie = showfavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showfavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showfavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
          {displayMovie.length == 0 ? (
            <div className="no-movies"> "No movies to display"</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
