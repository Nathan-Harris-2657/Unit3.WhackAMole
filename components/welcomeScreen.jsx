export default function WelcomeScreen({ onStart, highScore }) {
  return (
    <>
      <div id="container1">
        <div id="title">Wacka Mole!</div>
        <div id="welcome">Welcome to Wacka Mole</div>
        <div id="instructions">See How Many Moles You Can Wack Before The Timer Runs Out</div>
        <button id="playButton" onClick={onStart}>Play</button>
        <div id="highScoreTitle">High Score: {highScore}</div>
      </div>
    </>
  );
}