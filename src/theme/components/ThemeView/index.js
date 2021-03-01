import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'

const ThemeView = ({ colorSecondary, isFullView, style, ...restProps }) => {
	const theme = useTheme()
	return (
		<View
			{...restProps}
			style={StyleSheet.flatten([
				{
					backgroundColor: colorSecondary ? theme.colors.bgColorSecondary : theme.colors.bgColor,
				},
				isFullView && { flex: 1 },
				style && style,
			])}
		/>
	)
}

export default ThemeView
