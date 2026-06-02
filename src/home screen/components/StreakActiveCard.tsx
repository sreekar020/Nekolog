import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { Text } from './Text';

export const StreakActiveCard: React.FC = () => {
  // Highly detailed mathematically symmetrical SVG Snowflake component for Streak Freezes
  const SnowflakeIcon = ({ active }: { active: boolean }) => {
    const color = active ? '#58A6FF' : '#21262D'; // sky blue vs dark-grey muted
    const opacity = active ? 1.0 : 0.3; // subtle opacity for inactive flake

    return (
      <Svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        style={[styles.snowflakeSpacing, { opacity }]}
      >
        {/* Central Hub Circle */}
        <Circle cx="12" cy="12" r="2.2" stroke={color} strokeWidth="1.8" />
        
        {/* 6 Symmetrical Rotated Arms */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <G key={angle} transform={`rotate(${angle}, 12, 12)`}>
            {/* Main Spoke Line */}
            <Path d="M12 12V3.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
            {/* Outer tip chevron */}
            <Path d="M9.5 6L12 3.5L14.5 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Inner branch chevron */}
            <Path d="M10.5 8.5L12 7L13.5 8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </G>
        ))}
      </Svg>
    );
  };

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.pressedState
      ]}
    >
      {/* Left side info block */}
      <View style={styles.leftColumn}>
        {/* Streak Active Title Row with custom Flame SVG */}
        <View style={styles.titleRow}>
          <Svg width="22" height="24" viewBox="0 0 24 24" fill="none" style={styles.flameIcon}>
            <Path 
              d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1.5-3-1.5 1.5-2.5 3.25-2.5 5.5a5 5 0 1010 0c0-4.5-4-8.5-5-9.5-.75.75-3.5 4.5-3.5 9.5z" 
              stroke="#FF8C00" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </Svg>
          <Text style={styles.titleText}>STREAK ACTIVE</Text>
        </View>

        {/* Large Days Count (days tag is grey) */}
        <Text style={styles.daysText}>
          6 <Text style={styles.daysLabel}>days</Text>
        </Text>

        {/* Motivation subtext */}
        <Text style={styles.subText}>Keep pushing to secure level 13!</Text>

        {/* Streak Freezes indicator with clean divider border above it */}
        <View style={styles.freezeRow}>
          <Text style={styles.freezeLabel}>Streak Freezes: </Text>
          <SnowflakeIcon active={true} />
          <SnowflakeIcon active={true} />
          <SnowflakeIcon active={false} />
        </View>
      </View>

      {/* Right side circular progress arc */}
      <View style={styles.rightColumn}>
        <View style={styles.circleWrapper}>
          <Svg width="90" height="90" viewBox="0 0 100 100">
            {/* Background Track Circle */}
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="#21262D"
              strokeWidth="9"
              fill="transparent"
            />
            {/* Active Orange Arc Circle (~75% completed) with gap at bottom-left */}
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="#FF8C00"
              strokeWidth="9"
              strokeDasharray="251.2" // 2 * PI * r (2 * 3.14159 * 40)
              strokeDashoffset="62.8" // 25% empty gap = 251.2 * 0.25
              strokeLinecap="round"
              fill="transparent"
              transform="rotate(-225, 50, 50)" // Rotates so gap is positioned perfectly at bottom-left
            />
          </Svg>

          {/* Centered Contents Inside the Progress Ring */}
          <View style={styles.centerContainer}>
            {/* Outline Lightning Bolt SVG Icon in Orange */}
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.boltIcon}>
              <Path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                stroke="#FF8C00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            {/* Monospace Fire Text */}
            <Text style={styles.fireLabel}>FIRE</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#161B22',
    borderWidth: 1.5,
    borderColor: '#30363D',
    borderRadius: 20,
    padding: 16,
    width: '94%',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  pressedState: {
    opacity: 0.95,
    borderColor: '#30363D',
  },
  leftColumn: {
    flex: 1.25,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flameIcon: {
    marginRight: 6,
  },
  titleText: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 12,
    color: '#8B949E',
    letterSpacing: 0.5,
  },
  daysText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#F0F6FC',
    lineHeight: 38,
  },
  daysLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#8B949E',
  },
  subText: {
    color: '#8B949E',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 6,
    lineHeight: 16,
  },
  freezeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1.2,
    borderTopColor: 'rgba(48, 54, 61, 0.4)', // subtle dark grey divider
    paddingTop: 10,
    marginTop: 10,
    width: '95%',
  },
  freezeLabel: {
    color: '#8B949E',
    fontSize: 11.5,
    fontWeight: '600',
  },
  snowflakeSpacing: {
    marginHorizontal: 3,
  },
  rightColumn: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleWrapper: {
    position: 'relative',
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  boltIcon: {
    marginBottom: 2,
  },
  fireLabel: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 10,
    color: '#FF8C00',
    letterSpacing: 1,
    marginTop: 2,
    textAlign: 'center',
  },
});
export default StreakActiveCard;
