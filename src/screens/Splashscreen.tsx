import React, { useEffect } from 'react';
import { View, StyleSheet, Image, useWindowDimensions, StatusBar } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import { NekoLogTitle } from '../components/NekoLogTitle';

interface SplashscreenProps {
  onComplete: () => void;
}

export const Splashscreen: React.FC<SplashscreenProps> = ({ onComplete }) => {
  const { width, height } = useWindowDimensions();

  // Animation values (stable fade-in)
  const catOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    // 1. Cat mascot fade-in (stable)
    catOpacity.value = withTiming(1.0, { duration: 1200 });

    // 2. Staggered text fade-in (stable)
    textOpacity.value = withDelay(400, withTiming(1.0, { duration: 1000 }));

    // 3. Smooth transition timeout to trigger onComplete
    const timeout = setTimeout(() => {
      runOnJS(onComplete)();
    }, 3200);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  // Animated styles (fade-in only)
  const catAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: catOpacity.value,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  // Calculate dynamic dimensions for cross-device support
  const isLandscape = width > height;
  const maxImageSize = Math.min(width * 0.85, height * 0.55);
  const imageSize = isLandscape ? height * 0.5 : Math.min(maxImageSize, 380);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Main Content Container - shifted slightly upwards */}
      <View style={styles.contentContainer}>
        {/* Cat Mascot Image */}
        <Animated.View style={[styles.catWrapper, catAnimatedStyle]}>
          <Image
            source={require('../../assets/images/splash_neko.png')}
            style={{ width: imageSize, height: imageSize }}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Brand Title - Reusable NekoLogTitle unified component */}
        <Animated.View style={[styles.textWrapper, textAnimatedStyle]}>
          <NekoLogTitle fontSize={40} letterSpacing={5} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black for seamless blending
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: -80, // Elevated positioning
  },
  catWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
