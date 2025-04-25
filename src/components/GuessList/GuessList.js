import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessList({ guesses = [] }) {
  const guessSlots = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessSlots.map((_, index) => (
        <Guess key={index} word={guesses[index]?.guess || ""} />
      ))}
    </div>
  );
}

export default GuessList;
