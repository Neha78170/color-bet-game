function HistoryPage({ gameHistory }) {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100 text-gray-800 mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">📜 Game History</h2>

      {gameHistory.length === 0 ? (
        <p className="text-center text-gray-600">No game history yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 rounded-lg">
            <thead className="bg-yellow-100">
              <tr className="text-sm md:text-base">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Round</th>
                <th className="p-2 border">Your Color</th>
                <th className="p-2 border">Stake</th>
                <th className="p-2 border">Winner</th>
                <th className="p-2 border">Result</th>
              </tr>
            </thead>
            <tbody>
              {gameHistory.map((item, index) => (
                <tr key={index} className="text-center text-xs md:text-sm bg-white border-t">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{item.round}</td>
                  <td className="p-2 border">{item.selectedColor}</td>
                  <td className="p-2 border">{item.stake}</td>
                  <td className="p-2 border">{item.winner}</td>
                  <td className={`p-2 border font-bold ${item.result === "Win" ? "text-green-600" : "text-red-500"}`}>
                    {item.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
