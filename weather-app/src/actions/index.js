import axios from 'axios';

const API_KEY = '0cf4c99f013f6d698b68d87096d7de05';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},us`;
    var request = axios.get(URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}