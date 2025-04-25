import React from "react";

function GuessList({ guesses = [] }) {
  if (guesses.length === 0) {
    return <p>Try to guess the word!</p>;
  }

  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <p key={id} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
