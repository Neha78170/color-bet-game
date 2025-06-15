import { useEffect, useRef, useState } from "react";
import ColorSelector from "../Components/ColorSelector";
import StakeSelector from "../Components/StakeSelector";
import CountdownTimer from "../Components/CountdownTimer";
import ResultDisplay from "../Components/ResultDisplay";
import getRandomWinner from "../Utils/getRandomWinner";

function GamePage({ gameHistory, setGameHistory }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [stake, setStake] = useState(null);
  const [winnerColor, setWinnerColor] = useState(null);
  const [round, setRound] = useState(1);
  const [timerKey, setTimerKey] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const audioRef = useRef(null);

  // 🎵 Handle background music on game start
  useEffect(() => {
    if (gameStarted) {
      audioRef.current = new Audio("/timer-music.mp3");
      audioRef.current.loop = true;

      // Try playing music (some browsers block autoplay without interaction)
      audioRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [gameStarted]);

  const handleTimerEnd = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const winner = getRandomWinner();
    setWinnerColor(winner);
    const isWin = winner === selectedColor;

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

    alert(`Round Over! Winner: ${winner} | You ${isWin ? "Won 🎉" : "Lost ❌"}`);

    setRound((prev) => prev + 1);
    setTimerKey((prev) => prev + 1);
    setGameStarted(false); // stop music trigger
  };

  const handleSubmit = () => {
    if (selectedColor && stake) {
      setGameStarted(true); // 🟢 Start timer & music
      alert(`You chose ${selectedColor} with stake ${stake}`);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 space-y-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center">🎮 Stake Play</h2>

      {/* Info */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-2 text-lg text-center">
        <span>👥 Online Users: 12</span>
        <span>🔁 Round: {round}</span>
        <span>
          ⏱ Time Left:{" "}
          {gameStarted && (
            <CountdownTimer key={timerKey} onTimeEnd={handleTimerEnd} />
          )}
        </span>
      </div>

      {/* Selected Info */}
      <div className="text-center space-y-1">
        <p>
          🎨 Selected Color: <strong>{selectedColor || "None"}</strong>
        </p>
        <p>
          💰 Stake: <strong>{stake || "None"}</strong>
        </p>
      </div>

      {/* Color & Stake Selectors */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <StakeSelector stake={stake} setStake={setStake} />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded w-full max-w-xs"
          disabled={!selectedColor || !stake || gameStarted}
          onClick={handleSubmit}
        >
          ✅ Submit Choice
        </button>
      </div>

      {/* Result Display */}
      {winnerColor && (
        <ResultDisplay
          selectedColor={selectedColor}
          winnerColor={winnerColor}
          stake={stake}
        />
      )}
    </div>
  );
}

export default GamePage;
