import { StyleSheet } from "react-native";
import { Image } from "expo-image";

const image = require("../../assets/explore.jpg");

export default function ExploreScreen() {
  return <Image source={image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 860,
  },
});
