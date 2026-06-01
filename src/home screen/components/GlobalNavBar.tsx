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
          <Path
            d="M18 2H6c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A6.01 6.01 0 0 0 11 13.93V18H8v2h8v-2h-3v-4.07c1.94-.36 3.53-1.63 4.39-3.44A4.99 4.99 0 0 0 20 7V4c0-1.1-.9-2-2-2zm-12 5V4h2v3c0 .55-.45 1-1 1s-1-.45-1-1zm12 0c0 .55-.45 1-1 1s-1-.45-1-1V4h2v3z"
            fill={color}
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
