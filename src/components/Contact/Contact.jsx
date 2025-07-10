import React from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_slt7d2u',   // seu service ID
      'template_zjhxeni',  // seu template ID
      e.target,
      '7UNA5OhxeEhlhUres'  // sua public key
    )
    .then((result) => {
      console.log(result.text);
      alert('Mensagem enviada com sucesso :D'); // alerta sucesso
    }, (error) => {
      console.log(error.text);
      alert('Erro ao enviar mensagem. Tente novamente.');
    });

    e.target.reset(); // limpa o formulário após envio
  };

  return (
    <section className={styles.contactSection} id="contact">
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
          <form onSubmit={sendEmail}>
            <label htmlFor="nome">Nome Completo *</label>
            <input
              type="text"
              id="nome"
              name="user_name"
              placeholder="Seu nome"
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="voce@exemplo.com"
              required
            />

            <label htmlFor="assunto">Assunto *</label>
            <input
              type="text"
              id="assunto"
              name="subject"
              placeholder="Assunto da mensagem..."
              required
            />

            <label htmlFor="mensagem">Mensagem *</label>
            <textarea
              id="mensagem"
              name="message"
              rows="5"
              placeholder="Escreva sua mensagem aqui..."
              required
            ></textarea>

            <button className={styles.formBtn} type="submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
