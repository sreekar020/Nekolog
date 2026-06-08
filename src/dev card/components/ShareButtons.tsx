import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Svg, { Path, Rect, Circle, Polyline, Line } from 'react-native-svg';
import { Text } from '../../setup screens/components/Text';

export const ShareButtons: React.FC = () => {
  const handleShare = (platform: string) => {
    Alert.alert(
      "Share Developer Identity",
      `Simulating sharing your DevPulse card to ${platform}...`,
      [{ text: "OK", onPress: () => console.log(`${platform} share confirmed`) }]
    );
  };

  const handleSave = () => {
    Alert.alert(
      "Card Exported",
      "Saved your DevPulse card as PNG to your device gallery successfully!",
      [{ text: "Awesome", onPress: () => console.log('PNG saved successfully') }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Row 1: LinkedIn & Twitter / X */}
      <View style={styles.buttonRow}>
        <Pressable
          style={[styles.button, styles.linkedinBtn]}
          onPress={() => handleShare('LinkedIn')}
        >
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
            <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <Rect x="2" y="9" width="4" height="12" />
            <Circle cx="4" cy="4" r="2" />
          </Svg>
          <Text style={styles.whiteBtnText}>LinkedIn</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.twitterBtn]}
          onPress={() => handleShare('Twitter / X')}
        >
          <Svg width="14" height="14" viewBox="0 0 24 24" fill="#000000" style={styles.icon}>
            <Path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </Svg>
          <Text style={styles.darkBtnText}>Twitter / X</Text>
        </Pressable>
      </View>

      {/* Row 2: WhatsApp & Save PNG */}
      <View style={styles.buttonRow}>
        <Pressable
          style={[styles.button, styles.whatsappBtn]}
          onPress={() => handleShare('WhatsApp')}
        >
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" style={styles.icon}>
            <Path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.33 1.977 13.86 .953 11.238.953c-5.438 0-9.864 4.37-9.868 9.8-.001 1.77.464 3.5 1.345 5.032l-1.01 3.687 3.774-1.015zm11.722-6.828c-.327-.164-1.93-.952-2.228-1.061-.299-.11-.517-.164-.734.164-.218.327-.844 1.061-1.034 1.28-.19.217-.38.244-.707.081-.327-.164-1.38-.508-2.63-1.622-.972-.867-1.628-1.939-1.819-2.265-.19-.327-.02-.504.143-.666.147-.146.327-.382.49-.573.164-.19.218-.327.327-.545.11-.218.054-.41-.027-.573-.082-.164-.734-1.766-1.007-2.42-.265-.64-.53-.55-.734-.56-.19-.009-.408-.01-.625-.01-.218 0-.571.082-.871.409-.3.328-1.145 1.118-1.145 2.727 0 1.61 1.17 3.16 1.33 3.38.163.217 2.307 3.522 5.59 4.945.78.337 1.39.54 1.86.69.782.25 1.493.21 2.057.127.629-.093 1.93-.789 2.202-1.55.272-.763.272-1.416.19-1.55-.082-.136-.299-.218-.627-.382z" />
          </Svg>
          <Text style={styles.whiteBtnText}>WhatsApp</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.saveBtn]}
          onPress={handleSave}
        >
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
            <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <Polyline points="7 10 12 15 17 10" />
            <Line x1="12" y1="15" x2="12" y2="3" />
          </Svg>
          <Text style={styles.whiteBtnText}>Save PNG</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  linkedinBtn: {
    backgroundColor: '#0077B5', // LinkedIn Blue
    marginRight: 6,
  },
  twitterBtn: {
    backgroundColor: '#F0F6FC', // Off-white Twitter bg
    marginLeft: 6,
  },
  whatsappBtn: {
    backgroundColor: '#25D366', // WhatsApp green
    marginRight: 6,
  },
  saveBtn: {
    backgroundColor: '#161B22', // Dark background
    borderWidth: 1.5,
    borderColor: '#30363D', // Subtle grey border
    marginLeft: 6,
  },
  whiteBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  darkBtnText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
});
