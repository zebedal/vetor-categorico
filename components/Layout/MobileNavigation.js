import styles from './MobileNavigation.module.css'
/* import Logo from '../svg/Logo' */
import Link from 'next/link'
import Facebook from '../svg/Facebook'
import { Fragment, useState } from 'react'
import ChevronDown from '../svg/ChevronDown'



const MobileNavigation = ({ show, toggleSidebar }) => {

    const [submenuOpen, setSubmenuOpen] = useState(false)


    const subMenuToggler = () => {
        setSubmenuOpen(!submenuOpen)
    }

    return (
        <Fragment>
            <div className={`${styles.backdrop} ${show ? styles.open : " "}`}></div>
            <div className={`${styles.sidebar} ${show ? styles.open : ""}`}>
                <div className={styles.Header}>
                    {/* <Logo width="130" /> */}
                    <svg onClick={toggleSidebar} width="20" height="20" viewBox="0 0 29 29" fill="none" className={styles.closeSidebar}>
                        <line x1="2.12132" y1="3" x2="26" y2="26.8787" stroke="#414042" strokeWidth="3" strokeLinecap="round" />
                        <line x1="3" y1="26.8787" x2="26.8787" y2="3" stroke="#414042" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
                <div className={styles.menu}>
                    <Link href="/about">Sobre Nós</Link>
                    <div onClick={subMenuToggler}>
                        Formação <ChevronDown />
                        {submenuOpen && <ul className={styles.submenu}>
                            <Link href="/curso-vigilante">Curso de Vigilante</Link>
                            <Link href="/assistente-recinto-desportivo">Assistente de Recinto Desportivo </Link>
                            <Link href="/assistente-recinto-espectaculos">Assistente de Recinto de Espetáculos</Link>
                            <Link href="/seguranca">Segurança – Porteiro</Link>
                            <Link href="/assistente-portos">Assistente de Portos e Aeroportos – Proteção Portuária</Link>
                            <Link href="/vigilante-transportes-valores">Vigilante de Transporte de Valores</Link>
                            <Link href="/vigilante-protecao-pessoal">Vigilante de Proteção Pessoal e Acompanhamento Pessoal</Link>
                        </ul>}
                    </div>
                    <Link href="/media">Media</Link>
                    <Link href="/contactos">Contactos</Link>
                </div>

                <div className={styles.social}>
                    <p>Siga-nos nas redes sociais</p>
                    <div className={styles['social-icons-wrapper']}>
                        <Facebook />
                        {/* <Linkedin /> */}
                    </div>
                    <br />
                    <br />
                    <p><span style={{ fontWeight: 'bold' }}>Tel.</span>&nbsp;917 641 225 - 939 163 067</p>
                    <p><span style={{ fontWeight: 'bold' }}>Email</span>&nbsp;geral@vectorform.pt</p>


                </div>

            </div>
        </Fragment>
    )




}

export default MobileNavigation