import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Text } from './Text';
import { useAppStore } from '../../store/useAppStore';
import { QuestCard } from './QuestCard';
export const DailyQuests: React.FC = () => {
  const commitsCount = useAppStore((state) => state.commitsCount);
  const commitsTotal = useAppStore((state) => state.commitsTotal);
  const pushesCount = useAppStore((state) => state.pushesCount);
  const pushesTotal = useAppStore((state) => state.pushesTotal);
  const issuesCount = useAppStore((state) => state.issuesCount);
  const issuesTotal = useAppStore((state) => state.issuesTotal);

  const incrementCommits = useAppStore((state) => state.incrementCommits);
  const incrementPushes = useAppStore((state) => state.incrementPushes);
  const incrementIssues = useAppStore((state) => state.incrementIssues);
  return (
    <View style={styles.sectionContainer}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.titleColumn}>
          <Text style={styles.sectionTitle}>Daily Quests</Text>
          <Text style={styles.sectionSubtitle}>Refreshes automatically</Text>
        </View>

        {/* Timer Capsule */}
        <View style={styles.timerPill}>
          <Svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={styles.clockIcon}>
            <Circle cx="12" cy="12" r="9" stroke="#FF8C00" strokeWidth="2.5" />
            <Path d="M12 7v5l3 2" stroke="#FF8C00" strokeWidth="2.5" strokeLinecap="round" />
          </Svg>
          <Text style={styles.timerText}>14h 21m</Text>
        </View>
      </View>

      {/* Quests Cards List */}
      <View style={styles.cardsList}>
        <QuestCard
          title="Make 3 Commits"
          current={commitsCount}
          total={commitsTotal}
          xpAward={120}
          iconType="commit"
          onPress={incrementCommits}
        />
        <QuestCard
          title="Push to 2 Repositories"
          current={pushesCount}
          total={pushesTotal}
          xpAward={180}
          iconType="push"
          onPress={incrementPushes}
        />
        <QuestCard
          title="Close 1 Issue"
          current={issuesCount}
          total={issuesTotal}
          xpAward={150}
          iconType="issue"
          onPress={incrementIssues}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 14,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    marginBottom: 12,
  },
  titleColumn: {
    flex: 1,
  },
  sectionTitle: {
    color: '#F0F6FC',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
  sectionSubtitle: {
    color: '#8B949E',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '500',
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 140, 0, 0.08)',
    borderWidth: 1.2,
    borderColor: 'rgba(255, 140, 0, 0.35)',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  clockIcon: {
    marginRight: 5,
  },
  timerText: {
    color: '#FF8C00',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  cardsList: {
    marginTop: 4,
  },
});
