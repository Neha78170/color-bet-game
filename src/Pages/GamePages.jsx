import { useState } from "react";
import ColorSelector from "../Components/ColorSelector";
import StakeSelector from "../Components/StakeSelector";
import CountdownTimer from "../Components/CountdownTimer";
import getRandomWinner from "../Utils/getRandomWinner";
import ResultDisplay from "../Components/ResultDisplay";

function GamePage({gameHistory, setGameHistory}) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [stake, setStake] = useState(null);
  const [winnerColor, setWinnerColor] = useState(null);
  const [round, setRound] = useState(1);
  const [timerKey, setTimerKey] = useState(0);

  const handleTimerEnd = () => {
    const winner = getRandomWinner(); // 🎯 pick winner
    setWinnerColor(winner);  
     console.log("winnerColor set",winner)
    const isWin = winner === selectedColor;

    // Optional: Save result
    setGameHistory((prev) => [
      ...prev,
      {
        round,
        selectedColor,
        stake,
        winner,
        result: isWin ? "Win" : "Loss",
      },
    ]);

    // Alert or display result
    alert(`Round Over! Winner: ${winner} | You ${isWin ? "Won 🎉" : "Lost ❌"}`);

    // Next round
    setRound((prev) => prev + 1);
    setTimerKey((prev) => prev + 1);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">🎮 Stake Play</h2>

      {/* Info */}
      <div className="flex justify-around text-lg">
        <span>👥 Online Users: 12</span>
        <span>🔁 Round: {round} </span>
        <span>⏱ Time Left: <CountdownTimer key={timerKey} onTimeEnd={handleTimerEnd} /></span>
      </div>

      {/* Selected Info */}
      <div className="text-center">
        <p>🎨 Selected Color: <strong>{selectedColor || "None"}</strong></p>
        <p>💰 Stake: <strong>{stake || "None"}</strong></p>
      </div>

      {/* Color & Stake Selectors */}
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <StakeSelector stake={stake} setStake={setStake} />

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded"
          disabled={!selectedColor || !stake}
          onClick={() => alert(`You chose ${selectedColor} with stake ${stake}`)}
        >
          ✅ Submit Choice
        </button>
      </div>
      {winnerColor && (
        <ResultDisplay selectedColor={selectedColor} winnerColor={winnerColor} stake={stake}/>
      )}
    </div>
  );
}

export default GamePage;
