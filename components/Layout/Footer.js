import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = (props) => (
  <div className={styles.outerWrapper}>
    <div className={`container `}>
      <div className={styles.grid}>
        <div className={styles.footerColumn}>
          <Link href="/" passHref>
            <a href="#">
              <Image
                src="/assets/img/logo.svg"
                alt="vetor categorico"
                width="220"
                height="45"
              />
            </a>
          </Link>
          <Image
            src="/assets/img/psp.png"
            alt="vetor categorico"
            width="110"
            height="90"
          />
          <Image
            src="/assets/img/dgert.jpg"
            alt="vetor categorico"
            width="110"
            height="90"
          />
          <p>Autorização nº52</p>
        </div>

        <div className={styles.footerColumn}>
          <h5>A nossa escola</h5>
          <p>Rua Gago Coutinho nº 41, 2870-330 Montijo</p>
          <p>917 641 225</p>
          <p>939 163 067</p>
          <p>
            Todos os dias das <strong>09:00</strong> às <strong>18:00</strong>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h5>Artigos</h5>
          <p>
            <a
              className={styles.articleTitle}
              href="https://www.dn.pt/sociedade/suspenso-seguranca-privado-que-agrediu-cliente-em-discoteca-de-albufeira-14218665.html"
            >
              Suspenso segurança privado que agrediu cliente.
            </a>
          </p>
          <p className={styles.articleDate}>Outubro 14, 2021</p>
          <br />
          <p>
            <a
              className={styles.articleTitle}
              href="https://jornaleconomico.sapo.pt/noticias/o-novo-normal-da-seguranca-privada-788146"
            >
              O novo normal da segurança privada
            </a>
          </p>
          <p className={styles.articleDate}>Outubro 01, 2021</p>
        </div>

        <div className={`${styles.footerColumn} ${styles.linksWrapper}`}>
          <h5>Links Rápidos</h5>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre Nós</Link>
          <Link href="/media">Media</Link>
          <Link href="/avaliacao-psicologica">Formação</Link>
          <Link href="/contactos">Contactos</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
