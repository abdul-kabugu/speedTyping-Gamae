import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

export default function App() {
  const [timeRemainig, setTimeRemaining] = useState(5);
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");
  const [isGameRunning, setOnGame] = useState(false);
  const textRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  //show by default when time is over

  function gameEnde() {
    setWordCount(wordaCalculator(text));
    setOnGame(false);
  }
  // start game func

  function startGame() {
    setOnGame(true);
    setTimeRemaining(5);
    textRef.current.focus();
  }

  const wordaCalculator = (text) => {
    const textArr = text.trim().split(" ");
    return textArr.length;
  };
  useEffect(() => {
    if (isGameRunning && timeRemainig > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemainig === 0) {
      gameEnde();
    }
  }, [timeRemainig, isGameRunning]);

  return (
    <div className="App">
      <h1>how fast do you type? </h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textRef}
        disabled={!isGameRunning}
      />
      <h4> time remaining: {timeRemainig} </h4>
      <button onClick={startGame} disabled={isGameRunning}>
        {" "}
        start
      </button>
      <h1 className="word"> word counting: {wordCount} </h1>
    </div>
  );
}
