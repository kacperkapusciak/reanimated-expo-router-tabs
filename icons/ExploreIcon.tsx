import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

interface Props {
  focused: boolean;
  color?: string;
}

export function ExploreIcon({ color = "#001A72", focused, ...rest }: Props) {
  const sv = useDerivedValue(() => {
    return focused ? withSpring(180) : 0;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle} {...rest}>
      <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
        <Path
          d="M13.172 13.172l7.542-1.886-1.886 7.542-7.542 1.886 1.886-7.542z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
}
