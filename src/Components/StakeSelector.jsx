function StakeSelector({ stake, setStake }) {
  const stakes = [0.1, 0.2, 0.5, 1, 2, 5];

  return (
    <div className="flex justify-center gap-4">
      {stakes.map((amt) => (
        <button
          key={amt}
          onClick={() => setStake(amt)}
          className={`border px-4 py-2 rounded hover:bg-gray-100 
            ${stake === amt ? "bg-yellow-300 font-bold" : ""}`}
        >
          {amt} 💰
        </button>
      ))}
    </div>
  );
}

export default StakeSelector;
