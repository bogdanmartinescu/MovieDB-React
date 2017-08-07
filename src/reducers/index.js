import { combineReducers } from 'redux';
import WatchlistReducer from './watchlist';

const watchlistState = combineReducers({
    watchlist: WatchlistReducer
});

export default watchlistState;
