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

export function ProfileIcon({ color = "#001A72", focused, ...rest }: Props) {
  const sv = useDerivedValue(() => {
    return focused ? withSpring(360, { damping: 50 }) : 0;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${sv.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle} {...rest}>
      <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
        <Path
          d="M24 24.944C24 22.784 22.438 20 20 20h-8c-2.438 0-4 2.785-4 4.944M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12S4 22.627 4 16zm16-4a4 4 0 11-8 0 4 4 0 018 0z"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </Animated.View>
  );
}
