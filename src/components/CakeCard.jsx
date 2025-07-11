import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const CakeCard = ({ name, price, image, rating }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  // Convert numeric rating to stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-64 hover:shadow-xl transition-shadow group">
      {/* Heart Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleLikeToggle}
          className="text-red-500 text-xl focus:outline-none"
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-40 bg-white overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">₹{price}</p>

        {/* Star Rating */}
        <div className="flex items-center mt-2 space-x-0.5">
          {renderStars(rating)}
        </div>

        {/* Add to Cart */}
        <button className="mt-3 w-full bg-pink-500 text-white text-sm py-1.5 rounded font-semibold hover:bg-pink-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CakeCard;
