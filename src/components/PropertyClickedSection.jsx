import firstImg from "../assets/images/Bedroom 4.jpg";
import secondImg from "../assets/images/Bedroom 3.jpg";
import thirdImg from "../assets/images/Bedroom 1.jpg";
import {
  FaArrowLeft,
  FaBed,
  FaCalendarCheck,
  FaCar,
  FaClosedCaptioning,
  FaFire,
  FaHome,
  FaRuler,
  FaShower,
  FaSquare,
  FaSwimmingPool,
  FaWalking,
} from "react-icons/fa";
import {
  FaFireBurner,
  FaFireFlameCurved,
  FaFireFlameSimple,
  FaPlantWilt,
  FaRulerCombined,
  FaSquareBinary,
  FaSquareCaretDown,
  FaSquareCheck,
  FaTowerObservation,
  FaWalkieTalkie,
} from "react-icons/fa6";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allProperties } from "../../project data/data";
import useScrollToSection from "./useScrollToSection";

const PropertyClickedSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const scrollTo = useScrollToSection();

  const property = useMemo(() => {
    const numericId = Number(id);
    return allProperties.find((p) => p.id === numericId) ?? null;
  }, [id]);

  const imgMain = property?.image ?? firstImg;
  const img2 = secondImg;
  const img3 = thirdImg;

  if (!property) {
    return (
      <section className="mx-6 md:mx-10">
        <div className="container  mx-auto px-4 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mt-10 flex gap-2 items-center"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-3xl font-bold text-[#053a6b] mb-4">
            Property not found
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-6 md:mx-10">
      <div className="container font-body mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mt-10 flex gap-2 items-center"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-3xl font-bold text-[#053a6b] mb-4">
          Property Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <img
              src={imgMain}
              alt={property.houseLocation}
              className="w-full lg:h-96 rounded"
            />
          </div>
          <div className="grid grid-rows-2 h-96 gap-2">
            <img
              src={img2}
              alt="Property image 2"
              className="w-full h-48 rounded"
            />
            <img
              src={img3}
              alt="Property image 3"
              className="w-full h-48 rounded"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mt-5">
            <h2 className="lg:text-3xl font-bold text-[#053a6b] mb-4">
              {property.houseLocation}
            </h2>
            <p className="text-[#053a6b] font-bold">{property.price}</p>
          </div>
          <span>{property.option}</span>

          <div className="my-10 lg:flex grid grid-cols-2 items-center gap-8">
            <p className="flex items-center gap-2">
              <FaBed />
              {property.beds} beds
            </p>
            <p className="flex items-center gap-2">
              <FaShower />
              {property.bathrooms} Baths
            </p>
            <p className="flex items-center gap-2">
              <FaRulerCombined />
              {property.squareMeters}
            </p>
            <p className="flex items-center gap-2">
              <FaCar />
              {/* not in data.js: keeping UI fallback */}2 car Garages
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarCheck />
              Built in 2018
            </p>
          </div>
        </div>

        <div className="lg:flex grid items-center justify-between">
          <div className="py-3 px-4 text-sm">
            <h2 className="text-xl font-bold my-2 text-[#053a6b] mb-4">
              About this Property
            </h2>
            <p>{property.description}</p>
            <button className="gap-2 mt-5 text-[#71b8fa] hover:text-[#4594dd] underline transition duration-300">
              Read more
            </button>
          </div>

          <div className="py-3 px-4 border rounded-lg text-sm w-64 shadow">
            <h2 className="text-xl font-bold text-[#053a6b] mb-4">
              Schedule a tour
            </h2>
            <p>Want to this property?</p>
            <p>Let's schedule a time.</p>
            <button
              onClick={() => scrollTo("schedule")}
              className="gap-2 bg-[#0F2A44] rounded-sm my-5 w-full mx-auto text-white py-1 px-2 hover:bg-[#4594dd] transition duration-300"
            >
              Schedule a Tour
            </button>
            <p>
              or call <span className="text-[#4594dd]">08100655023</span>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-[#053a6b] mb-4">Amenities</h2>
          <div className="my-5 grid lg:flex items-center justify-between border shadow rounded p-3 gap-8 w-full">
            <p className="flex items-center gap-2">
              <FaSwimmingPool /> Pool
            </p>
            <p className="flex items-center gap-2">
              <FaPlantWilt /> Garden
            </p>
            <p className="flex items-center gap-2">
              <FaFireBurner /> Fireplace
            </p>
            <p className="flex items-center gap-2">
              <FaTowerObservation /> Hardwood Floor
            </p>
            <p className="flex items-center gap-2">
              <FaWalkieTalkie /> Walk in closet
            </p>
            <p className="flex items-center gap-2">
              <FaHome /> Smart Home
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyClickedSection;
