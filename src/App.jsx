import Player from "./assets/components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="player1" symbol="X" />
        <Player initialName="player2" symbol="O" />
      </ol>
      GMAE BOARD
    </div>
  );
}

export default App;
