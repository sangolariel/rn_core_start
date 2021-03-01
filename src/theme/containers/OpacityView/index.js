import React from 'react'
import { StyleSheet, View } from 'react-native'
import { black } from '~/Theme/Configs/colors'

const OpacityView = (props) => {
  const { opacity, bgColor, children, style } = props
  return (
    <View
      style={[
        styles.container,
        style && style,
        {
          backgroundColor: 'transparent',
        },
      ]}
    >
      <View
        style={[
          styles.boxOpacity,
          {
            opacity: opacity,
            backgroundColor: bgColor,
          },
        ]}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  boxOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

OpacityView.defaultProps = {
  opacity: 0.5,
  bgColor: black,
}

export default OpacityView
