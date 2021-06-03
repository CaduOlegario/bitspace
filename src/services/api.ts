import axios from 'axios';

export const apiSearchPlayers = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v2/players/search",
  headers: {
    "x-rapidapi-key": "2a0ba41b7amshe995af9ec29ed5bp141eb5jsn625c443e845f",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    useQueryString: true,
  },
});
