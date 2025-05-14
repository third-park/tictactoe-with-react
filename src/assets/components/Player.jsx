import React, { useEffect, useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log(isEditing);
  }, [isEditing]);

  function handleEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    let { target } = event;
    setPlayerName(target.value);
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
