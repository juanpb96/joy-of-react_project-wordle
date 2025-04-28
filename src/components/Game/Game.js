import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

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
  const [keyboardKeys, setKeyboardKeys] = React.useState([
    [
      { key: "Q", status: "" },
      { key: "W", status: "" },
      { key: "E", status: "" },
      { key: "R", status: "" },
      { key: "T", status: "" },
      { key: "Y", status: "" },
      { key: "U", status: "" },
      { key: "I", status: "" },
      { key: "O", status: "" },
      { key: "P", status: "" },
    ],
    [
      { key: "A", status: "" },
      { key: "S", status: "" },
      { key: "D", status: "" },
      { key: "F", status: "" },
      { key: "G", status: "" },
      { key: "H", status: "" },
      { key: "J", status: "" },
      { key: "K", status: "" },
      { key: "L", status: "" },
    ],
    [
      { key: "Z", status: "" },
      { key: "X", status: "" },
      { key: "C", status: "" },
      { key: "V", status: "" },
      { key: "B", status: "" },
      { key: "N", status: "" },
      { key: "M", status: "" },
    ],
  ]);

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
    console.log(guessResult);

    const nextGuesses = [...guesses, guessResult];
    setGuesses(nextGuesses);
    checkGameStatus(newGuess, nextGuesses.length);
    updateKeyboardStatus(guessResult);
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
        />
      )}
    </>
  );
}

export default Game;
