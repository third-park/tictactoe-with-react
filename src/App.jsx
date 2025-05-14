import { useState } from "react";
import GameBoard from "./assets/components/GameBoard";
import Player from "./assets/components/Player";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function selectSquareHandler() {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="player1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="player2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={selectSquareHandler} activePlayerSymbol={activePlayer}/>
    </div>
  );
}

export default App;
