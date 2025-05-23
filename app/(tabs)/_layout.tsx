import { Tabs, usePathname } from "expo-router";
import { StyleSheet } from "react-native";

import { BlurView } from "expo-blur";
import { TabBarButton } from "../../components/TabBarButton";
import { HomeIcon } from "../../icons/HomeIcon";
import { ExploreIcon } from "../../icons/ExploreIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";

export default function TabLayout() {
  const pathname = usePathname();
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
          tabBarButton: ({ onPress }) => (
            <TabBarButton
              title="Home"
              focused={pathname === "/"}
              icon={HomeIcon}
              onPress={onPress}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarButton: ({ onPress }) => (
            <TabBarButton
              title="Explore"
              focused={pathname === "/explore"}
              icon={ExploreIcon}
              onPress={onPress}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: ({ onPress }) => (
            <TabBarButton
              title="Profile"
              focused={pathname === "/profile"}
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
