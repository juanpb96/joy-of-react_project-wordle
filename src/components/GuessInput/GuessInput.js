import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="guessInput">Enter guess:</label>
      <input
        type="text"
        id="guessInput"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        title="Please enter a 5-letter word."
      />
    </form>
  );
}

export default GuessInput;
