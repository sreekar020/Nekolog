import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../../setup screens/components/Text';
import { useAppStore } from '../../store/useAppStore';
export const ProfileHeader: React.FC = () => {
  const username = useAppStore((state) => state.username);
  const level = useAppStore((state) => state.level);
  const streakDays = useAppStore((state) => state.streakDays);
  const xp = useAppStore((state) => state.xp);
  return (
    <View style={styles.headerContainer}>
      {/* 1. Avatar Section with Green Border & Level Badge */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarBorder}>
          <Image
            source={require('../../../assets/images/avatar_octocat.png')}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>
        
        {/* Neon Green Level Badge Bubble overlapping bottom-right of avatar */}
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{level}</Text>
        </View>
      </View>

      {/* 2. Username Header */}
      <Text style={styles.usernameText}>@{username}</Text>

      {/* 3. Title Pill, Streak & XP Row */}
      <View style={styles.statsBadgeRow}>
        {/* Technical Title Pill */}
        <View style={styles.titlePill}>
          <Text style={styles.titlePillText}>🔥 Senior Architect</Text>
        </View>
        
        {/* Streak & XP info */}
        <Text style={styles.streakText}>{streakDays} Day Streak</Text>
        <Text style={styles.bulletSeparator}>•</Text>
        <Text style={styles.xpText}>{xp} XP</Text>
      </View>

      {/* 4. Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Building futuristic developer tooling & multi-agent developer workflow systems.
        </Text>
      </View>

      {/* 5. Followers & Following Row */}
      <View style={styles.networkRow}>
        <Text style={styles.networkLabel}>
          Followers: <Text style={styles.networkValue}>1420</Text>
        </Text>
        <View style={styles.networkSeparator} />
        <Text style={styles.networkLabel}>
          Following: <Text style={styles.networkValue}>380</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarBorder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2.5,
    borderColor: '#39D353', // Bright neon green border
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#39D353', // Matching neon green background
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    minWidth: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000', // Blends seamlessly into black background
  },
  levelText: {
    color: '#000000', // Contrast dark text on neon background
    fontSize: 11,
    fontWeight: '900',
  },
  usernameText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  statsBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  titlePill: {
    backgroundColor: 'rgba(57, 211, 83, 0.15)', // Highly translucent premium green
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4.5,
    borderWidth: 1,
    borderColor: 'rgba(57, 211, 83, 0.3)',
    marginRight: 12,
  },
  titlePillText: {
    color: '#39D353', // Bright vibrant green matching active states
    fontSize: 12,
    fontWeight: '700',
  },
  streakText: {
    color: '#8B949E', // Subtle gray
    fontSize: 12.5,
    fontWeight: '500',
  },
  bulletSeparator: {
    color: '#8B949E',
    marginHorizontal: 8,
    fontSize: 12,
  },
  xpText: {
    color: '#8B949E',
    fontSize: 12.5,
    fontWeight: '500',
  },
  bioContainer: {
    width: '90%',
    marginBottom: 18,
  },
  bioText: {
    color: '#8B949E',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    fontWeight: '500',
  },
  networkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  networkLabel: {
    color: '#8B949E',
    fontSize: 13.5,
    fontWeight: '500',
  },
  networkValue: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  networkSeparator: {
    width: 16,
  },
});
