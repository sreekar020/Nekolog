import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from '../../setup screens/components/Text';
import { useAppStore } from '../../store/useAppStore';

interface Repository {
  id: string;
  name: string;
  description: string;
  stars: number;
  language: string;
  languageColor: string;
  commits: number;
}

const pinnedRepos: Repository[] = [
  {
    id: '1',
    name: 'hyper-terminal-ai',
    description: 'Next-gen GPU-accelerated terminal companion powered by LL...',
    stars: 489,
    language: 'Rust',
    languageColor: '#F34B7D', // Rust orange-red
    commits: 124,
  },
  {
    id: '2',
    name: 'nebula-query-engine',
    description: 'Blazing fast decentralized SQL query executor for multi-cloud ...',
    stars: 312,
    language: 'Go',
    languageColor: '#00ADD8', // Go light blue
    commits: 98,
  },
  {
    id: '3',
    name: 'react-visual-git-graph',
    description: 'Interactive holographic node-based Git tree visualizer.',
    stars: 820,
    language: 'TypeScript',
    languageColor: '#3178C6', // TS blue
    commits: 256,
  },
];

export const PinnedPortfolio: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* 1. Header Section */}
      <View style={styles.sectionHeader}>
        <View style={styles.titleWrapper}>
          <Text style={styles.emojiPrefix}>📌</Text>
          <Text style={styles.sectionTitle}>PINNED PORTFOLIO</Text>
        </View>
        <Pressable 
          style={styles.seeAllButton}
          onPress={() => useAppStore.getState().setProfileSubScreen('all_repos')}
        >
          <Text style={styles.seeAllText}>See all →</Text>
        </Pressable>
      </View>

      {/* 2. Repository Cards List */}
      {pinnedRepos.map((repo) => (
        <Pressable key={repo.id} style={styles.card}>
          {/* Card Header Row (Title & Stars) */}
          <View style={styles.cardHeader}>
            <View style={styles.titleContainer}>
              {/* Green Folder Outline Icon */}
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={styles.folderIcon}>
                <Path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                  stroke="#39D353"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.repoName}>{repo.name}</Text>
            </View>

            {/* Stars Count Capsule */}
            <View style={styles.starsContainer}>
              <Svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={styles.starIcon}>
                <Path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  stroke="#FF8C00"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.starsCount}>{repo.stars}</Text>
            </View>
          </View>

          {/* Repository Description */}
          <Text style={styles.repoDescription} numberOfLines={2}>
            {repo.description}
          </Text>

          {/* Divider Line inside Card */}
          <View style={styles.cardDivider} />

          {/* Footer Row (Language, Commits & Arrow Chevron) */}
          <View style={styles.cardFooter}>
            <View style={styles.footerStats}>
              {/* Language Color Dot */}
              <View style={[styles.langDot, { backgroundColor: repo.languageColor }]} />
              
              <Text style={styles.footerText}>
                {repo.language}  •  {repo.commits} commits
              </Text>
            </View>

            {/* Subtle gray arrow right chevron */}
            <Svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <Path
                d="M9 5l7 7-7 7"
                stroke="#58A6FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.6}
              />
            </Svg>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
  seeAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  seeAllText: {
    color: '#39D353',
    fontSize: 13,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#161B22', // GitHub deep dark card background
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#30363D', // Premium subtle grey border
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  folderIcon: {
    marginRight: 8,
  },
  repoName: {
    color: '#FFFFFF',
    fontSize: 15.5,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    flexShrink: 1,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 140, 0, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 140, 0, 0.25)',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  starIcon: {
    marginRight: 4,
  },
  starsCount: {
    color: '#FF8C00', // Gold/orange star text
    fontSize: 11,
    fontWeight: '800',
  },
  repoDescription: {
    color: '#8B949E',
    fontSize: 13,
    lineHeight: 18.5,
    marginBottom: 12,
    fontWeight: '500',
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#21262D', // Extremely subtle horizontal divider line
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginRight: 8,
  },
  footerText: {
    color: '#8B949E',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
