import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { checkGuess } from "../../game-helpers";
import { KEYBOARD_KEYS, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState({
    status: false,
    hasWon: "",
  });
  const [keyboardKeys, setKeyboardKeys] = React.useState(KEYBOARD_KEYS);

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

  function updateKeyboardStatus(guessResult) {
    const nextKeyboardKeys = keyboardKeys.map((row) =>
      row.map((keyObj) => {
        const guessLetter = guessResult.find(
          ({ letter }) => letter === keyObj.key
        );

        if (guessLetter) {
          return { ...keyObj, status: guessLetter.status };
        }

        return keyObj;
      })
    );

    setKeyboardKeys(nextKeyboardKeys);
  }

  function addGuess(newGuess) {
    const guessResult = checkGuess(newGuess, answer);
    const nextGuesses = [...guesses, guessResult];

    setGuesses(nextGuesses);
    checkGameStatus(newGuess, nextGuesses.length);
    updateKeyboardStatus(guessResult);
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameOver({
      status: false,
      hasWon: "",
    });
    setKeyboardKeys(KEYBOARD_KEYS);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuess={addGuess} isGameOver={gameOver.status} />
      <Keyboard keyboardKeys={keyboardKeys} />
      {gameOver.status && (
        <Banner
          answer={answer}
          hasWon={gameOver.hasWon}
          numOfGuesses={guesses.length}
          onRestart={restartGame}
        />
      )}
    </>
  );
}

export default Game;
