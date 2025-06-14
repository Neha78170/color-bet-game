function ColorSelector({ selectedColor, setSelectedColor }) {
  const colors = ["Red", "Green", "Blue"];

  return (
    <div className="flex justify-center gap-4">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`px-6 py-2 rounded text-white font-semibold 
            ${color === "Red" ? "bg-red-500" : color === "Green" ? "bg-green-500" : "bg-blue-500"} 
            ${selectedColor === color ? "ring-4 ring-yellow-300" : ""}`}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;

