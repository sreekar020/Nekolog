import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, TextInput, Platform, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from '../setup screens/components/Text';
import { GlobalProfileCard } from '../setup screens/components/GlobalProfileCard';
import { useAppStore } from '../store/useAppStore';
import { RepositorySummaryCard } from './components/RepositorySummaryCard';
import { RepositoriesList } from './components/RepositoriesList';
import { GitPipelineGraph } from './components/GitPipelineGraph';

export const AllReposScreen: React.FC = () => {
  const setProfileSubScreen = useAppStore((state) => state.setProfileSubScreen);

  return (
    <View style={styles.container}>
      {/* 1. Header Global Profile Card (Anchored on top) */}
      <View style={styles.headerProfileCard}>
        <GlobalProfileCard
          onNotificationPress={() => console.log('Notification pressed')}
        />
      </View>

      {/* 2. Scrollable Repos Dashboard Area */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* A. Repository Explorer Header with Back Trigger */}
        <View style={styles.explorerHeader}>
          <View style={styles.headerLeft}>
            {/* Back Chevron Pressable Button */}
            <Pressable 
              style={styles.backButton}
              onPress={() => setProfileSubScreen('main')}
            >
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="#F0F6FC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Pressable>
            
            <Text style={styles.explorerTitle}>REPOSITORY EXPLORER</Text>
          </View>

          <View style={styles.repoCountPill}>
            <Text style={styles.repoCountText}>5 REPOSITORIES</Text>
          </View>
        </View>

        {/* B. Search and Filter Bar Row */}
        <View style={styles.searchBarRow}>
          {/* Search Input Container */}
          <View style={styles.searchInputContainer}>
            <Svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={styles.searchIcon}>
              <Path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="#8B949E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <TextInput
              style={styles.searchInput}
              placeholder="Search repositories..."
              placeholderTextColor="#8B949E"
              editable={false} // Presentation layout
            />
          </View>

          {/* Filter Button */}
          <Pressable style={styles.filterButton}>
            <Svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={styles.filterIcon}>
              <Path
                d="M4 6h16M4 12h12M4 18h8"
                stroke="#8B949E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={styles.filterText}>Filter</Text>
          </Pressable>
        </View>

        {/* C. Repository Summary Statistics Card */}
        <RepositorySummaryCard />

        {/* D. Repositories Scrollable List */}
        <RepositoriesList />

        {/* E. Git Branch Pipeline Graphs Card */}
        <GitPipelineGraph />

        {/* Dynamic spacer ensuring bottom navigation never overlaps scroll elements */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black screen background
  },
  headerProfileCard: {
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 40) : 8,
    paddingBottom: 6,
    backgroundColor: '#000000',
    zIndex: 100,
  },
  scrollContent: {
    paddingTop: 4,
    paddingBottom: 24,
  },
  explorerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 14,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#30363D',
    backgroundColor: 'rgba(22, 27, 34, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  explorerTitle: {
    fontFamily: 'JetBrainsMono-ExtraBold', // Technical programmer monospace font
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  repoCountPill: {
    backgroundColor: 'rgba(57, 211, 83, 0.08)', // green translucent
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4.5,
    borderWidth: 1,
    borderColor: 'rgba(57, 211, 83, 0.25)',
  },
  repoCountText: {
    color: '#39D353',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.2,
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117', // Extremely dark input fill
    borderWidth: 1.2,
    borderColor: '#30363D',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginRight: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#F0F6FC',
    fontSize: 13,
    padding: 0,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(22, 27, 34, 0.4)',
    borderWidth: 1.2,
    borderColor: '#30363D',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
  },
  filterIcon: {
    marginRight: 6,
  },
  filterText: {
    color: '#F0F6FC',
    fontSize: 12.5,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: 100, // Safe padding ensuring scrollable lists are never blocked by GlobalNavBar
  },
});

export default AllReposScreen;
