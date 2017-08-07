import React, { Component } from 'react';
import { getPopular } from '../services/movies.service';
import MovieBlock from '../containers/MovieBlock';

class Popular extends Component {
  constructor(props) {
      super(props);
      this.state = {
          movies: []
      }
  }

  componentWillMount() {
      getPopular().then(res => this.setState({ movies: res }));
  }

  render () {
      let movies = this.state.movies.map(movie => <MovieBlock movie={movie} key={movie.id} />);

      return (
          <div className="Popular">
              <h2>Popular Movies</h2>
              {movies}
          </div>
      );
  }
}

export default Popular;
