import React, { createContext, useState } from 'react'

interface ImageColors {
  primary: string,
  secondary: string
}

interface ContextProps {
  colors: ImageColors,
  prevColors: ImageColors,
  setCurrentColors: (colors: ImageColors) => void
  setPreviousColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps) // ToDo: definir tipo

export const GradientProvider = ({ children }: any) => {

  const [colors, setColors] = useState<ImageColors>({
    primary: 'tomato',
    secondary: 'salmon'
  })

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const setCurrentColors = (colors: ImageColors) => {
    setColors(colors)
  }

  const setPreviousColors = (colors: ImageColors) => {
    setPrevColors(colors)
  }

  return (
    <GradientContext.Provider value={{
      colors,
      prevColors,
      setCurrentColors,
      setPreviousColors
    }}>
      {children}
    </GradientContext.Provider>
  )
}