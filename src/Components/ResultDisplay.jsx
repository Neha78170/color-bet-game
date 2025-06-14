import React from "react";

const ResultDisplay = ({ selectedColor, winnerColor, stake })=>{
  const iswin = selectedColor === winnerColor;

  return (
    <div
      className={`p-4 rounded text-center shadow-md ${
        iswin ? "*:bg-green-100" : "bg-red-100"
      }`}
    >
      <h3 className="text-xl text-semibold mb-2">
        {iswin ? "🎉 You Won " : "❌ You Lost"}
      </h3>
      <p>
        🎯 Your Color:<strong>{selectedColor}</strong>{" "}
      </p>
      <p>
        🏆 Winner Color: <strong>{winnerColor}</strong>
      </p>
      <p>
        💰Stake
        <strong>
          {selectedColor}
          {stake}
        </strong>{" "}
      </p>
    </div>
  );
};

export default ResultDisplay;
