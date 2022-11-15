import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/CreditsInterface'
import { MovieDetail } from '../interfaces/MovieInterface'
import { ActorCard } from './ActorCard'

interface Props {
  movie: MovieDetail,
  cast: Cast[]
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>

        <View style={{ flexDirection: "row" }}>
          <Icon name='star-outline' color='gray' size={16} />
          <Text>{movie.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movie.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text style={styles.detailsTitle}>
          Sinopsis
        </Text>
        <Text style={{ fontSize: 16 }}>
          {movie.overview}
        </Text>
        <Text style={styles.detailsTitle}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 16 }}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}
        </Text>

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.detailsTitle}>
            Actores
          </Text>
        </View>

      </View>

      <FlatList
        data={cast}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
        horizontal={true}
        style={{ marginBottom: 20 }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  detailsTitle: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.9
  }
})