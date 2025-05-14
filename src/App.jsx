import { useState } from "react";
import GameBoard from "./assets/components/GameBoard";
import Player from "./assets/components/Player";
import Log from "./assets/components/Log";

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  function selectSquareHandler(rowIndex, colIndex) {
    // setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

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
        <GameBoard onSelectSquare={selectSquareHandler} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
