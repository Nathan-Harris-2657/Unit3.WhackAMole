import { useState } from "react";
import WelcomeScreen from "../components/welcomeScreen";
import GameTabs from "../components/score-timer-restart";
import Game from "../components/game";

export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  function startGame() {
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(30);
  }

  function handleGameEnd(finalScore) {
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem("highScore", finalScore);
    }
    setIsGameActive(false);
  }

  function restartGame() {
    setIsGameActive(false); // Go back to welcome screen
    setScore(0);
    setTimeLeft(30);
  }

  return (
    <>
      {!isGameActive ? (
        <WelcomeScreen onStart={startGame} highScore={highScore} />
      ) : (
        <>
          <GameTabs score={score} timeLeft={timeLeft} onRestart={restartGame} />
          <Game onGameEnd={handleGameEnd} setScore={setScore} setTimeLeft={setTimeLeft} />
        </>
      )}
    </>
  );
}