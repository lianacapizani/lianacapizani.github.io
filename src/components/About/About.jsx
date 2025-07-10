// About.jsx
import styles from "./About.module.css";
import liImage from "../../assets/images/li2.JPG";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.sectionTitle}>
        <h1>Sobre mim</h1>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <img
            src={liImage}
            alt="Mulher sorrindo de óculos, cabelo cacheado preto, usando camiseta preta com fundo cinza"
            title="Foto da Liana"
          />
        </div>

        <div className={styles.aboutText}>
            <h4>Eu sou Liana Karla</h4>
            <h6>
                Acredito na sinergia única entre <span>tecnologia</span> e <span>empatia</span> para criar <span>experiências de usuário</span> que impulsionam e moldam um futuro promissor e brilhante.
            </h6>
            <p>
                Iniciei minha carreira na área de design e tecnologia em 2023, integrando minha formação em Farmácia Bioquímica pela USP Ribeirão Preto e experiências anteriores em clínica de estética, administração hospitalar e inovação pelo SEBRAE.
            </p>
            <p>
                Desde então, finalizei a formação em <strong>UX | UI Design</strong> pela Awari e estou concluindo o Tecnólogo em <strong>Web Design</strong> pela FIAP. Também obtive a certificação como <strong>Front-End Developer</strong> e ampliei conhecimentos em <strong>Marketing Digital</strong> e <strong>Desenvolvimento Mobile Híbrido</strong>.
            </p>
            <p>
                Hoje atuo como <strong>UX/UI Designer</strong> e <strong>Desenvolvedora Front-End</strong>, criando experiências digitais simples e funcionais.  
                Sigo em busca de oportunidades onde eu possa aprender, crescer e colaborar com projetos que realmente façam a diferença na vida das pessoas.
            </p>
          <div className={styles.infoContainer}>
            <div className={styles.infoItem}><label>Data de aniversário:</label> <p>12 de abril de 1990</p></div>
            <div className={styles.infoItem}><label>Email:</label> <p>lianacapizani@gmail.com</p></div>
            <div className={styles.infoItem}><label>Idade:</label> <p>35 anos</p></div>
            <div className={styles.infoItem}><label>Cidade:</label> <p>Uberaba-MG</p></div>
            <div className={styles.infoItem}><label>Linkedin:</label> <p>Liana Capizani</p></div>
            <div className={styles.infoItem}><label>Disponibilidade:</label> <p>Aberta a oportunidades</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
