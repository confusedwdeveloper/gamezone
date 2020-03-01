import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import {Dimensions} from 'react-native';

export default function Header({ title }) {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width - 20,
    height: "100%",
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1

    // marginLeft: "40"
  },
  icon: {
    // marginRight: 60
    position: "absolute",
    left: 16
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  headerTitle: {
    flexDirection: "row"
  }
});
