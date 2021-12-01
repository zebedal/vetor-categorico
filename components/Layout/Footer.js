

import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = props => (
    <div className={styles.outerWrapper}>
        <div className={`container `}>
            <div className={styles.grid}>
                <div className={styles.footerColumn}>
                    
                    <p>Aliqua sit velit labore laboris dolor aute et occaecat.</p>
                </div>

                <div className={styles.footerColumn}>
                    <h5>A nossa escola</h5>
                    <p>Rua Gago Coutinho nº 41, 2870-330 Montijo</p>
                    <p>917 641 225</p>
                    <p>939 163 067</p>
                    <p>Todos os dias das <strong>09:00</strong> às <strong>18:00</strong></p>
                </div>

                <div className={styles.footerColumn}>
                    <h5>Artigos</h5>
                    <p><a className={styles.articleTitle} href="https://www.distritonline.pt/a-ansiedade-normalidade-ou-patologia%ef%bb%bf/">A Ansiedade: normalidade ou patologia?</a></p>
                    <p className={styles.articleDate}>Dezembro 05, 2019</p>
                    <br />
                    <p><a className={styles.articleTitle} href="https://www.distritonline.pt/perturbacoes-ao-nivel-do-apetite-a-anorexia-nervosa-e-a-bulimia/">Perturbações ao nível do apetite</a></p>
                    <p className={styles.articleDate}>Março 08, 2019</p>
                </div>

                <div className={`${styles.footerColumn} ${styles.linksWrapper}`}>
                    <h5>Links Rápidos</h5>
                    <Link href="/">Home</Link>
                    <Link href="/sobre">Sobre Nós</Link>
                    <Link href="/avaliacao-psicologica">Formação</Link>
                    <Link href="/contactos">Contactos</Link>
                </div>
            </div>
        </div>
    </div>
)

export default Footer