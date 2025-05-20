import React, { useEffect, useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log(isEditing);
  }, [isEditing]);

  function handleEditing() {
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName);
  }

  function handleChange(event) {
    let { target } = event;
    setPlayerName(target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing){
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange}></input>
    )
  }

  return (
    <li className={isActive ? 'active' : null}>
      <span className="player">
        <span className="player-name">
          {isEditing ? <input type="text" value={playerName} onChange={handleChange} required /> : playerName}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}

export default Player;
