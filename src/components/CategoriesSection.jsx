import { useEffect, useState } from "react";

const categories = [
  { label: "New Theme", icon: "🎉" },
  { label: "Raksha", icon: "🎁" },
  { label: "Anniversary", icon: "💖" },
  { label: "Graduation", icon: "🎓" },
  { label: "Birthday", icon: "🎂" },
  { label: "Wedding", icon: "💍" },
  { label: "Kids Love", icon: "🧸" },
];

// Images from public/images/
const imageList = [
  "/images/birthday.png",
  "/images/brownie.png",
  "/images/delight.png",
  "/images/redvelvet.png"
];

function CategoriesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-6">
        Bringing joy to your celebrations, one slice at a time ✨
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className="px-5 py-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition"
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-3xl mx-auto">
        <img
          src={imageList[currentImageIndex]}
          alt="Dessert Display"
          className="w-full rounded-lg shadow-lg transition duration-700 ease-in-out"
        />

        {/* Indicator Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {imageList.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
