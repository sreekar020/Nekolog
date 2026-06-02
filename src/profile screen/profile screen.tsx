import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalNavBar } from '../setup screens/components/GlobalNavBar';
import { ProfileHeader } from './components/ProfileHeader';
import { PinnedPortfolio } from './components/PinnedPortfolio';
import { RecentBadges } from './components/RecentBadges';
import { AllReposScreen } from './all repos';
import { useAppStore } from '../store/useAppStore';

interface ProfileScreenProps {
  onTabPress?: (tab: 'Home' | 'Quests' | 'Profile' | 'DevCard') => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onTabPress }) => {
  const profileSubScreen = useAppStore((state) => state.profileSubScreen);
  const setProfileSubScreen = useAppStore((state) => state.setProfileSubScreen);

  const handleTabPress = (tab: 'Home' | 'Quests' | 'Profile' | 'DevCard') => {
    if (tab === 'Profile') {
      setProfileSubScreen('main');
    }
    onTabPress?.(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Conditionally render main Profile dashboard vs All Repos Explorer */}
      {profileSubScreen === 'all_repos' ? (
        <AllReposScreen />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* A. User Profile Header Info */}
          <ProfileHeader />

          {/* B. Pinned Repository Cards */}
          <PinnedPortfolio />

          {/* C. Gamified Badges */}
          <RecentBadges />

          {/* Dynamic spacer ensuring bottom navigation never overlaps scroll elements */}
          <View style={styles.bottomSpacer} />
        </ScrollView>
      )}

      {/* Bottom Global Navigation Bar */}
      <GlobalNavBar
        activeTab="Profile"
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black screen background
  },
  scrollContent: {
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 4 : 20) : 0,
    paddingBottom: 24,
  },
  bottomSpacer: {
    height: 100, // Safe padding ensuring scrollable lists are never blocked by GlobalNavBar
  },
});

export default ProfileScreen;
