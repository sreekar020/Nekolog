import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Splashscreen } from './src/setup screens/Splashscreen';
import { LoginScreen } from './src/setup screens/login';
import { HomeScreen } from './src/home screen/Home';
import { QuestScreen } from './src/quest screen/quest';
import { ProfileScreen } from './src/profile screen/profile screen';
import { useAppStore } from './src/store/useAppStore';

export default function App() {
  // Load custom Roboto, JetBrains Mono, and Monaspace Neon fonts globally
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'JetBrainsMono-ExtraBold': require('./assets/fonts/JetBrainsMono-ExtraBold.ttf'),
    'MonaspaceNeon-Regular': require('./assets/fonts/MonaspaceNeon-Regular.otf'),
    'MonaspaceNeon-Bold': require('./assets/fonts/MonaspaceNeon-Bold.otf'),
  });

  const currentScreen = useAppStore((state) => state.currentScreen);
  const setCurrentScreen = useAppStore((state) => state.setScreen);
  const activeTab = useAppStore((state) => state.activeTab);
  const setActiveTab = useAppStore((state) => state.setActiveTab);
  const [hasStartedTransition, setHasStartedTransition] = useState(false);
  const transitionProgress = useSharedValue(1.0); // 1.0 = full splash, 0.0 = full login

  // Outgoing splash overlay animations
  const splashStyle = useAnimatedStyle(() => {
    return {
      opacity: transitionProgress.value,
      transform: [
        { scale: 1.0 + (1.0 - transitionProgress.value) * 0.06 } // subtle outward growth
      ],
    };
  });

  // Incoming login overlay animations
  const loginStyle = useAnimatedStyle(() => {
    return {
      opacity: 1.0 - transitionProgress.value,
    };
  });

  const handleSplashComplete = () => {
    setHasStartedTransition(true);
    // Cross-fade timing: 600ms ultra-smooth transition
    transitionProgress.value = withTiming(0.0, { duration: 600 }, (finished) => {
      if (finished) {
        runOnJS(setCurrentScreen)('login');
      }
    });
  };

  const handleLoginComplete = () => {
    setCurrentScreen('home');
  };

  // Wait for Roboto font loading before rendering the React Native views
  if (!fontsLoaded) {
    return <View style={styles.loaderContainer} />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* 1. Home Screen (renders after login complete) */}
        {currentScreen === 'home' && activeTab === 'Home' && (
          <HomeScreen activeTab={activeTab} onTabPress={setActiveTab} />
        )}

        {/* 1b. Quest Screen */}
        {currentScreen === 'home' && activeTab === 'Quests' && (
          <QuestScreen onTabPress={setActiveTab} />
        )}

        {/* 1c. Profile Screen */}
        {currentScreen === 'home' && activeTab === 'Profile' && (
          <ProfileScreen onTabPress={setActiveTab} />
        )}

        {/* 2. Login Screen (rendered in background, fades in) */}
        {(currentScreen === 'login' || (currentScreen === 'splash' && hasStartedTransition)) && (
          <Animated.View style={[StyleSheet.absoluteFill, loginStyle]}>
            <LoginScreen onLogin={handleLoginComplete} />
          </Animated.View>
        )}

        {/* 3. Splash Screen (rendered on top, fades out) */}
        {currentScreen === 'splash' && (
          <Animated.View style={[StyleSheet.absoluteFill, splashStyle]}>
            <Splashscreen onComplete={handleSplashComplete} />
          </Animated.View>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000000', // Matches the splash background seamlessly
  },
});
