import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/CreditsInterface'

interface Props {
  actor: Cast,
}

export const ActorCard = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
      {
        actor.profile_path &&
        <Image
          source={{ uri }}
          style={{ width: 60, height: 60, borderRadius: 12 }}
        />
      }

      <View style={{ flexDirection: 'column', marginLeft: 8 }}>
        <Text style={{ color: 'black', opacity: 0.9, fontSize: 18, fontWeight: 'bold' }}>
          {actor.name}
        </Text>
        <Text style={{ color: 'black', fontSize: 18, opacity: 0.6 }}>
          {actor.character}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    borderColor: "#DDD",
    borderWidth: 1,
  }
})