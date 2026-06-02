import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { Text } from './Text';

export interface QuestCardProps {
  title: string;
  current: number;
  total: number;
  xpAward: number;
  iconType: 'commit' | 'push' | 'issue' | 'trophy' | 'pull-request';
  isWeekly?: boolean;
  onPress?: () => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  title,
  current,
  total,
  xpAward,
  iconType,
  isWeekly = false,
  onPress,
}) => {
  const isCompleted = current >= total;
  const progressPercent = Math.min(100, Math.round((current / total) * 100));

  // Determine active colors based on completion state
  const cardBorderColor = isCompleted ? '#39D353' : '#30363D';
  const progressColor = isCompleted ? '#39D353' : '#388BFD';
  const titleColor = isCompleted ? '#39D353' : '#F0F6FC';
  
  // Custom SVG Icon rendering helper
  const renderIcon = () => {
    const iconColor = isCompleted ? '#39D353' : '#8B949E';
    const circleBg = isCompleted ? 'rgba(57, 211, 83, 0.12)' : '#1F242C';

    return (
      <View style={[styles.iconWrapper, { backgroundColor: circleBg }]}>
        {iconType === 'commit' && (
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {/* Git commit: line with a node circle in center */}
            <Path d="M2 12h7M15 12h7" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
            <Circle cx="12" cy="12" r="3.5" stroke={iconColor} strokeWidth="2.5" fill="none" />
          </Svg>
        )}
        {iconType === 'push' && (
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {/* Git branch / push icon */}
            <Circle cx="18" cy="6" r="3" stroke={iconColor} strokeWidth="2" />
            <Circle cx="6" cy="18" r="3" stroke={iconColor} strokeWidth="2" />
            <Path d="M6 15V9a3 3 0 013-3h6" stroke={iconColor} strokeWidth="2" />
          </Svg>
        )}
        {iconType === 'issue' && (
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {/* Circle checkmark issue icon */}
            <Circle cx="12" cy="12" r="9" stroke={iconColor} strokeWidth="2" />
            <Path d="M9 12l2 2 4-4" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        )}
        {iconType === 'trophy' && (
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {/* Trophy Icon */}
            <Path
              d="M6 9H4.5A2.5 2.5 0 012 6.5v-1A2.5 2.5 0 014.5 3H6m12 6h1.5A2.5 2.5 0 0022 6.5v-1A2.5 2.5 0 0019.5 3H18M6 3h12v9a6 6 0 01-6 6 6 6 0 01-6-6V3zm6 15v3m-4 0h8"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}
        {iconType === 'pull-request' && (
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {/* Pull request icon */}
            <Circle cx="6" cy="6" r="3" stroke={iconColor} strokeWidth="2" />
            <Circle cx="6" cy="18" r="3" stroke={iconColor} strokeWidth="2" />
            <Circle cx="18" cy="18" r="3" stroke={iconColor} strokeWidth="2" />
            <Path d="M6 9v6M18 15V9a3 3 0 00-3-3h-3" stroke={iconColor} strokeWidth="2" />
          </Svg>
        )}
      </View>
    );
  };

  return (
    <Pressable style={[styles.cardContainer, { borderColor: cardBorderColor }]} onPress={onPress}>
      {/* Absolute Weekly Tag */}
      {isWeekly && (
        <View style={styles.weeklyBadge}>
          <Text style={styles.weeklyBadgeText}>WEEKLY</Text>
        </View>
      )}

      {/* Row 1: Left Content & Right XP Pill */}
      <View style={styles.topRow}>
        <View style={styles.leftContent}>
          {renderIcon()}
          
          <View style={styles.textContainer}>
            <Text style={[styles.titleText, { color: titleColor }]}>{title}</Text>
            <Text style={styles.doneText}>
              {current} <Text style={styles.doneTextSub}>/ {total} done</Text>
            </Text>
          </View>
        </View>

        {/* XP Award Capsule */}
        <View style={styles.xpPill}>
          <Text style={styles.xpText}>+{xpAward} XP</Text>
        </View>
      </View>

      {/* Row 2: Progress Bar & Success Checkmark / Percentage */}
      <View style={styles.bottomRow}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${progressPercent}%`,
                backgroundColor: progressColor,
              },
            ]}
          />
        </View>

        {/* Completion indicator: Checkmark vs. Percent text */}
        <View style={styles.indicatorContainer}>
          {isCompleted ? (
            <View style={styles.checkBadge}>
              <Svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M20 6L9 17l-5-5"
                  stroke="#161B22"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ) : (
            <Text style={styles.percentText}>{progressPercent}%</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    backgroundColor: '#161B22',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 16,
    width: '92%',
    alignSelf: 'center',
    marginVertical: 7,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  weeklyBadge: {
    position: 'absolute',
    top: -10,
    right: 18,
    backgroundColor: 'rgba(138, 99, 210, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(138, 99, 210, 0.6)',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
    zIndex: 10,
  },
  weeklyBadgeText: {
    color: '#D3C6F9',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 8,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginBottom: 4,
  },
  doneText: {
    color: '#8B949E',
    fontSize: 13,
    fontWeight: '600',
  },
  doneTextSub: {
    color: '#5a626a',
    fontWeight: '500',
  },
  xpPill: {
    backgroundColor: 'rgba(57, 211, 83, 0.12)',
    borderWidth: 1.2,
    borderColor: 'rgba(57, 211, 83, 0.25)',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xpText: {
    color: '#39D353',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#21262D',
    borderRadius: 3,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
  indicatorContainer: {
    width: 26,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  percentText: {
    color: '#8B949E',
    fontSize: 12,
    fontWeight: '600',
  },
  checkBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#39D353',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
