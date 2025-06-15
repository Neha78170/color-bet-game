function StakeSelector({ stake, setStake }) {
  const stakes = [0.1, 0.2, 0.5, 1, 2, 5];

  return (
    <div className = "w-full px-4 md:px-8">
      <div className="flex flex-wrap justify-center">

      {stakes.map((amt) => (
        <buttongi
          key={amt}
          onClick={() => setStake(amt)}
          className={`border px-4 py-2 rounded hover:bg-gray-100 
            ${stake === amt ? "bg-yellow-300 font-bold" : ""}`}
        >
          {amt} 💰
        </buttongi>
      ))}
      </div>
    </div>
  );
}

export default StakeSelector;
