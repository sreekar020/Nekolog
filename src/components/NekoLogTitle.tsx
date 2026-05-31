import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';

interface NekoLogTitleProps {
  fontSize?: number;
  letterSpacing?: number;
}

export const NekoLogTitle: React.FC<NekoLogTitleProps> = ({ fontSize = 34, letterSpacing = 4 }) => {
  return (
    <View style={styles.logoWrapper}>
      <Text style={[styles.logoText, { fontSize, letterSpacing }]}>
        Neko<Text style={styles.logoTextIlluminated}>Log</Text>
      </Text>
      {/* Dynamic neon green glow bubble perfectly positioned behind "Log" */}
      <View style={[styles.logoGlow, { width: fontSize * 2.2, height: fontSize * 0.9, borderRadius: fontSize * 0.45 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 8,
  },
  logoText: {
    fontWeight: '900',
    color: '#FFFFFF',
  },
  logoTextIlluminated: {
    color: '#66E08A',
    textShadowColor: 'rgba(57, 211, 83, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  logoGlow: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#39D353',
    opacity: 0.12,
    filter: 'blur(10px)',
    zIndex: -1,
  },
});
