import React from "react";
import { FaKey, FaSearch } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import buyImg from "../assets/images/Bedroom 3.jpg";

const SellSection = () => {
  return (
    <section className="my-20 mx-6 md:mx-10">
      <div className="grid lg:flex">
        <div className="flex-1">
          <h2 className="text-3xl mb-10 font-heading font-bold text-[#013465]">
            Sell Your Home
          </h2>
          <p className="font-body text-[#013465] font-semibold">
            Maximize your home's value with
          </p>
          <p className="font-body mb-10 text-[#013465] font-semibold">
            our experts marketing strategies.
          </p>
          <div className="flex-1 hidden lg:block">
            <div className="grid gap-4 mt-10">
              <div className="flex items-center gap-4">
                <FaSearch />

                <p className="grid font-heading text-[#013465] font-bold">
                  Markey Analysis
                  <span className="font-semibold text-sm text-gray-500">
                    Get an accurate valuation.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaKey />

                <p className="grid font-heading text-[#013465] font-bold">
                  Professional Marketing
                  <span className="font-semibold text-sm text-gray-500">
                    High-quality photos and listings.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelopeCircleCheck />

                <p className="grid font-heading text-[#013465] font-bold">
                  Expert Negotiation
                  <span className="font-semibold text-sm text-gray-500">
                    We get you the best deal.
                  </span>
                </p>
              </div>
              <button
                className="bg-[#0a2e4f] font-body hover:bg-[#1774cc]
            transition duration-300 font-bold w-56 py-1 px-2 text-white rounded-md my-4"
              >
                Get Your Home Valuation
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={buyImg} alt="" className="rounded" />
        </div>
      </div>
      <div className="flex-1 lg:hidden">
        <div className="grid gap-4 mt-10">
          <div className="flex items-center gap-4">
            <FaSearch />

            <p className="grid font-heading text-[#013465] font-bold">
              Markey Analysis
              <span className="font-semibold text-sm text-gray-500">
                Get an accurate valuation.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaKey />

            <p className="grid font-heading text-[#013465] font-bold">
              Professional Marketing
              <span className="font-semibold text-sm text-gray-500">
                High-quality photos and listings.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelopeCircleCheck />

            <p className="grid font-heading text-[#013465] font-bold">
              Expert Negotiation
              <span className="font-semibold text-sm text-gray-500">
                We get you the best deal.
              </span>
            </p>
          </div>
          <button
            className="bg-[#0a2e4f] font-body hover:bg-[#1774cc]
            transition duration-300 font-bold w-56 py-1 px-2 text-white rounded-md my-4"
          >
            Get Your Home Valuation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SellSection;
