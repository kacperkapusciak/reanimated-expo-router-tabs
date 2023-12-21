import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

import { BlurView } from "expo-blur";
import { TabBarButton } from "../../components/TabBarButton";
import { HomeIcon } from "../../icons/HomeIcon";
import { ExploreIcon } from "../../icons/ExploreIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: ({ accessibilityState, onPress }) => (
            <TabBarButton
              title="Home"
              focused={accessibilityState?.selected}
              icon={HomeIcon}
              onPress={onPress}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarButton: ({ accessibilityState, onPress }) => (
            <TabBarButton
              title="Explore"
              focused={accessibilityState?.selected}
              icon={ExploreIcon}
              onPress={onPress}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: ({ accessibilityState, onPress }) => (
            <TabBarButton
              title="Profile"
              focused={accessibilityState?.selected}
              icon={ProfileIcon}
              onPress={onPress}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 11,
  },
  tabBarStyle: {
    position: "absolute",
    borderTopWidth: 0,
  },
});
