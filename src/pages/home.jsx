// src/pages/Home.jsx
import React from "react";
import StarterSection from "../components/StarterSection";
import CategoriesSection from "../components/CategoriesSection";
import CakeGallery from "../components/CakeGallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Customize from "../components/Customize";

function Home() {
  return (
    <div className="font-sans">
      <StarterSection />
      <CategoriesSection />
      <CakeGallery />
      <Customize/>
      <Testimonials />
      
      <Footer />
    </div>
  );
}

export default Home;
