import GameBoard from "./assets/components/GameBoard";
import Player from "./assets/components/Player";
function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="player1" symbol="X" />
        <Player initialName="player2" symbol="O" />
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
