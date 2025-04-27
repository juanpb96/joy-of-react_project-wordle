import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState({
    status: false,
    hasWon: "",
  });

  function checkGameStatus(newGuess, numOfGuesses) {
    if (newGuess === answer) {
      setGameOver({
        status: true,
        hasWon: true,
      });
    } else if (numOfGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameOver({
        status: true,
        hasWon: false,
      });
    }
  }

  function addGuess(newGuess) {
    const nextGuesses = [...guesses, checkGuess(newGuess, answer)];
    setGuesses(nextGuesses);
    checkGameStatus(newGuess, nextGuesses.length);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuess={addGuess} isGameOver={gameOver.status} />
      {gameOver.status && (
        <Banner
          answer={answer}
          hasWon={gameOver.hasWon}
          numOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
