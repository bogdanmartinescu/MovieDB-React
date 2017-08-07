import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToWatchlist, removeFromWatchlist } from '../actions';

const MovieBlock = ({ movie, addToWatchlist, removeFromWatchlist }) => {
    let { title, poster_path, inWatchlist } = movie;
    poster_path = `http://image.tmdb.org/t/p/w300/${poster_path}`;

    return (
      <div className="movie-block">
          <img src={poster_path} alt=""/>
          <div className="details">
              <p className="movie-title">{title}</p>
              { inWatchlist ? <a className="watchlist-it" onClick={ () => removeFromWatchlist(movie) }><span className="fa fa-eye-slash"></span></a> : <a className="watchlist-it" onClick={ () => addToWatchlist(movie) }><span className="fa fa-eye"></span></a>}
          </div>
      </div>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToWatchlist, removeFromWatchlist }, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieBlock);
