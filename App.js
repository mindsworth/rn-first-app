import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/Start";
import Game from "./screens/Game";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => setUserNumber(selectedNumber);

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {userNumber ? (
        <Game userChoice={userNumber} />
      ) : (
        <StartGame onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
