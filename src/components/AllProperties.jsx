import React from "react";
import { allProperties } from "../../project data/data";
import PropertyClickedSection from "./PropertyClickedSection";
import {
  FaArrowLeft,
  FaBath,
  FaBed,
  FaHeart,
  FaRulerCombined,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-6 md:mx-10">
      <div className="">
        <button onClick={() => navigate(-1)} className="mt-20">
          <FaArrowLeft />
        </button>
        <h2 className="my-5">Properties</h2>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 font-heading
             gap-5 overflow-x-hidden"
      >
        {allProperties.map((property) => (
          <div
            onClick={() => {
              navigate(`/properties/${properties.id}`);
            }}
            key={property.id}
            className="border-2 w-[18.5rem] mx-auto rounded-lg overflow-hidden
                   shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <div className="relative">
              <img src={property.image} alt="house" className="w-[18.5rem]" />
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
    </section>
  );
};

export default AllProperties;
