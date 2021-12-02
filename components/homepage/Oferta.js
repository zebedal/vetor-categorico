import styles from './Oferta.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Oferta = ({background='var(--grey)'}) => (
    <div className={styles.wrapper} style={{background: background }}>
        <div className="container">
            <strong>O que oferecemos</strong>
            <h2>Cursos <span>de Formação</span></h2>
            <div className={styles.flex}>

                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <Image src="/assets/img/vigilante.png" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                    </div>
                    <br />
                    <h4>Curso de Vigilante</h4>
                    <p>Trabalhador, devidamente habilitado e autorizado a exercer funções de vigilância</p>
                    <br />
                    <div className={styles.linkFlex}>
                        <Link href="/curso-vigilante">Saber mais</Link>&nbsp;&nbsp;
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                        </svg>



                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <Image src="/assets/img/pessoal.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                    </div>
                    <br />
                    <h4>Proteção e Acompanhamento Pessoal</h4>
                    <p>Formação de vigilante de Proteção Pessoal e Acompanhamento Pessoal</p>
                    <br />
                    <div className={styles.linkFlex}>
                        <Link href="/vigilante-protecao-pessoal">Saber mais</Link>&nbsp;&nbsp;
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                        </svg>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgWrapper}>
                        <Image src="/assets/img/assistente.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                    </div>
                    <br />
                    <h4>Assistente de Recintos Desportivos</h4>
                    <p>Habilita ao exercício da especialidade de assistente de Recinto Desportivo</p>
                    <br />
                    <div className={styles.linkFlex}>
                        <Link href="/assistente-recinto-desportivo">Saber mais</Link>&nbsp;&nbsp;
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                        </svg>
                    </div>
                </div>




            </div>
        </div>
    </div>
)

export default Oferta