import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Dimensions, StatusBar, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { Text } from './components/Text';
import { NekoLogTitle } from './components/NekoLogTitle';

const { width } = Dimensions.get('window');

export const LoginScreen: React.FC = () => {
  // Mascot frame-by-frame blink state (open -> mid -> closed -> mid -> open)
  const [blinkFrame, setBlinkFrame] = useState<'open' | 'mid' | 'closed'>('open');
  
  // Speech bubble text state for peeking mascot
  const [bubbleText, setBubbleText] = useState("Hi! 👋");

  // Track if peeking cat is visible and active on screen
  const [peekVisible, setPeekVisible] = useState(true);

  // Peeking mascot animations (starts offscreen to the left: -230)
  const peekTranslateX = useSharedValue(-230);
  const bubbleOpacity = useSharedValue(0);
  const bubbleScale = useSharedValue(0);

  // Login UI animations
  const buttonScale = useSharedValue(1);
  const contentOpacity = useSharedValue(0);
  const contentTranslateY = useSharedValue(20);

  useEffect(() => {
    // 1. Fade content in
    contentOpacity.value = withTiming(1, { duration: 100 });
    contentTranslateY.value = withSpring(0, { damping: 45 });

    // 2. Continuous frame-by-frame blinking animation loop (ping-pong sequence)
    let active = true;
    let timeoutId: NodeJS.Timeout;

    const animateBlink = () => {
      if (!active) return;
      
      timeoutId = setTimeout(() => {
        if (!active) return;
        setBlinkFrame('mid');

        timeoutId = setTimeout(() => {
          if (!active) return;
          setBlinkFrame('closed');

          timeoutId = setTimeout(() => {
            if (!active) return;
            setBlinkFrame('mid');

            timeoutId = setTimeout(() => {
              if (!active) return;
              setBlinkFrame('open');
              animateBlink();
            }, 80);

          }, 80);

        }, 80);

      }, 500);
    };

    animateBlink();

    // 3. Peeking mascot entrance (slides in from left after 1.5 seconds)
    const peekTimer = setTimeout(() => {
      if (active && peekVisible) {
        peekTranslateX.value = withSpring(0, { damping: 35, stiffness: 65 });
      }
    }, 500);

    // 4. Speech bubble fade-in (at 2.3 seconds)
    const bubbleTimer = setTimeout(() => {
      if (active && peekVisible) {
        bubbleOpacity.value = withTiming(1, { duration: 200 });
        bubbleScale.value = withSpring(1, { damping: 35 });
      }
    }, 2300);

    // 5. Speech bubble text transition (at 3.8 seconds)
    const textTimer = setTimeout(() => {
      if (active && peekVisible) {
        setBubbleText("Hi, you need GitHub account to Login");
      }
    }, 2000);

    return () => {
      active = false;
      clearTimeout(timeoutId);
      clearTimeout(peekTimer);
      clearTimeout(bubbleTimer);
      clearTimeout(textTimer);
    };
  }, [peekVisible]);

  // Hide peeking cat and slide it back offscreen on click
  const handleScreenPress = () => {
    if (peekVisible) {
      setPeekVisible(false);
      peekTranslateX.value = withSpring(-230, { damping: 16, stiffness: 75 });
      bubbleOpacity.value = withTiming(0, { duration: 200 });
      bubbleScale.value = withTiming(0, { duration: 200 });
    }
  };

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: contentOpacity.value,
      transform: [{ translateY: contentTranslateY.value }],
    };
  });

  const animatedPeekStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: peekTranslateX.value }],
    };
  });

  const animatedBubbleStyle = useAnimatedStyle(() => {
    return {
      opacity: bubbleOpacity.value,
      transform: [{ scale: bubbleScale.value }],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  const handlePressIn = () => {
    buttonScale.value = withTiming(0.96, { duration: 100 });
  };

  const handlePressOut = () => {
    buttonScale.value = withSpring(1.0, { damping: 10 });
  };

  const getMascotSource = () => {
    switch (blinkFrame) {
      case 'mid':
        return require('../../assets/mascot/neko_mid.png');
      case 'closed':
        return require('../../assets/mascot/neko_closed.png');
      case 'open':
      default:
        return require('../../assets/mascot/neko_open.png');
    }
  };

  return (
    <Pressable style={styles.container} onPress={handleScreenPress}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Decorative premium dark glow */}
      <View style={styles.radialGlow} />

      <Animated.View style={[styles.content, animatedContentStyle]}>
        {/* stable Brand Mascot with Blink Loop (No Float, No Shadow) */}
        <View style={styles.mascotWrapper}>
          <Image
            source={getMascotSource()}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        {/* Brand Title - Reusable unified NekoLogTitle component */}
        <NekoLogTitle fontSize={34} letterSpacing={4} />
        
        {/* Tagline */}
        <Text style={styles.taglineText}>Level Up Your Coding Journey</Text>
        
        {/* Decorative divider line */}
        <View style={styles.divider} />

        {/* GitHub Button */}
        <Animated.View style={[styles.buttonWrapper, animatedButtonStyle]}>
          <Pressable
            style={({ pressed }) => [
              styles.githubButton,
              pressed && styles.githubButtonPressed,
            ]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={styles.githubIcon}>
              <Path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                fill="#0D1117"
              />
            </Svg>
            <Text style={styles.buttonText}>Continue with GitHub</Text>
          </Pressable>
        </Animated.View>
        
        {/* Developer note */}
        <Text style={styles.mutedText}>By continuing, you agree to connect your GitHub profile.</Text>
      </Animated.View>

      
      <Animated.View style={[styles.peekingContainer, animatedPeekStyle]}>
        
        <Image
          source={require('../../assets/mascot/Neko_peak.png')}
          style={styles.peekingMascot}
          resizeMode="contain"
        />

        {/* Speech Bubble */}
        <Animated.View style={[styles.speechBubble, animatedBubbleStyle]}>
          <Text style={styles.speechText}>{bubbleText}</Text>
          <View style={styles.speechArrow} />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black for seamless blending
    justifyContent: 'center',
    alignItems: 'center',
  },
  radialGlow: {
    position: 'absolute',
    top: -100,
    left: -100,
    right: -100,
    height: 400,
    backgroundColor: '#39D353',
    opacity: 0.04,
    filter: 'blur(70px)',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  mascotWrapper: {
    width: 200,
    height: 180, 
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mascotImage: {
    width: 210,
    height: 210,
  },
  taglineText: {
    fontSize: 15,
    color: '#8B949E',
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 30,
    textAlign: 'center',
  },
  divider: {
    width: width * 0.7,
    height: 1,
    backgroundColor: '#161B22',
    marginBottom: 30,
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 290,
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39D353',
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#66E08A',
    shadowColor: '#39D353',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  githubButtonPressed: {
    backgroundColor: '#30B847',
  },
  githubIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0D1117',
    letterSpacing: 0.5,
  },
  mutedText: {
    marginTop: 20,
    fontSize: 12,
    color: '#8B949E',
    textAlign: 'center',
  },
  
  // Peeking mascot styling (Left edge)
  peekingContainer: {
    position: 'absolute',
    left: -55, 
    bottom: 40,
    flexDirection: 'row',   
    alignItems: 'center',
    zIndex: 10,
  },
  peekingMascot: {
    width: 250,
    height: 250,
  },
  speechBubble: {
    backgroundColor: '#161B22',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30363D',
    maxWidth: 190,
    marginLeft: -88, // Overlap slightly with cat on the left
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  speechText: {
    color: '#F0F6FC',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 15,
  },
  speechArrow: {
    position: 'absolute',
    left: -15, 
    top: '50%',
    marginTop: -6,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
    borderRightWidth: 6,
    borderRightColor: '#161B22', // Points to the left
  },
});
