import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

  const { FadeIn, FadeOut, opacity } = useFade(300)

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.fadeItem, opacity }} />

      <Button
        title='FadeIn'
        onPress={FadeIn}
      />
      <Button
        title='FadeOut'
        onPress={FadeOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray"
  },
  fadeItem: {
    width: 240,
    height: 240,
    backgroundColor: "tomato",
    borderColor: "white",
    borderWidth: 4,
    marginBottom: 10
  }
})