import React from "react";

function Keyboard({ keyboardKeys }) {
  return (
    <div className="keyboard-wrapper">
      {keyboardKeys.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map(({ key, status }) => (
            <span key={key} className={`keyboard-key ${status}`}>
              {key.toUpperCase()}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
