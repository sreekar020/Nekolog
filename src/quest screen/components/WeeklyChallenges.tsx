import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { QuestCard } from './QuestCard';

export const WeeklyChallenges: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.titleColumn}>
          <Text style={styles.sectionTitle}>Weekly Challenges</Text>
          <Text style={styles.sectionSubtitle}>Ends Sunday, midnight</Text>
        </View>

        {/* XP Potential Capsule */}
        <View style={styles.potentialPill}>
          <Text style={styles.potentialText}>+900 XP POTENTIAL</Text>
        </View>
      </View>

      {/* Quests Cards List */}
      <View style={styles.cardsList}>
        <QuestCard
          title="Weekly Champion: 20 Commits"
          current={14}
          total={20}
          xpAward={500}
          iconType="trophy"
          isWeekly={true}
        />
        <QuestCard
          title="Review 3 Pull Requests"
          current={1}
          total={3}
          xpAward={400}
          iconType="pull-request"
          isWeekly={true}
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
  potentialPill: {
    backgroundColor: 'rgba(138, 99, 210, 0.12)',
    borderWidth: 1.2,
    borderColor: 'rgba(138, 99, 210, 0.35)',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  potentialText: {
    color: '#A371F7',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  cardsList: {
    marginTop: 4,
  },
});
