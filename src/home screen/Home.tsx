import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalProfileCard } from './components/GlobalProfileCard';
import { GlobalNavBar } from './components/GlobalNavBar';
import { CommitCatBanner } from './components/CommitCatBanner';
import { LevelProgressCard } from './components/LevelProgressCard';
import { StreakActiveCard } from './components/StreakActiveCard';
import { WeeklyPerformance } from './components/WeeklyPerformance';
import { QuestsPreview } from './components/QuestsPreview';

export const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard'>('Home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* 1. Header Profile Card (Anchored on top) with Notch Safety */}
      <View style={styles.headerContainer}>
        <GlobalProfileCard
          username="octocat"
          level={12}
          streakDays={6}
          xp={2450}
          onNotificationPress={() => console.log('Notification pressed')}
        />
      </View>

      {/* 2. Scrollable Center Content Area (Dashboard) */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* A. Commit Cat Mascot Banner */}
        <CommitCatBanner />

        {/* B. Level Progress Card */}
        <LevelProgressCard />

        {/* C. Streak Active Card */}
        <StreakActiveCard />

        {/* D. Weekly Performance Stats & Contribution Heatmap */}
        <WeeklyPerformance />

        {/* E. Quests Preview (Make 3 Commits & Close 1 Issue) */}
        <QuestsPreview />

        {/* Dynamic spacer ensuring bottom navigation never overlaps scroll elements */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* 3. Bottom Global Navigation Bar */}
      <GlobalNavBar
        activeTab={activeTab}
        onTabPress={(tab) => setActiveTab(tab)}
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
export default HomeScreen;
