import { useNavigate } from "react-router-dom";

function StarterSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
  {/* Left side: flex-1 so it fills the row */}
  <div className="flex-1 max-w-xl text-center lg:text-left">
    <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
      Baking Happiness,{" "}
      <span className="text-yellow-600">One Cake at a Time!</span>
    </h1>
    <p className="text-2xl font-bold text-gray-600 mb-6 whitespace-nowrap">
      Celebrate Life's Moments with Our Signature Cakes!
    </p>

    <button
      onClick={() => navigate("/cakes")}
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-2 rounded-full transition"
    >
      Order Your Cake Today 🎉
    </button>

    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm font-semibold text-pink-600">
      <p className="flex items-center">
        <img src="/transport.png" alt="Free Delivery" className="w-6 h-6 mr-2" />
        No delivery charge
      </p>
      <p className="flex items-center">
        <img src="/secure.png" alt="Secure Checkout" className="w-6 h-6 mr-2" />
        100% secure checkout
      </p>
    </div>
 

        </div>
        <div className="flex justify-center">
          <img
            src="/cake-truck-delivery-.png"
            alt="Cake Truck"
            className="w-[450px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default StarterSection;
