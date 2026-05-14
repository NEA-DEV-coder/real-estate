import { TbCertificate } from "react-icons/tb";
import aboutImg from "../assets/images/real-about.png";
import {
  FaHandHoldingHeart,
  FaHouseDamage,
  FaRegGrinHearts,
  FaRegHeart,
} from "react-icons/fa";
import {
  Fa42Group,
  FaHeartCrack,
  FaHeartPulse,
  FaPerson,
  FaUserGroup,
} from "react-icons/fa6";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section className="my-20 mx-6 md:mx-10 font-heading">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-center my-10 text-[#0a2e4f] underline underline-offset-8">
          About Us
        </h3>
      </div>
      <div className="grid space-y-10 gap-4 lg:flex items-center lg:justify-between">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl md:text-center lg:text-start lg:text-2xl mb-8 font-bold text-[#0a2e4f]">
            About Neadev Real Estate
          </h2>

          <div
            className="space-y-5 text-gray-500 shadow-xl py-5 px-5 border-2 rounded-lg md:w-full
             lg:w-[95%] mx-auto w-[95%] md:text-lg xl:text-base leading-7"
          >
            <p>
              We are passionate about helping you find your dream home. With
              years of experience in the real estate industry, our dedicated
              team provides exceptional service and personalized solutions
              tailored to your needs. Whether you're a first-time buyer, a
              seasoned investor, or looking to sell your property, we are here
              to guide you every step of the way. Our mission is to make the
              rental, buying, and selling process seamless, stress-free, and
              enjoyable for every client. We pride ourselves on our local
              expertise, market knowledge, and commitment to excellence.
            </p>

            <p className="text-black font-bold">
              Let us help you turn your real estate dreams into reality.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About Neadev Real Estate"
            className="w-full md:max-w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div
        className="flex items-center md:text-2xl gap-10 my-10 border-2 border-gray-200
      w-full rounded-lg p-6 justify-center flex-wrap"
      >
        <p className="flex items-center flex-col gap-2 font-semibold font-body">
          <TbCertificate className="text-2xl md:text-4xl text-[#0a2e4f]" />
          10+
          <span className="text-sm md:text-base"> Years of Experience</span>
        </p>
        <p className="flex items-center flex-col gap-2 font-semibold font-body">
          <FaHouseDamage className="text-2xl md:text-4xl  text-[#0a2e4f]" />
          500+
          <span className="text-sm md:text-base"> Homes Sold</span>
        </p>
        <p className="flex items-center flex-col gap-2 font-semibold font-body">
          <FaHandHoldingHeart className="text-2xl md:text-4xl text-[#0a2e4f]" />
          99%
          <span className="text-sm md:text-base"> Customer Satisfaction</span>
        </p>
        <p className="flex items-center flex-col gap-2 font-semibold font-body">
          <FaUserGroup className="text-2xl md:text-4xl text-[#0a2e4f]" />
          Local
          <span className="text-sm md:text-base"> Market Experts</span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
