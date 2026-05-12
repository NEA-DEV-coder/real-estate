import { FaHome, FaPlay, FaSearch, FaTag } from "react-icons/fa";
import heroBg from "../assets/images/estate-bg.png";
import { useState } from "react";

const HeroSection = () => {
  const [option, setOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div
      className="min-h-screen font-heading font-light w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content */}
      <div className="relative z-20 mx-6 md:mx-10 py-14 space-y-10">
        <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-bold">
          Find your perfect <br /> place to call home
        </h1>

        <p className="font-semibold md:text-3xl text-white lg:text-lg">
          Discover Exceptional Properties, homes that <br />
          fit your lifestyle and your future.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-[#0F2A44] md:text-2xl text-white py-2 px-4 rounded">
            Explore Properties
          </button>

          <button className="flex items-center md:text-2xl gap-2 bg-[#7e8c9a] text-white py-2 px-4 rounded">
            <span className="border-2 md:text-lg md:border-4 md:p-2 rounded-full p-1 border-white">
              <FaPlay />
            </span>
            Watch Videos
          </button>
        </div>

        {/* Tabs + Form */}
        <div className="">
          {/* Tabs */}
          <div
            className="flex gap-4 relative z-20 w-80 mt-20 lg:mt-20
           px-4 py-3 bg-white rounded-t-md lg:w-96 md:w-96 md:text-2xl"
          >
            <button
              onClick={() =>
                setSelectedOption((prev) => (prev === "buy" ? "" : "buy"))
              }
              className={`flex items-center gap-2 px-3 py-2 rounded transition
  ${selectedOption === "buy" ? "bg-[#0F2A44]" : ""}
  ${selectedOption === "buy" ? "text-white" : ""}
  ${selectedOption !== "buy" ? "hover:bg-gray-100" : ""}
`}
            >
              <FaHome /> Buy
            </button>

            <button
              onClick={() =>
                setSelectedOption((prev) => (prev === "rent" ? "" : "rent"))
              }
              className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                selectedOption === "rent"
                  ? "bg-[#0F2A44] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaHome /> Rent
            </button>

            <button
              onClick={() =>
                setSelectedOption((prev) => (prev === "sell" ? "" : "sell"))
              }
              className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                selectedOption === "sell"
                  ? "bg-[#0F2A44] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaTag /> Sell
            </button>
          </div>
          {!selectedOption && (
            <p className="bg-white md:text-xl font-bold p-2 w-80 md:w-96">
              Select any of the option you want
            </p>
          )}

          {/* Form */}
          {selectedOption && (
            <div
              className="bg-white rounded-md shadow-md grid md:text-2xl lg:text-lg lg:flex
               lg:gap-7 gap-3 py-10 px-6"
            >
              <div className="flex flex-col gap-2 lg:gap-6">
                <label className="font-bold text-[#064987] mb-1">
                  Location
                </label>
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  className="border rounded px-3 py-2"
                >
                  <option value="">Select location</option>
                  <option value="Akure">Akure</option>
                  <option value="Alagbaka">Alagbaka</option>
                  <option value="Oba-Ile">Oba-Ile</option>
                  <option value="Ijapo Estate">Ijapo Estate</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 lg:gap-6">
                <label className="font-bold text-[#064987] mb-1">
                  Property Type
                </label>
                <select className="border rounded px-3 py-2">
                  <option>Any Type</option>
                  <option>Bungalow</option>
                  <option>Apartment</option>
                  <option>House</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 lg:gap-6">
                <label className="font-bold text-[#064987] mb-1">Price</label>
                <select className="border rounded px-3 py-2">
                  <option>Any Price</option>
                  <option>500k</option>
                  <option>800k</option>
                  <option>1m</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 lg:gap-6">
                <label className="font-bold text-[#064987] mb-1">Price</label>
                <select className="border rounded px-3 py-2">
                  <option>Any Price</option>
                  <option>500k</option>
                  <option>800k</option>
                  <option>1m</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 lg:gap-6">
                <label className="font-bold text-[#064987] mb-1">Price</label>
                <select className="border rounded px-3 py-2">
                  <option>Any Price</option>
                  <option>500k</option>
                  <option>800k</option>
                  <option>1m</option>
                </select>
              </div>

              <div className="flex flex-col">
                <span className="mb-1 invisible">label</span>
                <button
                  className="flex items-center md:w-60 mx-auto justify-center gap-2 bg-[#0F2A44]
                 text-white px-4 py-2 rounded lg:w-44"
                >
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
