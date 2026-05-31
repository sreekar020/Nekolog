import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Text } from './Text';

export const WeeklyPerformance: React.FC = () => {
  // A helper component to render each small stat card
  interface StatCardProps {
    title: string;
    value: string;
    valueColor: string;
    iconType: 'branch' | 'bolt' | 'trophy' | 'sword';
  }

  const StatCard = ({ title, value, valueColor, iconType }: StatCardProps) => {
    // Return custom SVG based on iconType
    const renderIcon = () => {
      switch (iconType) {
        case 'branch':
          return (
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M6 3v12m0 0a3 3 0 106 0m-6 0a3 3 0 116 0m0 0h6m0 0a3 3 0 106 0m-6 0a3 3 0 116 0"
                stroke="#30363D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Circle cx="6" cy="18" r="2.5" fill="#30363D" />
              <Circle cx="18" cy="12" r="2.5" fill="#30363D" />
            </Svg>
          );
        case 'bolt':
          return (
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="#30363D"
                stroke="#30363D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </Svg>
          );
        case 'trophy':
          return (
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17m4-2.34V17m-6 5h8M12 2a6 6 0 016 6v4H6V8a6 6 0 016-6z"
                stroke="#30363D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          );
        case 'sword':
          return (
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M14.5 17.5L3 6v5l8.5 8.5m3-2l6-6-3-3-6 6"
                stroke="#30363D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path d="M13 13l-2.5-2.5" stroke="#30363D" strokeWidth="2" />
            </Svg>
          );
      }
    };

    return (
      <View style={styles.statCard}>
        <View style={styles.statCardLeft}>
          <Text style={styles.statCardTitle}>{title}</Text>
          <Text style={[styles.statCardValue, { color: valueColor }]}>{value}</Text>
        </View>
        <View style={styles.statCardRight}>{renderIcon()}</View>
      </View>
    );
  };

  // Generate deterministic activity matrix for Contribution Heatmap (7 rows by 18 columns)
  // Level: 0 = empty/grey, 1 = low, 2 = mid, 3 = high, 4 = glowing green
  const generateHeatmap = () => {
    const rows = 7;
    const cols = 18;
    const grid: number[][] = [];

    // Deterministic random shading matrix matching the Figma aesthetic
    const pattern = [
      [0, 1, 0, 0, 3, 2, 4, 3, 2, 4, 1, 0, 3, 4, 3, 4, 3, 4],
      [1, 3, 4, 2, 0, 1, 3, 0, 1, 3, 2, 4, 2, 3, 1, 4, 2, 3],
      [4, 2, 0, 1, 3, 4, 2, 3, 4, 0, 1, 3, 4, 2, 4, 1, 3, 0],
      [3, 4, 1, 3, 4, 2, 4, 1, 3, 4, 2, 0, 3, 4, 2, 4, 1, 4],
      [2, 0, 4, 1, 3, 0, 1, 3, 4, 2, 4, 1, 3, 4, 2, 0, 3, 2],
      [0, 3, 2, 4, 2, 3, 0, 1, 3, 4, 2, 3, 4, 1, 3, 4, 2, 4],
      [4, 1, 3, 0, 1, 3, 4, 2, 4, 1, 3, 4, 2, 0, 3, 4, 2, 3]
    ];

    return pattern;
  };

  const heatmapGrid = generateHeatmap();

  // Mapping level to colors
  const getColorForLevel = (level: number) => {
    switch (level) {
      case 0: return '#161B22'; // Empty/dark circle
      case 1: return 'rgba(57, 211, 83, 0.2)'; // Low activity
      case 2: return 'rgba(57, 211, 83, 0.45)'; // Mid activity
      case 3: return 'rgba(57, 211, 83, 0.75)'; // High activity
      case 4: return '#39D353'; // Glowing green
      default: return '#161B22';
    }
  };

  return (
    <View style={styles.sectionContainer}>
      {/* 1. Header Section Title */}
      <Text style={styles.sectionTitle}>WEEKLY PERFORMANCE</Text>

      {/* 2. Grid of 4 small stats cards */}
      <View style={styles.statsGrid}>
        <View style={styles.row}>
          <StatCard title="COMMITS" value="42" valueColor="#39D353" iconType="branch" />
          <StatCard title="XP GAINED" value="+1,240" valueColor="#58A6FF" iconType="bolt" />
        </View>
        <View style={styles.row}>
          <StatCard title="GLOBAL RANK" value="#42" valueColor="#BC8CFF" iconType="trophy" />
          <StatCard title="QUESTS DONE" value="8/10" valueColor="#FF8C00" iconType="sword" />
        </View>
      </View>

      {/* 3. Heatmap Card below the grid */}
      <Pressable 
        style={({ pressed }) => [
          styles.heatmapCard,
          pressed && styles.pressedState
        ]}
      >
        {/* Heatmap Header */}
        <View style={styles.heatmapHeader}>
          <Text style={styles.heatmapTitle}>CONTRIBUTION HEATMAP</Text>
          <Text style={styles.heatmapCount}>126 commits / 30d</Text>
        </View>

        {/* Heatmap Matrix Row Layout */}
        <View style={styles.heatmapGridWrapper}>
          {/* Day Label Column */}
          <View style={styles.dayLabelColumn}>
            <Text style={styles.dayLabel}>Mon</Text>
            <Text style={[styles.dayLabel, { marginVertical: 8 }]}>Wed</Text>
            <Text style={styles.dayLabel}>Fri</Text>
          </View>

          {/* Dots Columns */}
          <View style={styles.dotsWrapper}>
            {heatmapGrid.map((row, rIdx) => (
              <View key={rIdx} style={styles.heatmapRow}>
                {row.map((level, cIdx) => (
                  <View
                    key={cIdx}
                    style={[
                      styles.circleNode,
                      { backgroundColor: getColorForLevel(level) }
                    ]}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Heatmap Legend */}
        <View style={styles.heatmapLegend}>
          <Text style={styles.legendText}>Less</Text>
          <View style={styles.legendNodeRow}>
            <View style={[styles.circleNode, { backgroundColor: '#161B22', marginHorizontal: 2 }]} />
            <View style={[styles.circleNode, { backgroundColor: 'rgba(57, 211, 83, 0.2)', marginHorizontal: 2 }]} />
            <View style={[styles.circleNode, { backgroundColor: 'rgba(57, 211, 83, 0.45)', marginHorizontal: 2 }]} />
            <View style={[styles.circleNode, { backgroundColor: 'rgba(57, 211, 83, 0.75)', marginHorizontal: 2 }]} />
            <View style={[styles.circleNode, { backgroundColor: '#39D353', marginHorizontal: 2 }]} />
          </View>
          <Text style={styles.legendText}>More</Text>
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
  sectionTitle: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 12.5,
    color: '#8B949E',
    letterSpacing: 0.8,
    marginBottom: 12,
    paddingLeft: 4,
  },
  statsGrid: {
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#161B22',
    borderWidth: 1.5,
    borderColor: '#30363D',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  statCardLeft: {
    justifyContent: 'center',
  },
  statCardTitle: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 9.5,
    color: '#8B949E',
    letterSpacing: 0.2,
    marginBottom: 4,
  },
  statCardValue: {
    fontSize: 18,
    fontWeight: '900',
  },
  statCardRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heatmapCard: {
    backgroundColor: '#161B22',
    borderWidth: 1.5,
    borderColor: '#30363D',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  pressedState: {
    borderColor: '#39D353',
  },
  heatmapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  heatmapTitle: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 11.5,
    color: '#8B949E',
    letterSpacing: 0.5,
  },
  heatmapCount: {
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 11.5,
    color: '#39D353',
  },
  heatmapGridWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayLabelColumn: {
    justifyContent: 'space-between',
    paddingRight: 10,
    height: 72,
  },
  dayLabel: {
    color: '#8B949E',
    fontSize: 9.5,
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
  dotsWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heatmapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1.5,
  },
  circleNode: {
    width: 8.5,
    height: 8.5,
    borderRadius: 4.25, // Circles instead of squares!
  },
  heatmapLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderTopWidth: 1.2,
    borderTopColor: '#21262D',
    paddingTop: 12,
  },
  legendText: {
    color: '#8B949E',
    fontSize: 10.5,
    fontFamily: 'JetBrainsMono-ExtraBold',
    marginHorizontal: 6,
  },
  legendNodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
