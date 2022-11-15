import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {quality: "high"})

  let primary
  let secondary
  
  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant || "white"
      secondary = colors.average || "white"
      break
    case 'ios':
      // iOS result properties
      primary = colors.primary
      secondary = colors.secondary
      break
    default:
      throw new Error('Unexpected platform key')
  }

  return [primary, secondary]
}