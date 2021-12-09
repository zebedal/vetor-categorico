import styles from './Services.module.css'
import Link from 'next/link'
import { Fragment } from 'react'

const Services = props => (
    <div className={styles.flex}>

        <Link href="/curso-vigilante" passHref className="bla">
            <div className={styles.serviceBox} >

                <h2>Curso Vigilante</h2>
                <p>Trabalhador devidamente habilitado e autorizado a exercer as funções previstas na Lei n.º46/2019 de 8 de Julho.</p>
                <ul>
                    <li>Vigilância de imóveis</li>
                    <li>Controlo de entrada</li>
                    <li>Vigilância de bens móveis</li>

                </ul>

            </div>
        </Link>

        <Link href="/assistente-recinto-desportivo" passHref>
            <div className={styles.serviceBox}>

                <h2>Ass. Recinto Desportivo</h2>
                <p>Trabalhador habilitado para o exercício da especialidade de assistente de Recinto Desportivo da profissão de segurança.</p>
                <ul>
                    <li>Competências em gestão de conflitos</li>
                    <li>Conhecimentos em defesa pessoal</li>
                    <li>Prevenção de segurança</li>

                </ul>

            </div>
        </Link>

        <Link href="/assistente-recinto-espectaculos" passHref>
            <div className={styles.serviceBox}>

                <h2>Ass. Recinto Espectáculos</h2>
                <p>Trabalhador habilitado para o exercício da especialidade de assistente de Recinto de Espectáculos da profissão de segurança.</p>
                <ul>
                    <li>Competências em gestão de conflitos</li>
                    <li>Conhecimentos em defesa pessoal</li>
                    <li>Prevenção de segurança</li>

                </ul>
            </div>
        </Link>

    </div>
)

export default Services