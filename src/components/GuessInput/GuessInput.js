import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        title="Please enter a 5-letter word."
      />
    </form>
  );
}

export default GuessInput;
