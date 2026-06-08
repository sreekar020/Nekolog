import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, { Path, Rect, Circle, Line } from 'react-native-svg';
import { useAppStore } from '../../store/useAppStore';
import { Text } from '../../setup screens/components/Text';

export const DevPulseCard: React.FC = () => {
  const username = useAppStore((state) => state.username);
  const level = useAppStore((state) => state.level);
  const streakDays = useAppStore((state) => state.streakDays);
  const repos = useAppStore((state) => state.devCardRepos);
  const contributionsCount = useAppStore((state) => state.devCardContributionsCount);
  const contributionsRange = useAppStore((state) => state.devCardContributionsRange);
  const heatmap = useAppStore((state) => state.devCardHeatmap);

  // Helper to resolve contribution dot opacity/color based on level 0-3
  const getDotColor = (levelValue: number) => {
    switch (levelValue) {
      case 3:
        return '#39D353'; // Brightest green
      case 2:
        return '#26A641'; // Medium green
      case 1:
        return '#0E4429'; // Dark green
      case 0:
      default:
        return '#161B22'; // Dark grey / empty
    }
  };

  return (
    <View style={styles.cardContainer}>
      {/* 1. Header Section */}
      <View style={styles.headerRow}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../../../assets/images/avatar_octocat.png')}
            style={styles.avatarImage}
            resizeMode="cover"
          />
          {/* Green Status Indicator */}
          <View style={styles.statusDot} />
          {/* Level Badge Overlay */}
          <View style={styles.levelBadge}>
            <Text style={styles.levelBadgeText}>{level}</Text>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.usernameText}>@{username}</Text>
          <Text style={styles.roleText}>Level {level} Architect</Text>
        </View>

        <View style={styles.streakContainer}>
          <Text style={styles.streakLabel}>STREAK</Text>
          <Text style={styles.streakValue}>{streakDays} Days</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* 2. Featured Repositories Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionIcon}>🚀</Text>
        <Text style={styles.sectionTitle}>FEATURED REPOSITORIES</Text>
      </View>

      {repos.map((repo, idx) => (
        <View key={idx} style={styles.repoCard}>
          <View style={styles.repoLeft}>
            <View style={styles.folderIconWrapper}>
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"
                  stroke="#39D353"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <View style={styles.repoDetails}>
              <Text style={styles.repoName}>{repo.name}</Text>
              <View style={styles.languageRow}>
                <View style={[styles.languageDot, { backgroundColor: repo.languageColor }]} />
                <Text style={styles.languageText}>{repo.language}</Text>
              </View>
            </View>
          </View>

          <View style={styles.repoRight}>
            <Text style={styles.commitsText}>{repo.commits} commits</Text>
            <View style={styles.starsRow}>
              <Svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={styles.starIcon}>
                <Path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="#FF9F2E"
                  stroke="#FF9F2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.starsText}>{repo.stars}</Text>
            </View>
          </View>
        </View>
      ))}

      {/* Divider */}
      <View style={styles.divider} />

      {/* 3. GitHub Contributions Section */}
      <View style={styles.contributionsHeader}>
        <Text style={styles.sectionTitle}>GITHUB CONTRIBUTIONS</Text>
        <Text style={styles.contributionsStats}>{contributionsCount} {contributionsRange}</Text>
      </View>

      {/* Contribution Heatmap Row */}
      <View style={styles.heatmapRow}>
        {heatmap.map((col, colIdx) => (
          <View key={colIdx} style={styles.heatmapCol}>
            {col.map((levelVal, rowIdx) => (
              <View
                key={rowIdx}
                style={[styles.heatmapDot, { backgroundColor: getDotColor(levelVal) }]}
              />
            ))}
          </View>
        ))}
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* 4. Branding Footer */}
      <View style={styles.footerRow}>
        <View style={styles.brandContainer}>
          <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <Line x1="6" y1="3" x2="6" y2="15" stroke="#39D353" strokeWidth="2.5" strokeLinecap="round" />
            <Circle cx="18" cy="6" r="3" stroke="#39D353" strokeWidth="2.5" />
            <Circle cx="6" cy="18" r="3" stroke="#39D353" strokeWidth="2.5" />
            <Path d="M18 9a9 9 0 01-9 9" stroke="#39D353" strokeWidth="2.5" strokeLinecap="round" />
          </Svg>
          <Text style={styles.brandText}>DevPulse</Text>
        </View>
        <Text style={styles.urlText}>github.devpulse.app/{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#0D1117', // Dark charcoal background
    borderWidth: 1.5,
    borderColor: '#21262D', // Subtle grey outline
    borderRadius: 24,
    padding: 20,
    width: '92%',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
  avatarImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: '#30363D',
  },
  statusDot: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#39D353',
    borderWidth: 2,
    borderColor: '#0D1117',
  },
  levelBadge: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#388BFD',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#0D1117',
  },
  levelBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  usernameText: {
    color: '#F0F6FC',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  roleText: {
    color: '#39D353', // Architect level green
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  streakContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  streakLabel: {
    color: '#8B949E',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  streakValue: {
    color: '#FF7B72', // Orange-peach streak color
    fontSize: 16,
    fontWeight: '800',
    marginTop: 2,
  },
  divider: {
    height: 1.2,
    backgroundColor: '#21262D',
    marginVertical: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionIcon: {
    fontSize: 13,
  },
  sectionTitle: {
    color: '#8B949E',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginLeft: 6,
  },
  repoCard: {
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: '#21262D',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  repoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  folderIconWrapper: {
    marginRight: 12,
  },
  repoDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  repoName: {
    color: '#F0F6FC',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.1,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  languageDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  languageText: {
    color: '#8B949E',
    fontSize: 11,
    fontWeight: '500',
  },
  repoRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  commitsText: {
    color: '#8B949E',
    fontSize: 11,
    fontWeight: '500',
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  starIcon: {
    marginRight: 4,
  },
  starsText: {
    color: '#FF9F2E', // Star Orange/Yellow
    fontSize: 12,
    fontWeight: '700',
  },
  contributionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  contributionsStats: {
    color: '#39D353',
    fontSize: 11,
    fontWeight: '700',
  },
  heatmapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  heatmapCol: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heatmapDot: {
    width: 14,
    height: 14,
    borderRadius: 3.5,
    marginVertical: 3.5,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    marginLeft: 6,
    letterSpacing: -0.2,
  },
  urlText: {
    color: '#8B949E',
    fontSize: 11,
    fontWeight: '500',
  },
});
