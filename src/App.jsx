import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Info from "./components/Info";
import FeaturedPropertiesSection from "./components/FeaturedPropertiesSection";
import AboutSection from "./components/AboutSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <Info />
      <FeaturedPropertiesSection />
      <AboutSection />
    </>
  );
}

export default App;
