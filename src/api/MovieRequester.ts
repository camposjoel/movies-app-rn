import axios from 'axios'
import { MOVIE_DB_KEY } from '@env'

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: MOVIE_DB_KEY,
    language: 'es-MX'
  }
})

export default movieDb
