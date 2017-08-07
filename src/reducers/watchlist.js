function watchlistReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TO_WATCHLIST':
          let inWatchlist = state.find(movie => movie.id === action.payload.id);

          if(!inWatchlist) {
              action.payload = Object.assign({inWatchlist: true}, action.payload);
              return [...state, action.payload];
          }
          return state;

      case 'REMOVE_FROM_WATCHLIST':
          return state.filter(movie => movie.id !== action.payload);

      default:
          return state;
    }
}

export default watchlistReducer;
