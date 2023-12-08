import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();
  const [enterPlayerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ? enterPlayerName : "enter name"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
