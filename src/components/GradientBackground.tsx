import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import { useFade } from '../hooks/useFade'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

  const { colors, prevColors, setPreviousColors } = useContext(GradientContext)
  const { opacity, FadeIn, FadeOut } = useFade(300)
  useEffect(() => {
    FadeIn(() => {
      setPreviousColors(colors)
      FadeOut()
    })
  }, [colors])

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y:0.6 }}
        colors={[prevColors.primary, prevColors.secondary, "white"]}
        style={{...StyleSheet.absoluteFillObject}}
      />
      <Animated.View
        style={{...StyleSheet.absoluteFillObject, opacity}}
      >
        <LinearGradient
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y:0.6 }}
          colors={[colors.primary, colors.secondary, "white"]}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </Animated.View>
      {children}
    </View>
  )
}