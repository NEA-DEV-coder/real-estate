import React from "react";
import rentalImg from "../assets/images/Bedroom 4.jpg";
import { FaKey, FaSearch } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const RentalSection = () => {
  return (
    <section className="my-20 mx-6 md:mx-10">
      <div className="grid lg:flex">
        <div className="flex-1">
          <h2 className="text-3xl mb-10 font-heading font-bold text-[#013465]">
            Find a Rental
          </h2>
          <p className="font-body text-[#013465] font-semibold">
            Discover quality rental properties that
          </p>
          <p className="font-body mb-10 text-[#013465] font-semibold">
            fits your lifestyle and budgets.
          </p>
          <div className="flex-1 hidden lg:block">
            <div className="grid gap-4 mt-10">
              <div className="flex items-center gap-4">
                <FaSearch />

                <p className="grid font-heading text-[#013465] font-bold">
                  Wide Selection
                  <span className="font-semibold text-sm text-gray-500">
                    Apartments, cordos and houses.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaKey />

                <p className="grid font-heading text-[#013465] font-bold">
                  Verified Listing
                  <span className="font-semibold text-sm text-gray-500">
                    Quality homes you can trust.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelopeCircleCheck />

                <p className="grid font-heading text-[#013465] font-bold">
                  Easy Process
                  <span className="font-semibold text-sm text-gray-500">
                    Simple applications and approvals.
                  </span>
                </p>
              </div>
              <button
                className="bg-[#0a2e4f] font-body hover:bg-[#1774cc]
            transition duration-300 font-bold w-56 py-1 px-2 text-white rounded-md my-4"
              >
                Search Rentals
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={rentalImg} alt="" className="rounded" />
        </div>
      </div>
      <div className="flex-1 lg:hidden">
        <div className="grid gap-4 mt-10">
          <div className="flex items-center gap-4">
            <FaSearch />

            <p className="grid font-heading text-[#013465] font-bold">
              Wide Selection
              <span className="font-semibold text-sm text-gray-500">
                Apartments, cordos and houses.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaKey />

            <p className="grid font-heading text-[#013465] font-bold">
              Verified Listing
              <span className="font-semibold text-sm text-gray-500">
                Quality homes you can trust.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelopeCircleCheck />

            <p className="grid font-heading text-[#013465] font-bold">
              Easy Process
              <span className="font-semibold text-sm text-gray-500">
                Simple applications and approvals.
              </span>
            </p>
          </div>
          <button
            className="bg-[#0a2e4f] font-body hover:bg-[#1774cc]
            transition duration-300 font-bold w-56 py-1 px-2 text-white rounded-md my-4"
          >
            Search Rentals
          </button>
        </div>
      </div>
    </section>
  );
};

export default RentalSection;
