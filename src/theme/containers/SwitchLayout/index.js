import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Container } from '~/Theme/Container'

import { Text } from '~/Theme/Components'

import { margin, padding } from '~/Theme/Configs/spacing'
import { grey1 } from '~/Theme/Configs/colors'

import { Switch } from '~/Theme/Svg/product'

const SwitchLayout = ({ IconSwitch, style, component, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={StyleSheet.flatten([styles.touchSwitch, style])}>
      <IconSwitch />
      {component && component}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchSwitch: {
    flexDirection: 'row',
    paddingHorizontal: padding.small,
  },
})

SwitchLayout.defaultProps = {
  IconSwitch: Switch,
  component: null,
  style: {},
  onPress: () => { }
}

export default SwitchLayout
