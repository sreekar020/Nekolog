import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from './Text';

interface GlobalProfileCardProps {
  username?: string;
  level?: number;
  streakDays?: number;
  xp?: number;
  onNotificationPress?: () => void;
  onCardPress?: () => void;
}

export const GlobalProfileCard: React.FC<GlobalProfileCardProps> = ({
  username = 'octocat',
  level = 12,
  streakDays = 6,
  xp = 2450,
  onNotificationPress,
  onCardPress,
}) => {
  return (
    <Pressable style={styles.cardContainer} onPress={onCardPress}>
      {/* 1. Avatar Section with Absolute Badges */}
      <View style={styles.avatarWrapper}>
        <Image
          source={require('../../../assets/images/avatar_octocat.png')}
          style={styles.avatarImage}
          resizeMode="cover"
        />
        {/* Green Online Status Dot */}
        <View style={styles.onlineBadge} />
        
        {/* Blue Level Badge */}
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{level}</Text>
        </View>
      </View>

      {/* 2. User Info & Stats Section */}
      <View style={styles.infoSection}>
        {/* Top Row: Username + Verified Icon + PRO tag */}
        <View style={styles.nameRow}>
          <Text style={styles.usernameText}>@{username}</Text>
          
          {/* Verified Badge Icon (Blue Circle with Checkmark) */}
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={styles.verifiedIcon}>
            <Path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#58A6FF"
            />
          </Svg>

          {/* PRO Tag */}
          <View style={styles.proTag}>
            <Text style={styles.proText}>PRO</Text>
          </View>
        </View>

        {/* Bottom Row: Streak & Daily Activity Note */}
        <View style={styles.statsRow}>
          <Text style={styles.streakText}>🔥 {streakDays}d</Text>
          <Text style={styles.streakSeparator}> • </Text>
          <Text style={styles.activityText}>coding daily</Text>
        </View>
      </View>

      {/* 3. XP Capsule Pill */}
      <View style={styles.xpPill}>
        <Text style={styles.xpText}>⚡ {xp.toLocaleString()} XP</Text>
      </View>

      {/* 4. Notification Bell Outline Button */}
      <Pressable style={styles.bellButton} onPress={onNotificationPress}>
        <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <Path
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0"
            stroke="#8B949E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        {/* Tiny Green Notification Active Dot */}
        <View style={styles.bellBadge} />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161B22', // Deep dark card container
    borderWidth: 1.5,
    borderColor: '#30363D', // Premium subtle grey border
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 14,
    width: '94%',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  onlineBadge: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: '#39D353',
    borderWidth: 2,
    borderColor: '#161B22', // Blends seamlessly with card background
  },
  levelBadge: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    width: 19,
    height: 19,
    borderRadius: 9.5,
    backgroundColor: '#388BFD', // Bright profile level badge
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#161B22',
  },
  levelText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    textAlign: 'center',
  },
  infoSection: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  usernameText: {
    color: '#F0F6FC',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.2,
  },
  verifiedIcon: {
    marginLeft: 4,
    marginTop: 1,
  },
  proTag: {
    marginLeft: 6,
    backgroundColor: 'rgba(57, 211, 83, 0.12)', // Subtle green background
    borderWidth: 1,
    borderColor: 'rgba(57, 211, 83, 0.3)',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
  },
  proText: {
    color: '#39D353',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    color: '#FF8C00', // Orange-fire streak color
    fontSize: 12.5,
    fontWeight: '700',
  },
  streakSeparator: {
    color: '#8B949E',
    fontSize: 12,
  },
  activityText: {
    color: '#8B949E',
    fontFamily: 'JetBrainsMono-ExtraBold', // Technical programmer monospace font
    fontSize: 11,
    letterSpacing: -0.2,
  },
  xpPill: {
    backgroundColor: 'rgba(255, 140, 0, 0.08)', // Soft orange capsule
    borderWidth: 1,
    borderColor: 'rgba(255, 140, 0, 0.35)', // Golden-orange border
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xpText: {
    color: '#FF8C00', // Gold/orange text matching streaking and energy
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  bellButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#30363D',
    backgroundColor: 'rgba(22, 27, 34, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bellBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#39D353', // Small green dot indicating active notifications
  },
});
