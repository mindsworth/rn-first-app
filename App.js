import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/Start";
import Game from "./screens/Game";
import Over from "./screens/Over";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundCount, setRoundCount] = useState(0);

  const startGameHandler = (selectedNumber) => setUserNumber(selectedNumber);

  const endGameHandler = (round) => {
    setRoundCount(round);
  };

  const restartGameHandler = (round) => {
    setRoundCount(0);
    setUserNumber(null);
  };

  const renderContent = () => {
    if (userNumber && roundCount <= 0) {
      return <Game userChoice={userNumber} onEndGame={endGameHandler} />;
    } else if (roundCount > 0) {
      return (
        <Over
          userNumber={userNumber}
          rounds={roundCount}
          onRestartGame={restartGameHandler}
        />
      );
    }

    return <StartGame onStartGame={startGameHandler} />;
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
