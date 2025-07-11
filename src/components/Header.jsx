import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex  justify-between px-20 py-6 bg-white shadow-md sticky  ">

      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold tracking-tight ">
        <span className="text-pink-500">Sweet</span>
        <span className="text-yellow-600">Spot</span>
      </Link>

      {/* Search + Nav (center) */}
      <div className="flex items-center space-x-28 px-8">
        {/* Search Bar */}
        <div className="w-[500px]">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search cakes..."

              
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-gray-800 
           focus:outline-none focus:ring-2 focus:ring-pink-400 hover:border-pink-400 
           transition duration-200 ease-in-out"

            />
          </div>
        </div>

       {/* Navigation */}
<nav className="flex space-x-8 font-bold text-xl tracking-wide">
  <Link to="/" className="text-pink-500 hover:text-gray-600 transition duration-200">Home</Link>
  <Link to="/cakes" className="text-pink-500 hover:text-gray-600 transition duration-200">Cakes</Link>
  <Link to="/customize" className="text-pink-500 hover:text-gray-600 transition duration-200">Customize</Link>
  <Link to="/contact" className="text-pink-500 hover:text-gray-600 transition duration-200">Contact</Link>
</nav>

      </div>

      {/* Icons */} 
      <div className="flex items-center space-x-4 text-2xl gap-5">
       <button title="Cart" className="text-3xl hover:text-pink-600">🛒</button>

<div className="flex flex-col items-center text-gray-700 hover:text-pink-600 cursor-pointer">
  <span className="text-3xl">👤</span>
</div>

      </div>
    </header>
  );
}

export default Header;
