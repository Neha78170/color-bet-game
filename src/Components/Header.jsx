import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon library

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          🎮 StakePlay
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:space-x-6">
          <Link to="/" className="hover:text-yellow-400">Game</Link>
          <Link to="/history" className="hover:text-yellow-400">History</Link>
          <Link to="/how-to-play" className="hover:text-yellow-400">How to Play</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-6 text-xl px-4 text-center`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Game</Link>
        <Link to="/history" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">History</Link>
        <Link to="/how-to-play" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">How to Play</Link>
      </div>
    </header>
  );
}

export default Header;
