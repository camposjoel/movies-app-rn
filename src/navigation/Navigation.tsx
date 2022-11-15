import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailScreen } from '../screens/DetailScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { Movie } from '../interfaces/MovieInterface'

export type RootStackParams = {
  Home: undefined;
  Detail: Movie;
}

const Stack = createStackNavigator<RootStackParams>()

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}