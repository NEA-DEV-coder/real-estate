import React from "react";
import {
  FaArrowRight,
  FaBath,
  FaBed,
  FaHeart,
  FaRulerCombined,
} from "react-icons/fa";
import sampleImg from "../assets/images/estate-bg.png";
import { featuredProperties } from "../../project data/data";

const FeaturedPropertiesSection = () => {
  return (
    <section className="mx-6 lg:mx-8 my-20">
      <div className="lg:flex lg:justify-between items-center my-10 grid">
        <h2 className="text-2xl lg:text-2xl text-[#154878] font-bold mb-0 lg:mb-0">
          Featured Properties
        </h2>
        <button
          className="text-[#154878] flex items-center gap-2 font-bold py-2 
         rounded underline transition duration-300"
        >
          View All Properties{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className="mx-auto">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 font-heading
       gap-y-10 overflow-x-hidden"
        >
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="border-2 w-[17.5rem] mx-auto rounded-lg overflow-hidden
    shadow-xl transition duration-300 hover:shadow-2xl"
            >
              <div className="relative">
                <img src={property.image} alt="house" className="w-[17.5rem]" />
                <span className="absolute text-sm top-2 mx-4 bg-[#154878] text-white py-0 px-2 rounded">
                  {property.option}
                </span>
                <span className="absolute text-[0.5rem] top-2 right-2 bg-[#154878] text-[#fefeff] p-2 rounded-full shadow-md">
                  <FaHeart />
                </span>
              </div>
              <div className="mx-2 mb-3">
                <div className="flex items-center lg:text-sm justify-between mt-4 mb-10 gap-1">
                  <h4 className="font-body font-semibold">
                    {property.houseLocation}
                  </h4>
                  <p className="text-[#154878] lg:text-sm font-bold">
                    {property.price}
                  </p>
                </div>
                <div className="flex items-center font-body justify-between gap-4">
                  <p className="flex items-center lg:text-sm gap-1">
                    <span>
                      <FaBed />
                    </span>
                    {property.beds} Beds
                  </p>
                  <p className="flex items-center lg:text-sm gap-1">
                    <span>
                      <FaBath />
                    </span>
                    {property.bathrooms} Baths
                  </p>
                  <p className="flex items-center lg:text-sm gap-1">
                    <span>
                      <FaRulerCombined />
                    </span>
                    {property.squareMeters}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
