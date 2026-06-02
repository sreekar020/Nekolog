import React from 'react';
import { View, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { Text } from './Text';

interface GlobalNavBarProps {
  activeTab: 'Home' | 'Quests' | 'Profile' | 'DevCard';
  onTabPress?: (tab: 'Home' | 'Quests' | 'Profile' | 'DevCard') => void;
}

export const GlobalNavBar: React.FC<GlobalNavBarProps> = ({ activeTab, onTabPress }) => {
  const { width } = useWindowDimensions();
  
  const tabs = [
    {
      name: 'Home' as const,
      icon: (color: string) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M9 22V12h6v10"
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
          {/* Trophy Cup Outline */}
          <Path
            d="M6 9c0 3.31 2.69 6 6 6s6-2.69 6-6V3H6v6z"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Handle */}
          <Path
            d="M6 6H4.5A2.5 2.5 0 0 0 2 8.5v1A2.5 2.5 0 0 0 4.5 12H6"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Handle */}
          <Path
            d="M18 6h1.5a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5H18"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Stem Stand */}
          <Path
            d="M12 15v5"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Base */}
          <Path
            d="M8 20h8"
            stroke={color}
            strokeWidth="2.2"
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
