import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Text } from '../../setup screens/components/Text';

interface Badge {
  id: string;
  name: string;
  subtext: string;
  rarity: 'COMMON' | 'RARE' | 'EPIC';
  rarityColor: string;
  rarityBg: string;
  rarityBorder: string;
  cardBorder: string;
  icon: () => React.ReactNode;
}

const recentBadges: Badge[] = [
  {
    id: '1',
    name: 'Warmup Cat',
    subtext: 'Reach 3-day streak',
    rarity: 'COMMON',
    rarityColor: '#39D353', // Green
    rarityBg: 'rgba(57, 211, 83, 0.08)',
    rarityBorder: 'rgba(57, 211, 83, 0.25)',
    cardBorder: 'rgba(57, 211, 83, 0.28)', // Soft green outline border
    icon: () => (
      <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2c0 0-4 4.5-4 7.5a4 4 0 0 0 8 0c0-3-4-7.5-4-7.5z"
          stroke="#39D353"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 6c0 0-2 2.25-2 3.75a2 2 0 0 0 4 0c0-1.5-2-3.75-2-3.75z"
          stroke="#39D353"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  {
    id: '2',
    name: 'Fiery Feline',
    subtext: 'Reach 7-day streak',
    rarity: 'RARE',
    rarityColor: '#388BFD', // Blue
    rarityBg: 'rgba(56, 139, 253, 0.08)',
    rarityBorder: 'rgba(56, 139, 253, 0.25)',
    cardBorder: 'rgba(56, 139, 253, 0.3)', // Soft blue outline border
    icon: () => (
      <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <Path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="#388BFD"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  {
    id: '3',
    name: 'Git Master',
    subtext: 'Over 100 commits',
    rarity: 'EPIC',
    rarityColor: '#BC8CFF', // Epic Purple
    rarityBg: 'rgba(188, 140, 255, 0.08)',
    rarityBorder: 'rgba(188, 140, 255, 0.25)',
    cardBorder: 'rgba(188, 140, 255, 0.28)', // Soft purple outline border
    icon: () => (
      <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <Path d="M3 12h6M15 12h6" stroke="#BC8CFF" strokeWidth="2.2" strokeLinecap="round" />
        <Circle cx="12" cy="12" r="3" stroke="#BC8CFF" strokeWidth="2.2" />
      </Svg>
    ),
  },
];

export const RecentBadges: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* 1. Header Row */}
      <View style={styles.sectionHeader}>
        <View style={styles.titleWrapper}>
          <Text style={styles.emojiPrefix}>🏆</Text>
          <Text style={styles.sectionTitle}>RECENT BADGES</Text>
        </View>
        <Pressable style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all →</Text>
        </Pressable>
      </View>

      {/* 2. Horizontal Cards Deck */}
      <View style={styles.badgesDeck}>
        {recentBadges.map((badge) => (
          <Pressable
            key={badge.id}
            style={[styles.badgeCard, { borderColor: badge.cardBorder }]}
          >
            {/* Rarity Pill Container */}
            <View
              style={[
                styles.rarityPill,
                { backgroundColor: badge.rarityBg, borderColor: badge.rarityBorder },
              ]}
            >
              <Text style={[styles.rarityText, { color: badge.rarityColor }]}>
                {badge.rarity}
              </Text>
            </View>

            {/* Circular Dark Icon Sleeve */}
            <View style={styles.iconSleeve}>{badge.icon()}</View>

            {/* Badge Title & Action Goal Subtext */}
            <View style={styles.textContainer}>
              <Text style={styles.badgeName}>{badge.name}</Text>
              <Text style={styles.badgeSubtext} numberOfLines={2}>
                {badge.subtext}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: '#000000',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
    paddingHorizontal: 2,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiPrefix: {
    fontSize: 14,
    marginRight: 6,
  },
  sectionTitle: {
    color: '#8B949E',
    fontSize: 12.5,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  viewAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  viewAllText: {
    color: '#39D353',
    fontSize: 13,
    fontWeight: '700',
  },
  badgesDeck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  badgeCard: {
    flex: 1,
    backgroundColor: '#161B22', // GitHub deep dark card background
    borderRadius: 24,
    borderWidth: 1.5,
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  rarityPill: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rarityText: {
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  iconSleeve: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0D1117', // Even darker background for icon sleeve contrast
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#21262D',
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 4,
  },
  badgeName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: 0.1,
  },
  badgeSubtext: {
    color: '#8B949E',
    fontSize: 10.5,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 14,
  },
});
