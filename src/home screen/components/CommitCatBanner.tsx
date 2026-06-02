import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Text } from './Text';

export const CommitCatBanner: React.FC = () => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.bannerContainer,
        pressed && styles.pressedState
      ]}
    >
      {/* 1. Cat Mascot Circle Wrapper */}
      <View style={styles.avatarWrapper}>
        <Svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          {/* Background circle of avatar */}
          <Circle cx="50" cy="50" r="48" fill="#1C2128" stroke="#FF8C00" strokeWidth="2.5" />
          
          {/* Orange Cat Ears */}
          <Path d="M28 38 L16 15 L40 28 Z" fill="#FF8C00" />
          <Path d="M72 38 L84 15 L60 28 Z" fill="#FF8C00" />
          
          {/* Cat Inner Ears (Pinkish-Orange) */}
          <Path d="M26 35 L19 20 L33 29 Z" fill="#FFAB73" />
          <Path d="M74 35 L81 20 L67 29 Z" fill="#FFAB73" />
          
          {/* Cat Face/Head Base */}
          <Path d="M18 42 C18 68, 82 68, 82 42 C82 32, 18 32, 18 42 Z" fill="#FF9E4F" />
          
          {/* Cheeks Highlight */}
          <Circle cx="30" cy="56" r="8" fill="#FF8C00" opacity="0.6" />
          <Circle cx="70" cy="56" r="8" fill="#FF8C00" opacity="0.6" />
          
          {/* Cat Eyes (Glowing Neon Green/Cyan) */}
          <Circle cx="38" cy="46" r="6" fill="#39D353" />
          <Circle cx="62" cy="46" r="6" fill="#39D353" />
          {/* Slit Pupils */}
          <Path d="M38 41 L38 51" stroke="#0D1117" strokeWidth="2" strokeLinecap="round" />
          <Path d="M62 41 L62 51" stroke="#0D1117" strokeWidth="2" strokeLinecap="round" />
          
          {/* Cat Snout (Cream White) */}
          <Path d="M42 56 C42 63, 58 63, 58 56 C58 52, 42 52, 42 56 Z" fill="#FFF0E0" />
          
          {/* Nose (Subtle dark triangle) */}
          <Path d="M48 54 L52 54 L50 56 Z" fill="#2E333A" />
          
          {/* Mouth (W-shape curve) */}
          <Path d="M46 57 C48 59, 50 59, 50 57 C50 59, 52 59, 54 57" stroke="#2E333A" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Whiskers */}
          <Path d="M22 54 L10 52" stroke="#2E333A" strokeWidth="1.5" strokeLinecap="round" />
          <Path d="M22 58 L8 58" stroke="#2E333A" strokeWidth="1.5" strokeLinecap="round" />
          <Path d="M78 54 L90 52" stroke="#2E333A" strokeWidth="1.5" strokeLinecap="round" />
          <Path d="M78 58 L92 58" stroke="#2E333A" strokeWidth="1.5" strokeLinecap="round" />
        </Svg>
        {/* Glowing fire status dot */}
        <View style={styles.badgeIndicator} />
      </View>

      {/* 2. Chat Bubble Dialogue Text */}
      <View style={styles.dialogueBubble}>
        <Text style={styles.bannerText}>
          <Text style={styles.mascotName}>Commit Cat: </Text>
          <Text style={styles.quoteText}>
            "Looking sharp today! 1 commit away from maintaining your fire streak!"
          </Text>
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117', // Extremely sleek, matches standard dark modes
    borderWidth: 1.5,
    borderColor: '#30363D', // Premium subtle grey border
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '94%',
    alignSelf: 'center',
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  pressedState: {
    opacity: 0.85,
    borderColor: '#FF8C00', // Gold highlight on press
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
  badgeIndicator: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF8C00', // Active fire orange indicator
    borderWidth: 1.5,
    borderColor: '#0D1117',
  },
  dialogueBubble: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 13.5,
    lineHeight: 18,
  },
  mascotName: {
    fontFamily: 'JetBrainsMono-ExtraBold', // Technical programmer monospace font
    color: '#39D353', // Glow green
  },
  quoteText: {
    color: '#F0F6FC', // Bright off-white
    fontWeight: '500',
  },
});
