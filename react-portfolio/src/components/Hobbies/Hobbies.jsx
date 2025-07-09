import React from "react";
import styles from "./Hobbies.module.css";
import hobbiesImg from "../../assets/images/hobbies.png"; // ajuste o caminho conforme estrutura do seu projeto

export default function Hobbies() {
  return (
    <section className={`${styles.hobbies} about-me`} id="hobbies">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.hobbiesContent}>
            <div className={`${styles.row} ${styles.alignItemsCenter}`}>
              <div className={styles.sectionTitle}>
                <h1>Hobbies</h1>
                <p>
                  Amo ler livros. Adoro uma maratona de séries, seja romance,
                  mistério, ação, comédia, ou até espanholas para aprimorar meu
                  espanhol. Curto muito jogar boardgames estratégicos com amigos e
                  família. Vinho é minha bebida preferida (nada como relaxar com um
                  bom vinho). Gosto muito de viajar, conhecer novos lugares, ver
                  paisagens, novas culturas e muito mais. E, claro...amo uma aventura.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <img
              src={hobbiesImg}
              alt="Foto do Diego de olhos fechados tocando baixo em um palco com luz azul de fundo"
              title="Foto do Diego tocando baixo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
