import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalProfileCard } from '../setup screens/components/GlobalProfileCard';
import { GlobalNavBar } from '../setup screens/components/GlobalNavBar';
import { DevPulseCard } from './components/DevPulseCard';
import { ShareButtons } from './components/ShareButtons';
import { Text } from '../setup screens/components/Text';
import { useAppStore } from '../store/useAppStore';

interface DevCardScreenProps {
  onTabPress?: (tab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard') => void;
}

export const DevCardScreen: React.FC<DevCardScreenProps> = ({ onTabPress }) => {
  const setActiveTab = useAppStore((state) => state.setActiveTab);
  
  const handleTabPress = (tab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard') => {
    if (onTabPress) {
      onTabPress(tab);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* 1. Header Profile Card (Anchored on top) with Notch Safety */}
      <View style={styles.headerContainer}>
        <GlobalProfileCard
          onNotificationPress={() => console.log('Notification pressed')}
          onCardPress={() => handleTabPress('Profile')}
        />
      </View>

      {/* 2. Scrollable Center Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Intro Badge */}
        <View style={styles.badgeWrapper}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>DEVPULSE CARD</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.titleText}>Share Developer Identity</Text>

        {/* Subtitle description */}
        <Text style={styles.subtitleText}>
          Your profile card auto-includes selected projects, stats, and contribution heatmap.
        </Text>

        {/* 3. The Dev Card Component */}
        <DevPulseCard />

        {/* 4. The Share Buttons Component */}
        <ShareButtons />

        {/* Dynamic bottom spacer to avoid overlap with bottom navigation bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* 5. Bottom Navigation Bar */}
      <GlobalNavBar
        activeTab="DevCard"
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
  headerContainer: {
    // Top padding to push profile card safely below notches on iOS and Android
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 40) : 8,
    paddingBottom: 6,
    backgroundColor: '#000000',
    zIndex: 100,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  badgeWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: 'rgba(139, 92, 246, 0.15)', // Light purple translucent bg
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#BB86FC', // Vibrant pastel purple text
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    color: '#8B949E', // Muted text
    fontSize: 12.5,
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 36,
    marginBottom: 24,
  },
  bottomSpacer: {
    height: 100, // Safe padding ensuring scrollable lists are never blocked by GlobalNavBar
  },
});

export default DevCardScreen;
