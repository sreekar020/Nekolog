import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Text } from './Text';

interface QuestsPreviewProps {
  onViewAll?: () => void;
}

export const QuestsPreview: React.FC<QuestsPreviewProps> = ({ onViewAll }) => {
  return (
    <View style={styles.sectionContainer}>
      {/* 1. Header Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>TODAY'S QUESTS PREVIEW</Text>
        
        {/* Purple-bordered capsule badge containing View All > */}
        <Pressable 
          onPress={onViewAll}
          style={({ pressed }) => [
            styles.viewAllBadge,
            pressed && styles.viewAllPressed
          ]}
        >
          <Text style={styles.viewAllText}>View all &gt;</Text>
        </Pressable>
      </View>

      {/* 2. Quest 1: Make 3 Commits (In Progress - 66%) */}
      <Pressable style={styles.questCard}>
        <View style={styles.questHeader}>
          {/* Left: Commit node circle */}
          <View style={styles.iconCircle}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M6 12h12M12 6a6 6 0 100 12 6 6 0 000-12z"
                stroke="#8B949E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </Svg>
          </View>

          {/* Middle Info */}
          <View style={styles.infoWrapper}>
            <Text style={styles.questTitle}>Make 3 Commits</Text>
            <Text style={styles.progressText}>2 / 3 done</Text>
          </View>

          {/* Right XP Capsule */}
          <View style={styles.rewardCapsule}>
            <Text style={styles.rewardText}>+120 XP</Text>
          </View>
        </View>

        {/* Bottom Progress Bar: Blue, 66% filled */}
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: '66.6%', backgroundColor: '#388BFD' }]} />
          </View>
        </View>
      </Pressable>

      {/* 3. Quest 2: Close 1 Issue (Completed - 100%) */}
      <Pressable style={[styles.questCard, styles.completedCard]}>
        <View style={styles.questHeader}>
          {/* Left: Green check circle */}
          <View style={[styles.iconCircle, styles.completedIconCircle]}>
            <Svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <Path
                d="M20 6L9 17l-5-5"
                stroke="#39D353"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>

          {/* Middle Info */}
          <View style={styles.infoWrapper}>
            <Text style={[styles.questTitle, styles.completedQuestTitle]}>Close 1 Issue</Text>
            <Text style={styles.progressText}>1 / 1 done</Text>
          </View>

          {/* Right XP Capsule */}
          <View style={[styles.rewardCapsule, styles.completedRewardCapsule]}>
            <Text style={[styles.rewardText, styles.completedRewardText]}>+150 XP</Text>
          </View>
        </View>

        {/* Bottom Progress Bar: Green, 100% filled, check badge at the end */}
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: '100%', backgroundColor: '#39D353' }]} />
            
            {/* Round check icon overlapping the end of the completed bar */}
            <View style={styles.checkBadge}>
              <Svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M20 6L9 17l-5-5"
                  stroke="#161B22"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '94%',
    alignSelf: 'center',
    marginVertical: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 12.5,
    color: '#8B949E',
    letterSpacing: 0.8,
  },
  viewAllBadge: {
    borderWidth: 1.2,
    borderColor: '#BC8CFF', // Purple capsule border
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3.5,
  },
  viewAllPressed: {
    opacity: 0.8,
    backgroundColor: 'rgba(188, 140, 255, 0.1)',
  },
  viewAllText: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 11,
    color: '#39D353', // Glow green text
  },
  questCard: {
    backgroundColor: '#161B22',
    borderWidth: 1.5,
    borderColor: '#30363D',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  completedCard: {
    borderColor: 'rgba(57, 211, 83, 0.4)', // Premium green glowing border for finished quest
  },
  questHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0D1117',
    borderWidth: 1,
    borderColor: '#21262D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  completedIconCircle: {
    backgroundColor: 'rgba(57, 211, 83, 0.12)',
    borderColor: '#39D353',
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  questTitle: {
    fontSize: 14.5,
    fontWeight: '900',
    color: '#F0F6FC',
    marginBottom: 2,
  },
  completedQuestTitle: {
    color: '#39D353', // Completed title turns green!
  },
  progressText: {
    fontSize: 11.5,
    color: '#8B949E',
    fontWeight: '600',
  },
  rewardCapsule: {
    backgroundColor: 'rgba(57, 211, 83, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(57, 211, 83, 0.3)',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  completedRewardCapsule: {
    backgroundColor: '#39D353',
    borderColor: '#39D353',
  },
  rewardText: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 10,
    color: '#39D353',
  },
  completedRewardText: {
    color: '#161B22', // Muted text on filled green badge
  },
  progressBarWrapper: {
    marginTop: 14,
    width: '100%',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: '#0D1117',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#21262D',
    position: 'relative',
    justifyContent: 'center',
  },
  progressBarFill: {
    height: 6,
    borderRadius: 3,
  },
  checkBadge: {
    position: 'absolute',
    right: 0,
    top: -4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#39D353',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#161B22',
  },
});
