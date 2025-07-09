import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200); // aparece depois de 200px
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#a253bd", 
          color: "#fff",
          cursor: "pointer",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          zIndex: 1000,
          transition: "opacity 0.3s",
        }}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <FaChevronUp />
      </button>
    )
  );
}
