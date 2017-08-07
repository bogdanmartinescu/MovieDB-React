import React, { Component } from 'react';
import WatchlistMovies from '../containers/WatchlistMovies';

const Watchlist = () => {
    return (
      <div className="Watchlist">
          <h2>Watchlist</h2>
          <WatchlistMovies />
      </div>
    );
}

export default Watchlist;
