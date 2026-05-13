import { FaHome, FaKey, FaTag } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const Info = () => {
  return (
    <section className="my-20 mx-6 md:mx-10 font-heading">
      <div>
        <h2 className="text-4xl my-10 font-bold text-[#0a2e4f]">You Can...</h2>
      </div>
      <div className="lg:flex lg:items-center gap-10 md:grid-cols-2 grid">
        <div className="flex items-center gap-4">
          <FaHome className="text-4xl " />
          <p className="font-semibold text-gray-500 md:text-lg xl:text-base">
            <span
              className="flex items-center gap-2 text-[#154878]
              font-bold text-lg md:text-xl"
            >
              Buy With Confidence
            </span>
            Won't cost you every sleep of the way to find the perfect home.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaTag className="rotate-90 text-4xl shadow-2xl" />
          <p className="font-semibold text-gray-500 md:text-lg">
            <span
              className="flex items-center text-[#154878]
             font-bold text-lg gap-2 md:text-xl"
            >
              Sell For More
            </span>
            Maximize your home value with our expert marketing strategies.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaKey className="text-4xl" />
          <p className="font-semibold text-gray-500 md:text-lg xl:text-base">
            <span
              className="flex items-center text-[#154878]
            font-bold text-lg gap-2 md:text-xl"
            >
              Rent With Ease
            </span>
            Find great rental properties that fits your lifestyle.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FaPeopleGroup className="text-4xl" />
          <p className="font-semibold text-gray-500 md:text-lg xl:text-base">
            <span
              className="flex items-center text-[#154878] font-bold
             md:text-xl text-lg gap-2"
            >
              Local Experts
            </span>
            Our experience experts knows the local market best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
