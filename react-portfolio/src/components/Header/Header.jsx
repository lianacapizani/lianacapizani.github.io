import { useState } from "react";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function scrollToSection(event, id) {
    event.preventDefault(); 
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logo}>
              <a href="#home">LK.<span>CAPIZANI</span></a>
          </div>
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.show : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
          >
            <FaBars className={styles.icon} />
          </div>
          <nav className={`${styles.navbar} ${menuOpen ? styles.show : ""}`}>
            <ul>
              <li>
                <a
                  href="#home"
                  className={styles.menuItem}
                  onClick={(e) => scrollToSection(e, "home")}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={styles.menuItem}
                  onClick={(e) => scrollToSection(e, "about")}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={styles.menuItem}
                  onClick={(e) => scrollToSection(e, "projects")}
                >
                  Projetos
                </a>
              </li>
                            <li>
                <a
                  href="#skills"
                  className={styles.menuItem}
                  onClick={(e) => scrollToSection(e, "skills")}
                > 
                  Habilidades Técnicas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={styles.menuItem}
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
