import { useEffect, useState } from 'react'
import movieDb from '../api/MovieRequester'
import { Cast, CreditsResponse } from '../interfaces/CreditsInterface'
import { MovieDetail } from '../interfaces/MovieInterface'

interface MovieDetails {
  isLoading: boolean,
  movieFull?: MovieDetail,
  cast: Cast[]
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDb.get<MovieDetail>(`/${movieId}`)
    const movieCreditsPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`)
    const [detailsResp, creditsResp] = await Promise.all([movieDetailsPromise, movieCreditsPromise])
    
    setState({
      isLoading: false,
      movieFull: detailsResp.data,
      cast: creditsResp.data.cast,
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return { ...state }
}