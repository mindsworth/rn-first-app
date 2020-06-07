import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Over = () => {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Over;
