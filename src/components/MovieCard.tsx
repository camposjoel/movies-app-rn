import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'

interface Props {
  movie: Movie,
  height?: number,
  width?: number
}

export const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const navigation = useNavigation<any>()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', movie)}
      activeOpacity={0.8}
      style={{
        height,
        width,
        marginHorizontal: 6,
        paddingBottom: 6,
        paddingHorizontal: 4
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 16
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#0000",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  }
})