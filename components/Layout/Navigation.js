import styles from './Navigation.module.css'
import Link from 'next/link'
import ChevronDown from '../svg/ChevronDown'
import Facebook from '../svg/Facebook'
/* import Linkedin from '../svg/Linkedin' */
import { useEffect, useRef } from 'react'
import Burger from '../UI/Burger'

const Navigation = ({toggle}) => {

    const isMobile = useRef()

    useEffect(() => {
        isMobile.current = window.innerWidth < 550
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.flex}`}>
                {isMobile && <Burger toggleMenu={toggle}/>}
                <nav className={styles.navigation}>
                    <Link href="/sobre">Sobre Nós</Link>
                    <Link href="/">
                        <div className={styles.navLink}>Formação <ChevronDown />
                            <div className={styles.subMenu}>
                                <Link href="/curso-vigilante">Curso de Vigilante</Link>
                                <Link href="/assistente-recinto-desportivo">Assistente de Recinto Desportivo </Link>
                                <Link href="/assistente-recinto-espectaculos">Assistente de Recinto de Espetáculos</Link>
                                <Link href="/seguranca">Segurança – Porteiro</Link>
                                <Link href="/assistente-portos">Assistente de Portos e Aeroportos – Proteção Portuária</Link>
                                <Link href="/vigilante-transportes-valores">Vigilante de Transporte de Valores</Link>
                                <Link href="/vigilante-protecao-pessoal">Vigilante de Proteção Pessoal e Acompanhamento Pessoal</Link>
                            </div>
                        </div>
                    </Link>
                    <Link href="/media">Media</Link>
                    <Link href="/contactos">Contactos</Link>
                </nav>
                <div className={styles.social}>
                    {!isMobile && <span>Siga-nos</span>}
                    <Facebook height={15} width={15} fill="var(--blue)" />&nbsp;&nbsp;&nbsp;
                    {/* <Linkedin height={15} width={15} fill="var(--blue)" /> */}
                </div>
            </div>
        </div>
    )
}



export default Navigation