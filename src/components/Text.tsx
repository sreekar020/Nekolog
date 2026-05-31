import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  const flatStyle = StyleSheet.flatten(style) || {};
  
  // Map standard fontWeights to our custom loaded Roboto font families dynamically
  let fontFamily = 'Roboto-Regular';
  
  if (flatStyle.fontWeight === '500') {
    fontFamily = 'Roboto-Medium';
  } else if (flatStyle.fontWeight === '700' || flatStyle.fontWeight === 'bold') {
    fontFamily = 'Roboto-Bold';
  } else if (flatStyle.fontWeight === '900') {
    fontFamily = 'Roboto-Black';
  }

  return (
    <RNText
      {...props}
      style={[
        style,
        { fontFamily } // Dynamic injection of global Roboto typography
      ]}
    />
  );
};
