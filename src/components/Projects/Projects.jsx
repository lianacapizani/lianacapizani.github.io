import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: 1,
    title: "Feature Agendamentos",
    category: "UX/UI Design",
    image: "/assets/images/novafuncionalidademagrass.png",
    description: "Nova funcionalidade para agendamentos no App Magrass Club.",
    codeLink: "https://www.behance.net/gallery/178191591/Nova-feature-Agendamentos-App-Magrass-Club",
    demoLink: "",
    startDate: "Mai 2023",
    status: "Completed",
    technologies: ["Figma", "Miro"]
  },
  {
    id: 2,
    title: "Social Media App",
    category: "UX/UI Design",
    image: "/assets/images/socailmediaapp.png",
    description: "Aplicativo conceitual de rede social para conexões entre usuários.",
    codeLink: "https://www.behance.net/gallery/178430691/Social-Media",
    demoLink: "https://www.figma.com/design/iNrQECMzmROtMOPlIcAjjW/Social-App?node-id=205-1387&t=OXZs8FP5EWyDDyZJ-1",
    startDate: "Ago 2023",
    status: "Completed",
    technologies: ["Figma"]
  },
  {
    id: 3,
    title: "QFome App",
    category: "UX/UI Design",
    image: "/assets/images/qfomeapp.png",
    description: "Aplicativo de delivery de comida para pedidos rápidos e fáceis.",
    codeLink: "https://www.behance.net/gallery/179397319/Q-FOME",
    demoLink: "https://www.figma.com/design/osnyZrsGLGm08g337QjVj3/QFOME---Projeto-do-Curso-de-UI?node-id=72-521&t=lfPhXiw3C99nWd2I-1",
    startDate: "Set 2023",
    status: "Completed",
    technologies: ["Figma", "Miro"]
  },
  {
    id: 4,
    title: "LandingPage Clínica Estética UI",
    category: "UX/UI Design",
    image: "/assets/images/landingpage clinica estetica.png",
    description: "Landing Page promocional para clínica de estética e bem-estar.",
    codeLink: "https://www.behance.net/gallery/180820205/Landing-Page-Clinica-de-Esttica",
    demoLink: "https://www.figma.com/design/r5dv6vQ4xoRW25x5R2yBO0/Landing-Page---Essence-estetica---Project-Udemy?node-id=7-66&t=lfPhXiw3C99nWd2I-1",
    startDate: "Set 2023",
    status: "Completed",
    technologies: ["Figma"]
  },
  {
    id: 5,
    title: "RetrôVibes App",
    category: "UX/UI Design",
    image: "/assets/images/retrovibesapp.png",
    description: "Music player com visual retrô para experiência nostálgica.",
    codeLink: "https://www.behance.net/gallery/183550333/Daily-UI-09-Music-Player-versao-Retro-",
    demoLink: "https://www.figma.com/proto/cAnwVa231EEUgIKZ23lpOe/DAILY-UI?node-id=9-5571&t=n1RNAeDKWZ7y3doQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A5571",
    startDate: "Out 2023",
    status: "Completed",
    technologies: ["Figma"]
  },
  {
    id: 6,
    title: "To Do List App",
    category: "UX/UI Design",
    image: "/assets/images/todolistapp.png",
    description: "Aplicativo de lista de tarefas com interface intuitiva e simples.",
    codeLink: "https://www.behance.net/gallery/183619291/Daily-UI-To-Do-List",
    demoLink: "https://www.figma.com/design/rvKL2Cbts79XKyLNwpRAp4/To-Do-App?node-id=0-1&t=YgCwLfUF8kGf9ha7-1",
    startDate: "Nov 2023",
    status: "Completed",
    technologies: ["Figma"]
  },
  {
    id: 7,
    title: "LandingPage Clínica - HTML e CSS",
    category: "Front-End",
    image: "/assets/images/landing-tb.png",
    description: "Landing Page estática para divulgação de serviços de estética.",
    codeLink: "https://github.com/lianacapizani/landingpage-estetica",
    demoLink: "https://landingpage-estetica.vercel.app/",
    startDate: "Abr 2024",
    status: "Completed",
    technologies: ["HTML", "CSS"]
  },
  {
    id: 8,
    title: "Iara Games - HTML, CSS e JavaScript",
    category: "Front-End",
    image: "/assets/images/IaraThumbnail.png",
    description: "Plataforma de games brasileiros que une cultura e diversão.",
    codeLink: "https://github.com/lianacapizani/Iara-Games",
    demoLink: "https://iara-games-two.vercel.app/",
    startDate: "Mai 2024",
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 9,
    title: "Tela de Login",
    category: "Front-End",
    image: "/assets/images/tela-de-login.png",
    description: "Tela de login responsiva para autenticação de usuários.",
    codeLink: "https://github.com/lianacapizani/tela-de-login",
    demoLink: "https://tela-de-login-rho-brown.vercel.app/",
    startDate: "Jun 2024",
    status: "Completed",
    technologies: ["Figma", "HTML", "CSS"]
  },
  {
    id: 10,
    title: "RecrutaAI",
    category: "Front-End",
    image: "/assets/images/recruta.ai.png",
    description: "Landing Page para divulgação da paltaforma de recrutamentos: RecrutaAI.",
    codeLink: "https://github.com/lianacapizani/recruta.AI",
    demoLink: "https://recrutaai.vercel.app/",
    startDate: "Out 2024",
    status: "Completed",
    technologies: ["Figma", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 11,
    title: "Rate the Book",
    category: "Front-End",
    image: "/assets/images/rate-the-book.jpg",
    description: "Projeto para fazer avaliação de livros com um sistema de notas",
    codeLink: "https://github.com/lianacapizani/rate-the-book",
    demoLink: "https://rate-the-book.vercel.app/",
    startDate: "Out 2024",
    status: "Completed",
    technologies: ["ReactJS", "HTML", "Bootstrap"]
  },
  {
    id: 12,
    title: "Planeta Consciente",
    category: "Front-End",
    image: "/assets/images/planetaconsciente-bckg-03.png",
    description: "Landing page interativa sobre energias renováveis e sustentabilidade.",
    codeLink: "https://github.com/lianacapizani/planet-conscious-landingpage",
    demoLink: "https://rate-the-book.vercel.app/",
    startDate: "Out 2024",
    status: "Completed",
    technologies: ["ReactJS", "HTML", "CSS"]
  },
  {
    id: 13,
    title: "Reuse App - React Native",
    category: "Front-End",
    image: "/assets/images/reuseapp.png",
    description: "App sustentável para incentivo ao reuso de produtos e objetos.",
    codeLink: "https://github.com/lianacapizani/planeta-consciente-gs",
    demoLink: "",
    startDate: "Abr 2024",
    status: "Completed",
    technologies: ["ReactJS", "HTML", "CSS"]
  }
];

const categories = ["All", "UX/UI Design", "Front-End"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Projetos</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                startDate={project.startDate}
                status={project.status}
                technologies={project.technologies}
                category={project.category}
              />
        ))}
      </div>
    </section>
  );
}
