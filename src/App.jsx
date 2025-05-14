import { useState } from "react";
import GameBoard from "./assets/components/GameBoard";
import Player from "./assets/components/Player";
import Log from "./assets/components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function selectSquareHandler(rowIndex, colIndex) {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
    setGameTurn(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ]

      return updateTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="player2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={selectSquareHandler} turns={gameTurn} />
      </div>
      <Log />
    </main>
  );
}

export default App;
