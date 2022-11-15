import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'
import { MovieCard } from './MovieCard'

interface Props {
  movies: Movie[],
  title?: string
}

export const MoviesSlider = ({ title, movies}: Props) => {
  return (
    <View style={{ height: 250 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieCard movie={item} width={140} height={200} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}