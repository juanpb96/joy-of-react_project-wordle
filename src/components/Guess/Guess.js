import React from "react";
import { range } from "../../utils";

function Guess({ word = "" }) {
  const cells = range(0, 5);
  const letters = word.split("");

  return (
    <p className="guess">
      {cells.map((_, index) => (
        <span key={index} className="cell">
          {letters[index] || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
