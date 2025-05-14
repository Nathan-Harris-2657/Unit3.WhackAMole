export default function GameTabs({ score, timeLeft, onRestart }) {
  return (
    <div id="tabsContainer"> 
      <button onClick={onRestart}>Restart</button> {/* Calls restartGame in App */}
    </div>
  );
}