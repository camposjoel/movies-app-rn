import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { MovieDetails } from '../components/MovieDetails'
// import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { RootStackParams } from '../navigation/Navigation'

const SCREEN_HEIGHT = Dimensions.get('screen').height
const IMAGE_RADIUS = 25

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{}

export const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const { cast, isLoading, movieFull } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.posterImage}
          borderBottomLeftRadius={IMAGE_RADIUS}
          borderBottomRightRadius={IMAGE_RADIUS}
        />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      
      { isLoading
        ? <ActivityIndicator size={30} color="gray" />
        : <MovieDetails movie={movieFull!} cast={cast}/>
      }

      <View style={ styles.backButton }>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon
            color="white"
            name="chevron-back-outline"
            size={50}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.7,
    borderBottomEndRadius: IMAGE_RADIUS,
    borderBottomStartRadius: IMAGE_RADIUS,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 7
  },
  posterImage: {
    flex: 1
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  backButton: {
    position: "absolute",
    elevation: 9,
    top: 20,
    left: 4
  }
})