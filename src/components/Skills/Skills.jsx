// src/components/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import html5Icon from '@iconify/icons-logos/html-5';
import css3Icon from '@iconify/icons-logos/css-3';
import gitIcon from '@iconify/icons-logos/git-icon';
import figmaIcon from '@iconify/icons-logos/figma';
import nextIcon from "@iconify/icons-logos/nextjs-icon";

export default function Skills() {
  return (
    <section className={styles.skills} id='skills'>
      <div className={styles.sectionTitle}>
        <h1>Tecnologias e Habilidades</h1>
      </div>

      <div className={styles.skillsGrid}>
        <div className={styles.column}>
          <h2>Frontend Development</h2>
          <div className={styles.skillItems}>
            <div><Icon icon={html5Icon} /> <span>HTML5</span></div>
            <div><Icon icon={css3Icon} /> <span>CSS3</span></div>
            <div><Icon icon={javascriptIcon} /> <span>JavaScript (ES6+)</span></div>
            <div><Icon icon={typescriptIcon} /> <span>TypeScript</span></div>
            <div><Icon icon={reactIcon} /> <span>React</span></div>
            <div><Icon icon={nextIcon} /> <span>Next.JS</span></div>
          </div>
        </div>

        <div className={styles.column}>
          <h2>Ferramentas & Metodologias</h2>
          <div className={styles.skillItems}>
            <div><Icon icon={gitIcon} /> <span>Git</span></div>
            <div><Icon icon={figmaIcon} /> <span>Figma</span></div>
            <div><Icon icon="carbon:mobile" /> <span>Responsive Design</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
