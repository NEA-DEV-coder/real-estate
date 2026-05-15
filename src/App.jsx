import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Info from "./components/Info";
import FeaturedPropertiesSection from "./components/FeaturedPropertiesSection";
import AboutSection from "./components/AboutSection";
import BuySection from "./components/BuySection";
import SellSection from "./components/SellSection";
import RentalSection from "./components/RentalSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <Info />
      <FeaturedPropertiesSection />
      <AboutSection />
      <BuySection />
      <SellSection />
      <RentalSection />
    </>
  );
}

export default App;
