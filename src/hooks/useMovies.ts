import { useEffect, useState } from 'react'
import movieDb from '../api/MovieRequester'
import { Movie, MovieDBResponse } from '../interfaces/MovieInterface'

interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[]
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  })

  const getMovies = async () => {
    const nowPlayingPromise = movieDb.get<MovieDBResponse>('/now_playing')
    const popularPromise    = movieDb.get<MovieDBResponse>('/popular')
    const topRatedPromise   = movieDb.get<MovieDBResponse>('/top_rated')
    const upcomingPromise   = movieDb.get<MovieDBResponse>('/upcoming')

    const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])
    
    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results
    })
    
    setIsLoading(false)
  }
  useEffect(() => {
    getMovies() //now_playing
  }, [])

  return {
    ...moviesState,
    isLoading
  }
}