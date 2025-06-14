import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import GamePage from "./Pages/GamePages";
import HistoryPage from "./Pages/HistoryPage";
import HowToPlay from "./Pages/HowToPlay";
function App() {
 const [gameHistory, setGameHistory] = useState([])
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/how-to-play" element={<HowToPlay/>} />
        <Route path="/history" element={<HistoryPage gameHistory={gameHistory}/>} />
      </Routes>
    </Router>
  );
}

export default App;
