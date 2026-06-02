import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  const flatStyle = StyleSheet.flatten(style) || {};

  // Choose Monaspace Neon font weight based on design style parameters
  let fontFamily = 'MonaspaceNeon-Regular';
  if (
    flatStyle.fontWeight === 'bold' ||
    flatStyle.fontWeight === '500' ||
    flatStyle.fontWeight === '600' ||
    flatStyle.fontWeight === '700' ||
    flatStyle.fontWeight === '800' ||
    flatStyle.fontWeight === '900' ||
    flatStyle.fontFamily === 'JetBrainsMono-ExtraBold'
  ) {
    fontFamily = 'MonaspaceNeon-Bold';
  }

  return (
    <RNText
      {...props}
      style={[
        style,
        { fontFamily }, // Override font family for the whole app to use monospace Monaspace Neon
      ]}
    />
  );
};
