import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0a2e4f] text-white font-heading mt-20">
      <div className="mx-6 md:mx-10 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-1">Neadev</h2>
          <span className="text-sm text-gray-300 font-body">Real Estate</span>
          <p className="text-gray-400 text-sm mt-4 font-body leading-6">
            Helping you find your perfect home with expertise, integrity, and care.
          </p>
          <div className="flex gap-4 mt-5 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#4594dd] transition"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#4594dd] transition"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#4594dd] transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm font-body">
            {[
              { label: "Home", href: "#home" },
              { label: "Properties", href: "#properties" },
              { label: "Buy", href: "#buy" },
              { label: "Sell", href: "#sell" },
              { label: "Rent", href: "#rent" },
              { label: "About Us", href: "#about-us" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-white transition">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm font-body">
            <li><a href="#buy" className="hover:text-white transition">Buy a Home</a></li>
            <li><a href="#sell" className="hover:text-white transition">Sell Your Home</a></li>
            <li><a href="#rent" className="hover:text-white transition">Find a Rental</a></li>
            <li><a href="#schedule" className="hover:text-white transition">Schedule Consultation</a></li>
            <li>
              <button onClick={() => navigate("/properties")} className="hover:text-white transition text-gray-400 text-sm">
                View All Properties
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm font-body">
            <li className="flex items-start gap-3">
              <FaPhone className="rotate-90 mt-1 shrink-0" />
              <a href="tel:+19106782361" className="hover:text-white transition">+1(910) 6782 361</a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 shrink-0" />
              <a href="mailto:contact.neadev@gmail.com" className="hover:text-white transition">contact.neadev@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <FaLocationPin className="mt-1 shrink-0" />
              <span>123 Alagbaka, Off Oba Adesida Road, Akure.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1a4a6e] text-center text-gray-400 text-sm font-body py-5">
        © {new Date().getFullYear()} Neadev Real Estate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
