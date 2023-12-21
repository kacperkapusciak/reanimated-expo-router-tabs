import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  focused: boolean;
}

export function HomeIcon({ color = "#001A72", focused, ...rest }: Props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <Path
        d="M5.333 13.333L16 4l10.667 9.333v13.334H20v-5.334a4 4 0 00-8 0v5.334H5.333V13.333z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
