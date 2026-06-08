import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalProfileCard } from '../setup screens/components/GlobalProfileCard';
import { GlobalNavBar } from '../setup screens/components/GlobalNavBar';
import { Text } from '../setup screens/components/Text';
import { useAppStore } from '../store/useAppStore';
import Svg, { Path, Circle } from 'react-native-svg';

interface FriendsScreenProps {
  onTabPress?: (tab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard') => void;
}

export const FriendsScreen: React.FC<FriendsScreenProps> = ({ onTabPress }) => {
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

      {/* 1. Header Profile Card with Notch Safety */}
      <View style={styles.headerContainer}>
        <GlobalProfileCard
          onNotificationPress={() => console.log('Notification pressed')}
          onCardPress={() => handleTabPress('Profile')}
        />
      </View>

      {/* 2. Content Area */}
      <View style={styles.content}>
        <Svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
          <Path d="M17 21v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2" />
          <Circle cx="10" cy="8" r="4" />
          <Path d="M23 21v-2a3 3 0 00-3-3h-1" />
          <Path d="M16 3.13a4 4 0 010 7.75" />
        </Svg>
        <Text style={styles.titleText}>Friends Network</Text>
        <Text style={styles.subtitleText}>
          Connect with other developers, compare weekly streaks, and share quests. Coming soon!
        </Text>
      </View>

      {/* 3. Bottom Navigation Bar */}
      <GlobalNavBar
        activeTab="Friends"
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 40) : 8,
    paddingBottom: 6,
    backgroundColor: '#000000',
    zIndex: 100,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 80,
  },
  icon: {
    marginBottom: 20,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    color: '#8B949E',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default FriendsScreen;
