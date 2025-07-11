// src/components/CustomizeYourNow.jsx
import { FaQuoteLeft } from "react-icons/fa";

const Customize = () => {
  return (
    <div className="text-center py-10 px-4 bg-white">
      <FaQuoteLeft className="text-3xl text-pink-500 mx-auto mb-2" />
      <h2 className="text-2xl font-bold text-gray-800">Customize Your Now</h2>
      <p className="text-sm text-gray-600 mt-2">
        Make your celebration unique with our personalized cake options.
      </p>
      <button className="mt-4 bg-pink-500 text-white px-5 py-2 text-sm rounded-full font-bold hover:bg-pink-600 transition">
        Customize
      </button>
    </div>
  );
};

export default Customize;
