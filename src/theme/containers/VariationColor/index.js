import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { Icons } from '~/Theme/Components'

const VariationColor = ({ isSelect, color, disabled, style }) => {
  const theme = useTheme()
  const borderColor = isSelect ? theme.colors.primary : theme.colors.grey1
  return (
    <View
      style={[
        styles.box,
        {
          borderWidth: isSelect ? 2 : 1,
          borderColor: borderColor,
        },
        color && {
          backgroundColor: color,
        },
        disabled && styles.disabled,
        style && style,
      ]}
    >
      {isSelect && color && <Icons name="check" type="feather" color="white" size={20} />}
    </View>
  )
}
const styles = StyleSheet.create({
  box: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
})

VariationColor.defaultProps = {
  isSelect: false,
  disabled: false,
}

export default VariationColor
