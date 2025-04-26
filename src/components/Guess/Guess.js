import React from "react";
import { range } from "../../utils";

function Guess({ letters }) {
  const cells = range(0, 5);

  return (
    <p className="guess">
      {cells.map((_, index) => (
        <span key={index} className={`cell ${letters[index]?.status || ""}`}>
          {letters[index]?.letter || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
