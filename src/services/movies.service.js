import axios from 'axios';

const apiKey = '451a5c46225283a9a3e766eee8fa80ac';

export const getPopular = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&sort_by=popularity.desc`).then(res => res.data.results);
}

export const getSearch = (query) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`).then(res => res.data.results);
}
