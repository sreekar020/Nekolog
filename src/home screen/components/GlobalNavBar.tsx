import React from 'react';
import { View, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { Text } from './Text';

interface GlobalNavBarProps {
  activeTab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard';
  onTabPress?: (tab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard') => void;
}

export const GlobalNavBar: React.FC<GlobalNavBarProps> = ({ activeTab, onTabPress }) => {
  const { width } = useWindowDimensions();
  
  const tabs = [
    {
      name: 'Home' as const,
      icon: (color: string) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M3 10.182V20a1 1 0 001 1h5v-6h4v6h5a1 1 0 001-1v-9.818a1 1 0 00-.316-.725l-6-5.455a1 1 0 00-1.368 0l-6 5.455A1 1 0 003 10.182z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
    },
    {
      name: 'Quests' as const,
      icon: (color: string) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M14.5 17.5L3 6v-3h3l11.5 11.5M13 19l8-8M17 21l3.5-3.5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
    },
    {
      name: 'Friends' as const,
      icon: (color: string) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
    },
    {
      name: 'Profile' as const,
      icon: (color: string) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
    },
    {
      name: 'DevCard' as const,
      icon: (color: string) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="2" />
          <Circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="2" />
          <Path d="M7 17a5 5 0 0110 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </Svg>
      ),
    },
  ];

  return (
    <View style={[styles.navContainer, { width }]}>
      <View style={styles.tabWrapper}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          const color = isActive ? '#39D353' : '#8B949E';

          return (
            <Pressable
              key={tab.name}
              style={styles.tabButton}
              onPress={() => onTabPress?.(tab.name)}
            >
              <View style={styles.iconContainer}>
                {tab.icon(color)}
              </View>
              
              <Text style={[styles.tabText, { color, fontWeight: isActive ? '700' : '500' }]}>
                {tab.name}
              </Text>
              
              {/* Active dot indicator below the active item */}
              <View style={styles.dotContainer}>
                {isActive && <View style={styles.activeDot} />}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0D1117', // Dark capsule navbar background
    borderTopWidth: 1.5,
    borderTopColor: '#21262D', // Subtle premium border line separating content
    paddingVertical: 10,
    paddingBottom: 24, // Extra safe padding for iOS home indicator compatibility
    zIndex: 999,
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 4,
  },
  iconContainer: {
    marginBottom: 4,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 11,
    letterSpacing: 0.3,
  },
  dotContainer: {
    height: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#39D353', // Small green dot below active item
  },
});
