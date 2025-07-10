import React from "react";
import styles from "./Projects.module.css";
import { FaCalendarAlt, FaCodeBranch } from "react-icons/fa";

export default function ProjectCard({
  title,
  image,
  description,
  codeLink,
  demoLink,
  startDate,
  status,
  technologies
}) {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.projectMeta}>
          <span className={styles.metaItem}>
            <FaCalendarAlt className={styles.icon} />
            <strong>Start:</strong> {startDate}
          </span>
          <span className={styles.metaItem}>
            <FaCodeBranch className={styles.icon} />
            <strong>Status:</strong>
            <span className={`${styles.status} ${styles[status.toLowerCase()]}`}>
              {status}
            </span>
          </span>
        </div>

        <div className={styles.techList}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>

        <hr className={styles.separator} />

        <div className={styles.buttonGroup}>
          {codeLink && (
            <a
              href={codeLink}
              className={styles.viewCodeBtn}
              target="_blank"
              rel="noreferrer"
            >
              Ver Código
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              className={styles.liveDemoBtn}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
