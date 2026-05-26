import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Schedule = () => {
  const [preferredDate, setPreferredDate] = useState("");
  return (
    <section id="schedule" className="my-20 mx-6 md:mx-10">
      <div className="grid lg:flex">
        <div className="flex-1">
          <h2 className="text-3xl mb-10 mt-0 font-heading font-bold text-[#013465]">
            Schedule a Consultation
          </h2>
          <p className="font-body text-[#013465] font-semibold">
            Let's discuss your real estate goals.
          </p>
          <p className="font-body mb-10 text-[#013465] font-semibold">
            Schedule a time that works for you.
          </p>
          <div className="flex-1 hidden lg:block">
            <div className="grid gap-4 mt-10">
              <div className="flex items-center gap-4">
                <FaPhone className=" rotate-90" />

                <p className="grid font-heading text-[#013465] font-bold">
                  Phone
                  <span className="font-semibold text-sm text-gray-500">
                    +1(910) 6782 361
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope />

                <p className="grid font-heading text-[#013465] font-bold">
                  Email
                  <span className="font-semibold text-sm text-gray-500">
                    contact.neadev@gmail.com
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationPin />

                <p className="grid font-heading text-[#013465] font-bold">
                  Address
                  <span className="font-semibold text-sm text-gray-500">
                    123 alagbaka, off oba adesida road, Akure.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="items-center font-body space-y-2 grid">
            <div className="grid lg:grid-cols-2 mb-5 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-1 w-full lg:w-56 text-sm shadow outline-none rounded"
                />
              </div>
              <div>
                <input
                  placeholder="Email Address"
                  type="email"
                  className="border p-1 w-full lg:w-[14.6rem] text-sm shadow outline-none rounded"
                />
              </div>
              <div>
                <input
                  placeholder="Phone Number"
                  type="number"
                  className="border p-1 appearance-none w-full lg:w-56 text-sm shadow outline-none rounded"
                />
              </div>
              <div>
                <input
                  placeholder="Optional Phone Number"
                  type="number"
                  className="border p-1 appearance-none w-full lg:w-[14.6rem] text-sm shadow outline-none rounded"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-[1fr_2fr] lg:gap-8 mb-10">
              <label className="text-[#013465]">I'm Interested In</label>
              <select className="w-full lg:w-80 border rounded p-1">
                <option value="">Buy a Home</option>
                <option value="">Sell a Home</option>
                <option value="">Rent a Home</option>
              </select>
            </div>
            <div className="grid lg:grid-cols-[1fr_2fr] my-5 lg:gap-8">
              <label className="text-[#093f72] mt-5">Preferred Date</label>
              <div className="flex items-center mb-5 gap-4">
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = "date";
                    }
                  }}
                  className="border rounded p-1 w-24 text-sm shadow outline-none"
                />

                <input
                  type="text"
                  placeholder="Preferred Time"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = "time";
                    }
                  }}
                  className="border rounded w-full lg:w-52 p-1 text-sm shadow outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8"></div>
            <div>
              <textarea
                placeholder="Message"
                className="border px-2 py-4 h-32 w-full lg:w-[33.5rem] shadow outline-none rounded"
              ></textarea>
            </div>
            <button
              className="bg-[#0a2e4f] font-body hover:bg-[#1774cc]
            transition duration-300 font-bold mx-auto w-80 py-1 px-2 text-white rounded-md my-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
