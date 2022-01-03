import styles from "./Header.module.css";
import Location from "../svg/Location";
import Email from "../svg/Email";
import Link from "next/link";
import Button from "../UI/Button";
import Navigation from "./Navigation";
import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";

const Header = ({ toggleMobile }) => {
  const isMobile = useRef();

  useEffect(() => {
    isMobile.current = window.innerWidth < 550;
  }, []);

  return (
    <Fragment>
      <header className={styles.Header}>
        <div className={styles.topContacts}>
          <div className={`container ${styles.flex}`}>
            <span>Todos os dias entre as 09:00 e as 18:00</span>
            <div>
              <span>
                <Location /> Rua Gago Coutinho nº 41, Montijo
              </span>
              <span>
                <Email /> geral@vectorform.pt
              </span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className={`container ${styles.flex}`}>
          <Link href="/" passHref>
            <a href="#">
              <Image
                src="/assets/img/logo.svg"
                alt="vetor categorico"
                width="260"
                height="60"
              />
            </a>
          </Link>
          <div>
            <div className={styles.telefone}>
              <span>Ligar:</span>
              <span>&nbsp;939 163 067</span>
            </div>
            <Button
              text={isMobile ? "Marcar" : "Marcar Consulta"}
              route="/contactos"
            />
          </div>
        </div>

        <div className="divider"></div>
      </header>

      <Navigation toggle={toggleMobile} />
    </Fragment>
  );
};

export default Header;
