import { Pressable, StyleSheet, Text } from "react-native";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function TabBarButton({ icon, title, onPress, focused }: any) {
  const color = focused ? ACTIVE_COLOR : INACTIVE_COLOR;
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.95);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      style={[styles.pressable, animatedStyle]}
    >
      {icon({ focused, color })}
      <Text style={[styles.label, { color }]}>{title}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 2,
    fontSize: 11,
  },
});
