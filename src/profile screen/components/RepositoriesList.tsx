import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from '../../setup screens/components/Text';

interface Repository {
  id: string;
  name: string;
  isPrivate: boolean;
  stars: number;
  language: string;
  languageColor: string;
  commits: number;
}

const allRepositories: Repository[] = [
  {
    id: '1',
    name: 'hyper-terminal-ai',
    isPrivate: false,
    stars: 489,
    language: 'Rust',
    languageColor: '#F34B7D', // Rust orange-red
    commits: 124,
  },
  {
    id: '2',
    name: 'nebula-query-engine',
    isPrivate: false,
    stars: 312,
    language: 'Go',
    languageColor: '#00ADD8', // Go light blue
    commits: 98,
  },
  {
    id: '3',
    name: 'react-visual-git-graph',
    isPrivate: false,
    stars: 820,
    language: 'TypeScript',
    languageColor: '#3178C6', // TS blue
    commits: 256,
  },
  {
    id: '4',
    name: 'private-security-vault',
    isPrivate: true,
    stars: 12,
    language: 'Rust',
    languageColor: '#F34B7D',
    commits: 45,
  },
  {
    id: '5',
    name: 'devpulse-mobile-companion',
    isPrivate: false,
    stars: 1420,
    language: 'TypeScript',
    languageColor: '#3178C6',
    commits: 312,
  },
];

export const RepositoriesList: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* 1. Section Header */}
      <View style={styles.sectionHeader}>
        <View style={styles.titleWrapper}>
          <Text style={styles.emojiPrefix}>📁</Text>
          <Text style={styles.sectionTitle}>ALL REPOSITORIES</Text>
        </View>
      </View>

      {/* 2. Repos Feed */}
      {allRepositories.map((repo) => (
        <Pressable key={repo.id} style={styles.card}>
          {/* Main card row split left and right */}
          <View style={styles.cardMainRow}>
            {/* Left Content (Folder + Title + Badges + Footer) */}
            <View style={styles.leftContent}>
              {/* Top Row: Folder and Name and Public/Private Badge */}
              <View style={styles.repoNameRow}>
                {/* Green Folder Outline SVG */}
                <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={styles.folderIcon}>
                  <Path
                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                    stroke="#39D353"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                
                {/* Repository Name */}
                <Text style={styles.repoName} numberOfLines={1}>
                  {repo.name}
                </Text>

                {/* Public / Private Badge */}
                <View style={[styles.statusBadge, repo.isPrivate ? styles.privateBg : styles.publicBg]}>
                  <Text style={styles.statusText}>
                    {repo.isPrivate ? 'Private' : 'Public'}
                  </Text>
                </View>
              </View>

              {/* Bottom Row: Language + Commits */}
              <View style={styles.footerStats}>
                {/* Language Circle Dot */}
                <View style={[styles.langDot, { backgroundColor: repo.languageColor }]} />
                
                <Text style={styles.footerText}>
                  {repo.language}  •  {repo.commits} commits
                </Text>
              </View>
            </View>

            {/* Right Content (Stars Count & Chevron) */}
            <View style={styles.rightContent}>
              {/* Stars Icon & Count Row (No background container) */}
              <View style={styles.starsRowOnly}>
                <Svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={styles.starIcon}>
                  <Path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="#FF8C00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                <Text style={styles.starsCount}>{repo.stars}</Text>
              </View>

              {/* Subtly colored chevron arrow */}
              <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={styles.chevronIcon}>
                <Path
                  d="M9 5l7 7-7 7"
                  stroke="#8B949E"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.6}
                />
              </Svg>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
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
  card: {
    backgroundColor: '#161B22', // GitHub deep dark card background
    borderRadius: 26, // Highly rounded capsule shape
    borderWidth: 1.2,
    borderColor: '#30363D', // Premium subtle grey border
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  cardMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
    paddingRight: 10,
  },
  repoNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  folderIcon: {
    marginRight: 8,
  },
  repoName: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontWeight: 'bold',
    fontFamily: 'JetBrainsMono-ExtraBold', // Technical monospaced bold title
    letterSpacing: -0.1,
    maxWidth: '65%',
  },
  statusBadge: {
    marginLeft: 8,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderWidth: 1,
  },
  publicBg: {
    backgroundColor: '#21262D', // Solid dark gray background
    borderColor: '#30363D',
  },
  privateBg: {
    backgroundColor: '#21262D', // Matching solid dark gray background
    borderColor: '#30363D',
  },
  statusText: {
    color: '#8B949E',
    fontSize: 9.5,
    fontWeight: '700',
  },
  footerStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langDot: {
    width: 8,
    height: 8,
    borderRadius: 4.5,
    marginRight: 8,
  },
  footerText: {
    color: '#8B949E',
    fontSize: 12,
    fontWeight: '600',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsRowOnly: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  starIcon: {
    marginRight: 4,
  },
  starsCount: {
    color: '#FF8C00', // Gold/orange star text
    fontSize: 12.5,
    fontWeight: 'bold',
    fontFamily: 'JetBrainsMono-ExtraBold', // Technical bold orange count
  },
  chevronIcon: {
    marginLeft: 2,
  },
});
