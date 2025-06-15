function HowToPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-gray-100 to-white p-4 md:p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">🎮 How to Play</h2>

      <div className="space-y-4 text-base md:text-lg text-gray-700">
        <p className="text-center md:text-left">
          Welcome to <strong>Stake Play</strong>! Here's how the game works:
        </p>

        <ol className="list-decimal pl-5 space-y-2">
          <li>Choose a color: <strong>Red</strong>, <strong>Green</strong>, or <strong>Blue</strong>.</li>
          <li>Select a coin amount you want to stake.</li>
          <li>A 2-minute round will start and countdown begins.</li>
          <li>At the end of the round, one color wins randomly.</li>
          <li>If your color matches the winner, you win! Otherwise, you lose.</li>
        </ol>

        <p className="text-center text-yellow-600 font-semibold">
          Good luck and have fun! 🎉
        </p>
      </div>
    </div>
  );
}

export default HowToPlay;
