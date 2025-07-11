import CakeCard from "./CakeCard";
import cakes from "../data/cakes.json";

const CakeGallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Cake Gallery</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} {...cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeGallery;
