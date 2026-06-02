import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../setup screens/components/Text';

export const RepositorySummaryCard: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Column 1: Total Commits */}
      <View style={styles.statColumn}>
        <Text style={styles.label}>TOTAL COMMITS</Text>
        <Text style={styles.value}>835</Text>
      </View>
      
      {/* Divider */}
      <View style={styles.divider} />
      
      {/* Column 2: Total Stars */}
      <View style={styles.statColumn}>
        <Text style={styles.label}>TOTAL STARS</Text>
        <Text style={[styles.value, styles.starColor]}>3,053</Text>
      </View>
      
      {/* Divider */}
      <View style={styles.divider} />
      
      {/* Column 3: Active Branches */}
      <View style={styles.statColumn}>
        <Text style={styles.label}>ACTIVE BRANCHES</Text>
        <Text style={[styles.value, styles.branchColor]}>20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161B22', // GitHub deep dark card background
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#30363D', // Premium subtle grey border
    paddingVertical: 18,
    paddingHorizontal: 12,
    width: '92%',
    alignSelf: 'center',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  statColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: '#21262D', // Subtle vertical border line
  },
  label: {
    color: '#8B949E',
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
    fontFamily: 'JetBrainsMono-ExtraBold', // monospaced brand uppercase
    textAlign: 'center',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'JetBrainsMono-ExtraBold',
    letterSpacing: 0.2,
  },
  starColor: {
    color: '#FF8C00', // Gold/orange star count color
  },
  branchColor: {
    color: '#388BFD', // Bright branch blue color
  },
});
