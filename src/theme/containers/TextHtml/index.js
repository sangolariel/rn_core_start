import React from 'react'
import HTMLView from 'react-native-htmlview'
import merge from 'lodash/merge'
import fonts from '~/Theme/Configs/fonts'
import { sizes, lineHeights } from '~/Theme/Configs/dimension'
import { useTheme } from "react-native-paper"

const TextHtml = ({ value, style, ...rest }) => {
  const theme = useTheme()
  const valueHtml = `<div>${value && typeof value === 'string' ? value.replace(/[\n\r]+/g, '') : ''
    }</div>`

  return (
    <HTMLView {...rest} value={valueHtml} stylesheet={merge(styles(theme), style)} />
  )
};

const styles = theme => ({
  div: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: theme.colors.primary,
    textAlign: 'left',
  },
  span: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: theme.colors.primary,
    textAlign: 'left',
  },
  p: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: theme.colors.primary,
    textAlign: 'left',
  },
  a: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: '#96588a',
    textAlign: 'left',
  },
  b: {
    ...fonts.bold,
  },
  strong: {
    ...fonts.bold,
  },
});

TextHtml.defaultProps = {
  style: {},
};

export default TextHtml;
