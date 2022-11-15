import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { GradientBackground } from '../components/GradientBackground'
import { MovieCard } from '../components/MovieCard'
import { MoviesSlider } from '../components/MoviesSlider'
import { useMovies } from '../hooks/useMovies'
import { getImageColors } from '../helpers/getColors'
import { GradientContext } from '../context/GradientContext'

const WINDOW_WIDTH = Dimensions.get('window').width

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()

  const { setCurrentColors } = useContext(GradientContext)

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    const [primary, secondary] = await getImageColors(uri)
    setCurrentColors({ primary, secondary })
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [nowPlaying])

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
      }}>
        <ActivityIndicator color='red' size={50} />
      </View>
    )
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MovieCard movie={item} />}
              sliderWidth={WINDOW_WIDTH}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={getPosterColors}
            />
          </View>

          <MoviesSlider title='Populares' movies={popular} />
          <MoviesSlider title='Mejor calificadas' movies={topRated} />
          <MoviesSlider title='Proximos estrenos' movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}