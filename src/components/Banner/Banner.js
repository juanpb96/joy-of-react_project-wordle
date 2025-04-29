import React from "react";

function Banner({ answer, hasWon, numOfGuesses, onRestart }) {
  const bannerClass = hasWon ? "happy" : "sad";

  return (
    <div className={`${bannerClass} banner`}>
      {hasWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button className="restart-btn" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default Banner;
