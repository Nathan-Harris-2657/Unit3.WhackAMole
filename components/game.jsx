import { useState, useEffect } from "react";

export default function Game({ onGameEnd }) {
  const [molePosition, setMolePosition] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  
  useEffect(() => {
    if (timeLeft > 0) {
      const moleInterval = setInterval(() => {
        setMolePosition(Math.floor(Math.random() * 9));
      }, 1000);

      const timerInterval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev > 1) return prev - 1;
          clearInterval(moleInterval);
          clearInterval(timerInterval);
          onGameEnd(score); // Send final score to update high score
          return 0;
        });
      }, 1000);

      return () => {
        clearInterval(moleInterval);
        clearInterval(timerInterval);
      };
    }
  }, [timeLeft]);

  function handleMoleClick() {
    if (timeLeft > 0) setScore(prev => prev + 1);
  }

  return (
    <>
      <div id="tabsContainer">
        <div id="score">Score: {score}</div>
        <div id="timer">Time Left: {timeLeft}s</div>
      </div>
      <div id="gameContainer">
        {Array(9).fill(null).map((_, index) => (
          <div key={index} onClick={molePosition === index ? handleMoleClick : null}>
            {timeLeft > 0 && molePosition === index ? (
              <img src="/mole.png" alt="Mole" />
            ) : (
              <img src="/hole.png" alt="Hole" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}