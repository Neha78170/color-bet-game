import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Stake Play</h1>
      <nav className="space-x-4">
        <Link className="text-white-700 hover:text-blue-700" to="/">Home</Link>
        <Link className="text-white-700 hover:text-blue-700"  to="/how-to-play">How-to-Play</Link>
        <Link className="text-white-700 hover:text-blue-600" to="/history">History</Link>
      </nav>
    </header>
  );
};
export default Header;
