import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {

  return (
    <section className={styles.contactSection} id='contact'>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Informações de Contato</h3>

          <div className={styles.contactLine}>
            <span className={styles.icon}>📧</span>
            <a href="mailto:lianacapizani@gmail.com">lianacapizani@gmail.com</a>
          </div>

          <div className={styles.contactLine}>
            <span className={styles.icon}>🔗</span>
            <a href="https://linkedin.com/in/lianacapizani" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/lianacapizani
            </a>
          </div>

          <div className={styles.contactLine}>
            <span className={styles.icon}>💻</span>
            <a href="https://github.com/lianacapizani" target="_blank" rel="noopener noreferrer">
              github.com/lianacapizani
            </a>
          </div>

          <div className={styles.statusBlock}>
            <span className={styles.statusTitle}>Status Atual</span>
            <div className={styles.status}>
              <span>🟢</span>
              <p>Disponível para projetos freelance e posições full-time</p>
            </div>
          </div>
        </div>


        <div className={styles.formSection}>
          <form>
            <label htmlFor="nome">Nome Completo *</label>
            <input type="text" id="nome" placeholder="Seu nome" required />

            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="voce@exemplo.com" required />

            <label htmlFor="assunto">Assunto *</label>
            <input type="text" id="assunto" placeholder="Assunto da mensagem..." required />

            <label htmlFor="mensagem">Mensagem *</label>
            <textarea id="mensagem" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>

            <button className={styles.formBtn} type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};


