import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { useTheme } from 'react-native-paper'
import { borderRadius } from '~/Theme/Configs/spacing'

const VariationImage = ({ isSelect, image, size, disabled }) => {
  const theme = useTheme()
  return (
    <ImageBackground
      source={{ uri: image }}
      style={[
        styles.image,
        {
          width: size,
          height: size,
        },
        disabled && styles.disabled,
      ]}
    >
      <View
        style={[
          styles.viewBorder,
          {
            borderColor: isSelect ? theme.colors.primary : 'transparent',
          },
        ]}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: borderRadius.base,
    overflow: 'hidden',
  },
  disabled: {
    opacity: 0.4,
  },
  viewBorder: {
    borderRadius: borderRadius.base,
    width: '100%',
    height: '100%',
    borderWidth: 2,
  },
})
VariationImage.defaultProps = {
  isSelect: false,
  size: 38,
  image: require('ASSETS/img/default.png'),
  disabled: false,
}

export default VariationImage
