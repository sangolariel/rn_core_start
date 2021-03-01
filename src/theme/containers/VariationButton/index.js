import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { Text } from '~/Theme/Components'

import { margin, borderRadius } from '~/Theme/Configs/spacing'

const VariationButton = ({ title, isSelect, disabled, style }) => {
  const theme = useTheme()
  const borderColor = !isSelect ? 'transparent' : theme.colors.primary
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: !isSelect ? theme.colors.border : theme.colors.primary,
        },
        disabled && styles.disabled,
        style && style,
      ]}>
      <View
        style={[
          styles.content,
          {
            borderColor,
          },
        ]}>
        <Text medium style={styles.text}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.base,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.4,
  },
  content: {
    borderRadius: borderRadius.base - 1,
    borderWidth: 1,
  },
  text: {
    lineHeight: 18,
    marginVertical: margin.small,
    marginHorizontal: margin.base,
  },
})

VariationButton.defaultProps = {
  isSelect: false,
  disabled: false,
}

export default VariationButton
