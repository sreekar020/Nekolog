import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalProfileCard } from '../setup screens/components/GlobalProfileCard';
import { GlobalNavBar } from '../setup screens/components/GlobalNavBar';
import { DailyQuests } from './components/DailyQuests';
import { WeeklyChallenges } from './components/WeeklyChallenges';

interface QuestScreenProps {
  onTabPress?: (tab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard') => void;
}

export const QuestScreen: React.FC<QuestScreenProps> = ({ onTabPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* 1. Header Profile Card with Notch Safety */}
      <View style={styles.headerContainer}>
        <GlobalProfileCard
          username="octocat"
          level={12}
          streakDays={6}
          xp={2450}
          onNotificationPress={() => console.log('Notification pressed')}
        />
      </View>

      {/* 2. Scrollable Dashboard Area */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Daily Quests Component */}
        <DailyQuests />

        {/* Weekly Challenges Component */}
        <WeeklyChallenges />

        {/* Dynamic spacer ensuring bottom navigation never overlaps scroll elements */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* 3. Bottom Global Navigation Bar */}
      <GlobalNavBar
        activeTab="Quests"
        onTabPress={onTabPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black screen background
  },
  headerContainer: {
    // Dynamic top padding to push profile card safely below notches on iOS and Android devices
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 40) : 8,
    paddingBottom: 6,
    backgroundColor: '#000000',
    zIndex: 100,
  },
  scrollContent: {
    paddingTop: 4,
    paddingBottom: 24,
  },
  bottomSpacer: {
    height: 100, // Safe padding ensuring scrollable lists are never blocked by GlobalNavBar
  },
});

export default QuestScreen;
