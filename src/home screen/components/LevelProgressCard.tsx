import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from './Text';

export const LevelProgressCard: React.FC = () => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.pressedState
      ]}
    >
      {/* 1. Header Row (Title, Daily Capsule, XP Ratio) */}
      <View style={styles.headerRow}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>LVL PROGRESS</Text>
          
          {/* Solid Green XP Capsule Pill */}
          <View style={styles.xpCapsule}>
            <Text style={styles.xpCapsuleText}>+250 XP Today</Text>
          </View>
        </View>

        {/* Ratio XP */}
        <Text style={styles.ratioText}>
          <Text style={styles.boldXp}>2450</Text>
          <Text style={styles.mutedXp}> / 3000 XP</Text>
        </Text>
      </View>

      {/* 2. Horizontal Row: Progress Bar Track (Left) + Star Badge (Right) */}
      <View style={styles.progressRow}>
        {/* Thicker Pill-shaped Progress Track */}
        <View style={styles.trackContainer}>
          <View style={styles.trackBackground} />
          {/* Subtle filled portion (81% width) */}
          <View style={[styles.trackFilled, { width: '81%' }]} />
        </View>

        {/* Right Star Badge Capsule (☆ 81%) */}
        <View style={styles.starBadge}>
          {/* Outline Star SVG */}
          <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={styles.starIcon}>
            <Path 
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
              stroke="#39D353" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </Svg>
          <Text style={styles.starBadgeText}>81%</Text>
        </View>
      </View>

      {/* 3. Next Level Reward Arrow (Borderless) */}
      <View style={styles.rewardRow}>
        <Text style={styles.rewardText}>Next Level reward: Premium Cyber Theme</Text>
        <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <Path 
            d="M9 5l7 7-7 7" 
            stroke="#8B949E" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'JetBrainsMono-ExtraBold', // monospaced brand uppercase
    fontSize: 12,
    color: '#8B949E',
    letterSpacing: 0.5,
  },
  xpCapsule: {
    marginLeft: 10,
    backgroundColor: 'rgba(57, 211, 83, 0.12)', // solid-looking dark green tint
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  xpCapsuleText: {
    color: '#39D353',
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
  ratioText: {
    fontSize: 13,
  },
  boldXp: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    color: '#F0F6FC',
  },
  mutedXp: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    color: '#8B949E',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  trackContainer: {
    flex: 1,
    height: 14, // Thicker pill track
    position: 'relative',
    justifyContent: 'center',
    marginRight: 12,
  },
  trackBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 12,
    backgroundColor: '#0D1117',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#21262D',
  },
  trackFilled: {
    height: 12,
    backgroundColor: 'rgba(23, 112, 236, 1)', // Subtle dark filled part matching track outline/fill standard
    borderRadius: 6,
  },
  starBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117', // Dark capsule backdrop
    borderWidth: 1.2,
    borderColor: '#30363D', // Muted outline
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4.5,
  },
  starIcon: {
    marginRight: 4,
  },
  starBadgeText: {
    color: '#39D353', // Glow green text
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
  rewardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    paddingTop: 4,
  },
  rewardText: {
    color: '#8B949E',
    fontSize: 13.5,
    fontWeight: '500',
  },
});
export default LevelProgressCard;
