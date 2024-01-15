import { StyleSheet, View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { COLORS, icons, images, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../../components";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Hi Mom.!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
