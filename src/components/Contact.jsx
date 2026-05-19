import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="my-20 mx-6 md:mx-10">
      <div className="grid lg:flex items-center">
        <div className="flex-1">
          <h2 className="text-3xl mb-10 font-heading font-bold text-[#013465]">
            Contact Us
          </h2>
          <p className="font-body text-[#013465] font-semibold">
            We're here to help you.Get in touch
          </p>
          <p className="font-body mb-10 text-[#013465] font-semibold">
            with our team today.
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
          <form className="space-y-5 mx-auto justify-center grid p-3 w-96">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="border p-1 w-80 shadow outline-none rounded"
              />
            </div>
            <div>
              <input
                placeholder="Email Address"
                type="email"
                className="border p-1 w-80 shadow outline-none rounded"
              />
            </div>
            <div>
              <input
                placeholder="Phone Number"
                type="number"
                className="border p-1 appearance-none w-80 shadow outline-none rounded"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="border p-2 w-80 shadow outline-none rounded"
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
        <div className="flex-1 lg:hidden">
          <div className="grid md:grid-cols-3 gap-4 mt-10">
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
    </section>
  );
};

export default Contact;
