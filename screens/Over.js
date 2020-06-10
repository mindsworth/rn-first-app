import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Over = ({ userNumber, onRestartGame, rounds }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game is over</Text>
      <View style={styles.contWrap}>
        <Text>User's Number: {userNumber}</Text>
        <Text>Number of Rounds: {rounds}</Text>
      </View>
      <Button title="Restart Game" onPress={onRestartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
  contWrap: {
    marginBottom: 30,
    marginTop: 30,
    textAlign: "center",
    borderColor: "red",
    borderWidth: 0,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
});

export default Over;
