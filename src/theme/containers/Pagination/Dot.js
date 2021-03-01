import * as React from 'react';
import { View } from 'react-native';
import { grey3 } from '../../Configs/colors';


const Dot = (props) => {
  const { size, color, radius, Component, style } = props;
  const borderRadius = radius ? radius : typeof size === 'number' ? size / 2 : 0;
  return (
    <Component
      style={[
        {
          height: size,
          width: size,
          backgroundColor: color,
          borderRadius: borderRadius,
        },
        style && style,
      ]}
    />
  );
};

Dot.defaultProps = {
  size: 7,
  color: grey3,
  Component: View,
};
export default Dot;
