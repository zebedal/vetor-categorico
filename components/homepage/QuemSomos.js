import styles from './QuemSomos.module.css'
import Image from 'next/image'
import Button from '../UI/Button'

const QuemSomos = props => (
    <div className="container">
        <div className={` ${styles.flex}`}>
            <div className={styles.imgWrapper}>
                <Image src="/assets/img/nos.jpg" layout="fill" alt="psicologia e psicoterapia" />
            </div>
            <div className={styles.content}>
                <strong>Quem somos</strong>
                <h2>Somos o seu melhor <span>formador</span></h2>
                <br />
                <br />
                <br />
                <p>
            Somos uma entidade Formadora acreditada pela DGERT para ministrar formação profissional e autorizada pela DN/PSP - Direção Nacional da Polícia de Segurança Pública, com a Autorização nº 52, para ministrar formação na área da Segurança Privada área 861 – Proteção de pessoas e bens.
            Tem presentemente delegações em <b>Vila do Conde</b>, <b>Santiago do Cacém</b>, <b>Leiria</b> e <b>Entroncamento</b>.
                </p>
                <br/>
                <p style={{fontStyle:'italic'}}>	&quot;Nós os profissionais de segurança privada não queremos ser apenas qualificados e treinados, queremos ser sim os melhores no que fazemos	&quot;</p>
            <p style={{fontSize:'22px', fontWeight:'bold'}}>Paulo Mello</p>
                <br />
                <br />
                <Button text="Sobre nós" route="/sobre" />
            </div>
        </div>
    </div>
)

export default QuemSomos