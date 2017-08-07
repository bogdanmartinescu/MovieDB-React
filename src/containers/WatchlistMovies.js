import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieBlock from '../containers/MovieBlock';

const WatchlistMovies = ({ watchlist }) => {
    let list;

    if(watchlist && watchlist.length) {
        list = watchlist.map((movie, index) => <MovieBlock movie={movie} key={index} />);
    } else {
        list = "There are no movies in your watchlist currently";
    }

    return (
        <div>{list}</div>
    );
}

function mapStateToProps(state) {
    return {
        watchlist: state.watchlist
    }
}

export default connect(mapStateToProps)(WatchlistMovies);
