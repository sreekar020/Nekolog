import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Text } from '../../setup screens/components/Text';

interface BranchNode {
  id: string;
  name: string;
  badgeText: string;
  badgeType: 'production' | 'behind' | 'active-duel' | 'merged' | 'active-test';
  commits: number;
  message: string;
  isMain: boolean;
}

const activeBranches: BranchNode[] = [
  {
    id: '1',
    name: 'main',
    badgeText: 'Production',
    badgeType: 'production',
    commits: 182,
    message: 'chore: release v1.4.0',
    isMain: true,
  },
  {
    id: '2',
    name: 'dev',
    badgeText: 'Behind main by 2',
    badgeType: 'behind',
    commits: 24,
    message: 'feat(auth): integrate mult...',
    isMain: false,
  },
  {
    id: '3',
    name: 'feature/auth',
    badgeText: 'Active duel',
    badgeType: 'active-duel',
    commits: 8,
    message: 'fix: auth tokens validatio...',
    isMain: false,
  },
  {
    id: '4',
    name: 'feature/ui',
    badgeText: 'Merged',
    badgeType: 'merged',
    commits: 15,
    message: 'style: glassmorphism layou...',
    isMain: false,
  },
  {
    id: '5',
    name: 'bugfix/api',
    badgeText: 'Active test',
    badgeType: 'active-test',
    commits: 3,
    message: 'fix: handle connection tim...',
    isMain: false,
  },
];

export const GitPipelineGraph: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* 1. Outer Section Header */}
      <View style={styles.sectionHeader}>
        <View style={styles.titleWrapper}>
          <Text style={styles.emojiPrefix}>🌲</Text>
          <Text style={styles.sectionTitle}>GIT BRANCH FLOWS</Text>
        </View>
      </View>

      {/* 2. Timeline List */}
      <View style={styles.timelineContainer}>
        {/* Connecting Vertical Timeline Line */}
        <View style={styles.pipelineLine} />

        {activeBranches.map((branch) => {
          return (
            <View key={branch.id} style={styles.timelineRow}>
              {/* Left timeline outside dot */}
              <View style={styles.nodeColumn}>
                <View style={[styles.solidDot, branch.isMain ? styles.dotMain : styles.dotBranch]} />
              </View>

              {/* Right branch details box (Capsule card) */}
              <View style={styles.branchCard}>
                {/* Top line (Name, Tag, Commits Count) */}
                <View style={styles.cardHeaderRow}>
                  <View style={styles.branchTitleGroup}>
                    <Text style={styles.branchName}>{branch.name}</Text>
                    
                    {/* Status Badge */}
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusBadgeText}>{branch.badgeText}</Text>
                    </View>
                  </View>

                  {/* Commits Count */}
                  <Text style={styles.commitsText}>
                    {branch.commits} commits
                  </Text>
                </View>

                {/* Bottom line (Commit message, Active tag) */}
                <View style={styles.cardFooterRow}>
                  <View style={styles.messageGroup}>
                    {/* Custom SVG git track node */}
                    <Svg width="22" height="12" viewBox="0 0 22 12" fill="none" style={styles.commitLineNode}>
                      <Path d="M0 6h8M14 6h8" stroke="#8B949E" strokeWidth="2" />
                      <Circle cx="11" cy="6" r="3" stroke="#8B949E" strokeWidth="2" fill="#161B22" />
                    </Svg>
                    <Text style={styles.messageText} numberOfLines={1}>
                      {branch.message}
                    </Text>
                  </View>
                  
                  <Text style={styles.activeText}>Active</Text>
                </View>
              </View>
            </View>
          );
        })}
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
    marginVertical: 10,
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
    fontSize: 11.5,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  timelineContainer: {
    position: 'relative',
  },
  pipelineLine: {
    position: 'absolute',
    left: 10, // Center of nodeColumn (width 20)
    top: 24,
    bottom: 24,
    width: 2,
    backgroundColor: '#21262D',
    zIndex: 0,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  nodeColumn: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    zIndex: 10,
  },
  solidDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dotMain: {
    backgroundColor: '#39D353',
  },
  dotBranch: {
    backgroundColor: '#388BFD',
  },
  branchCard: {
    flex: 1,
    backgroundColor: '#161B22',
    borderRadius: 36, // Highly rounded capsule shape
    borderWidth: 1.2,
    borderColor: '#30363D',
    paddingVertical: 14,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  branchTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  branchName: {
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMono-ExtraBold', // Monospaced bold title
    fontSize: 14.5,
    marginRight: 8,
  },
  statusBadge: {
    backgroundColor: '#21262D', // Solid dark gray
    borderColor: '#30363D',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusBadgeText: {
    color: '#8B949E',
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 9.5,
    fontWeight: '700',
  },
  commitsText: {
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMono-ExtraBold', // Monospaced bold white commits count
    fontSize: 13,
  },
  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  commitLineNode: {
    marginRight: 6,
  },
  messageText: {
    color: '#8B949E',
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 11,
    flex: 1,
  },
  activeText: {
    color: '#8B949E', // Gray "Active" text
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontSize: 11,
  },
});
