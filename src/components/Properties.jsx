import {
  FaBars,
  FaBath,
  FaBed,
  FaHeart,
  FaHome,
  FaPlay,
  FaRulerCombined,
  FaSearch,
  FaTag,
  FaTimes,
} from "react-icons/fa";
import heroBg from "../assets/images/estate-bg.png";
import { useState } from "react";
import { featuredProperties } from "../../project data/data";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const [option, setOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [price, setPrice] = useState(10000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <section className="my-20 mx-6 md:mx-10">
      <div>
        <h2 className="text-3xl mb-2 mt-0 font-heading font-bold text-[#013465]">
          Properties
        </h2>
        <p className="text-lg mb-5 text-gray-600">
          Discover a place you'll like to live
        </p>
      </div>
      <div
        className="bg-white rounded-md border shadow grid md:text-2xl lg:text-lg lg:flex
               lg:gap-7 gap-3 py-4 px-6"
      >
        <div className="flex flex-col gap-2 lg:gap-2">
          <label className="font-bold text-[#064987] mb-1">Location</label>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="rounded px-2 text-sm py-1"
          >
            <option value="">Enter city, neighborhood or ZIP</option>
            <option value="Akure">Akure</option>
            <option value="Alagbaka">Alagbaka</option>
            <option value="Oba-Ile">Oba-Ile</option>
            <option value="Ijapo Estate">Ijapo Estate</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 lg:gap-2">
          <label className="font-bold text-[#064987] mb-1">Property Type</label>
          <select className="border rounded px-2 py-1">
            <option>Any Type</option>
            <option>Bungalow</option>
            <option>Apartment</option>
            <option>House</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 lg:gap-2">
          <label className="font-bold text-[#064987] mb-1">Price Range</label>
          <select className="border rounded px-2 py-1">
            <option>Any Price</option>
            <option>500k</option>
            <option>800k</option>
            <option>1m</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 lg:gap-2">
          <label className="font-bold text-[#064987] mb-1">Beds</label>
          <select className="border rounded px-2 py-1">
            <option>Any Price</option>
            <option>500k</option>
            <option>800k</option>
            <option>1m</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 lg:gap-2">
          <label className="font-bold text-[#064987] mb-1">Baths</label>
          <select className="border rounded px-2 py-1">
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
            <FaSearch /> More filters
          </button>
        </div>
      </div>
      <div className="flex lg:hidden mt-5 items-center justify-between">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`
    w-52 fixed top-0 left-0 h-full bg-white z-50
    p-5 lg:hidden font-heading border shadow
    transform transition-transform duration-500 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        >
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </button>
          <div className="flex items-center text-sm my-5 justify-between">
            <h2>Filter</h2>
            <button className="text-[#1965ac] hover:text-[#4594dd] underline transition duration-300">
              Clear all
            </button>
          </div>
          <div className="flex flex-col gap-2 lg:gap-2">
            <label className="font-bold text-[#064987]">Property Type</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Any Type</option>
              <option>Bungalow</option>
              <option>Apartment</option>
              <option>House</option>
            </select>
          </div>
          <div className="flex flex-col text-sm gap-2 lg:gap-2 mb-10 mt-5">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>Houses (130)</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Condo (85)</span>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Towerhouses (45)</span>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Multi Family (20)</span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2 lg:gap-2">
              <h2>Price Range</h2>
              <input
                type="range"
                min="50000"
                max="3000000"
                step={50000}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-[#0F2A44] cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${Number(price).toLocaleString()}</span>
                <span>$3,000,000+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-10 lg:gap-2">
              <label className="font-bold font-body text-[#064987] mb-1">
                Beds
              </label>
              <select className="border rounded px-2 py-1">
                <option>Any Price</option>
                <option>500k</option>
                <option>800k</option>
                <option>1m</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 lg:gap-2">
              <label className="font-bold text-[#064987] mb-1">Baths</label>
              <select className="border rounded px-2 py-1">
                <option>Any Price</option>
                <option>500k</option>
                <option>800k</option>
                <option>1m</option>
              </select>
            </div>
          </div>
        </div>

        <button className="gap-2 text-[#0F2A44] hover:text-[#4594dd] transition duration-300">
          <div className="flex items-center gap-2 lg:gap-2">
            <label className="font-bold text-[#064987] mb-1">Sort by: </label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </button>
      </div>
      <div className="lg:flex gap-x-14  justify-end mt-20">
        <div className="w-52 hidden lg:block font-heading border shadow px-5 py-1 rounded-md">
          <div className="flex items-center text-sm my-5 justify-between">
            <h2>Filter</h2>
            <button className="text-[#1965ac] hover:text-[#4594dd] underline transition duration-300">
              Clear all
            </button>
          </div>
          <div className="flex flex-col gap-2 lg:gap-2">
            <label className="font-bold text-[#064987]">Property Type</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Any Type</option>
              <option>Bungalow</option>
              <option>Apartment</option>
              <option>House</option>
            </select>
          </div>
          <div className="flex flex-col text-sm gap-2 lg:gap-2 mb-10 mt-5">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>Houses (130)</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Condo (85)</span>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Towerhouses (45)</span>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Multi Family (20)</span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2 lg:gap-2">
              <h2>Price Range</h2>
              <input
                type="range"
                min="50000"
                max="3000000"
                step={50000}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-[#0F2A44] cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${Number(price).toLocaleString()}</span>
                <span>$3,000,000+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-10 lg:gap-2">
              <label className="font-bold text-[#064987] mb-1">Beds</label>
              <select className="border rounded px-2 py-1">
                <option>Any Price</option>
                <option>500k</option>
                <option>800k</option>
                <option>1m</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 lg:gap-2">
              <label className="font-bold text-[#064987] mb-1">Baths</label>
              <select className="border rounded px-2 py-1">
                <option>Any Price</option>
                <option>500k</option>
                <option>800k</option>
                <option>1m</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <div
            className="grid lg:grid-cols-3 font-heading
             gap-5 overflow-x-hidden"
          >
            {featuredProperties.map((property) => (
              <div
                onClick={() => navigate(`/property/${property.id}`)}
                key={property.id}
                className="border-2 w-[18.5rem] mx-auto rounded-lg overflow-hidden
          shadow-xl transition duration-300 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt="house"
                    className="w-[18.5rem]"
                  />
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
      </div>
    </section>
  );
};

export default Properties;
