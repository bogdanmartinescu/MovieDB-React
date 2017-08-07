import React, { Component } from 'react';
import { getSearch } from '../services/movies.service';
import MovieBlock from '../containers/MovieBlock';

class Search extends Component {
  constructor() {
      super();
      this.state = {
          movies: []
      };
  }

  search(query) {
      getSearch(query).then(res => this.setState({ movies: res }));
  }

  render () {
      return (
          <div className="Search">
              <h2>Search</h2>
              <input type="text" onKeyUp={ (e) => this.search(e.target.value) } />
              <div>
                  {this.state.movies.map(movie => <MovieBlock movie={movie} key={movie.id} />)}
              </div>
          </div>
      );
  }
}

export default Search;
