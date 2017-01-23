import axios from 'axios'

const API_KEY = 'b73639b863c3642137b0d3ccdaa9e30b'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},au&units=metric`
  const promise = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: promise
  }
}
