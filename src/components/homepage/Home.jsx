import React from "react";

import HeroSection from "../HeroSection";
import Info from "../Info";
import FeaturedPropertiesSection from "../FeaturedPropertiesSection";
import AboutSection from "../AboutSection";
import BuySection from "../BuySection";
import SellSection from "../SellSection";
import RentalSection from "../RentalSection";
import Contact from "../Contact";
import Schedule from "../Schedule";
import Properties from "../Properties";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Info />
      <FeaturedPropertiesSection />
      <AboutSection />
      <BuySection />
      <SellSection />
      <RentalSection />
      <Contact />
      <Schedule />
      <Properties />
    </>
  );
};

export default Home;
