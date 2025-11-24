import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faBehance,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import styles from "./Hero.module.css";

export default function Hero() {

  function scrollToSection(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className={styles.home} id="home">
      <div className="container">
        <div className={styles.homeContent}>
          <h6>Olá, me chamo</h6>
          <h1>Liana Karla Capizani</h1>
          <h3>Web Designer - Front-End Developer - UX/UI Designer
          
          </h3>

          <div className={styles.buttons}>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className={styles.btnPrimary}
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={styles.btnSecondary}
            >
              Fale comigo
            </a>
          </div>
        </div>

        <div className={styles.socialContainer}>
          <a href="https://github.com/lianacapizani" target="_blank" rel="noreferrer" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/lianakarlacapizani/" target="_blank" rel="noreferrer" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
          <a href="mailto:lianacapizani@gmail.com" target="_blank" rel="noreferrer" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/liana_karla/" target="_blank" rel="noreferrer" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=3484276022" target="_blank" rel="noreferrer" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          </a>
          <a href="https://www.behance.net/lianakarlacapizani" target="_blank" rel="noreferrer" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faBehance} className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
