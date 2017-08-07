export function addToWatchlist(movie) {
    return { type: 'ADD_TO_WATCHLIST', payload: movie };
}

export function removeFromWatchlist(movie) {
    return { type: 'REMOVE_FROM_WATCHLIST', payload: movie.id };
}
