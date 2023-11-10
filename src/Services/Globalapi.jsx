import axios from "axios";

const key = "4d1299a46a564ccabb93c7bffdc9a490";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get(`/genres?key=${key}`);
const getGameList = axiosCreate.get(`/games?key=${key}`)
const getGameListByGenreid=(id)=>axiosCreate.get(`/games?key=${key}&genres=${id}`)
export default {getGenreList, getGameList, getGameListByGenreid};