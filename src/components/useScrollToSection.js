import { useNavigate, useLocation } from "react-router-dom";

const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (sectionId) => {
    const id = sectionId.replace("#", "");
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return scrollTo;
};

export default useScrollToSection;
