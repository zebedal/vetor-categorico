import styles from '../styles/Vigilante.module.css'
import Container from '../components/UI/Container'
import Head from 'next/head'
import { Fragment } from 'react'
import Image from 'next/image'
import MarcarConsulta from '../components/MarcarConsulta'
import FerramentasAvaliacao from '../components/avaliacao/FerramentasAvaliacao'
import Oferta from '../components/homepage/Oferta'

const Avaliacao = props => (
    <Fragment>
        <Head>
            <title>Vetor Categorico | Vigilante de Transporte de Valores </title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/valores.png" layout="fill" objectFit="cover" alt="seguranca montijo" loading="eager" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Vigilante</span> de Transporte de Valores</h2>
            <br /><br />
            <p>Formação que permite a obtenção do cartão profissional que o habilita ao exercício da especialidade de Vigilante de Transporte de Valores da profissão de segurança privado</p>
            <br />
            <p>O Curso de Vigilante de Transportes de Valores é uma formação que tem como objetivo dotar os futuros profissionais de técnicas e procedimentos de transporte de valores. O transporte de valores consiste no transporte seguro de dinheiro e outros bens, realizado por uma empresa especializada.</p>
            <br/>
            <h5>O curso tem os seguintes objectivos:</h5>
            <ul className={styles.modulos}>
                <li>Dotar os formandos de competências específicas na área da segurança privada, mais concretamente, no transporte de valores;</li>
                <li>Avaliação de riscos e ameaças;</li>
                <li>Planificação de itinerários e rotas;</li>
                <li>Gestão de conflitos e identificação de comportamentos de risco, técnicas de proteção pessoal em deslocão;</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <ul className={styles.estrutura}>
                <li>VTV01 Regime legal da atividade de transporte de valores . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VTV02 Avaliação de riscos e ameaças . . . . . . . . . . 10h</li>
                <li>VTV03 Planeamento operacional, avaliação e relatórios . . .  10h</li>
                <li>VTV04 Planificação de itinerários e rotas . . . . . . . 10h</li>
                <li>VTV05 Técnicas e procedimentos de transporte de valores . . . . . . . . . . . . . . . . . . . . . . . . . . 25h</li>
                <li>VTV06 Utilização e manutenção de sistemas eletrónicos de segurança . . . . . . . . . . . . . . . . . 25h</li>
                <li>VTV07 Técnicas de proteção pessoal em deslocações . . . . . . . . . . . . . . . . . . . . . . . . . 25h</li>
                <li>VTV08 Procedimentos de segurança e condução de veículos de transporte de valores . . . . . . 10h</li>
                <li>VTV09 Gestão de incidentes e procedimentos de emergência . . . . . . . . . . . . . . . . . . . . . . . 25h</li>
                <li>VTV10 Gestão de conflitos e identificação de comportamentos de risco . . . . . . . . . . . . . . . 10h</li>
                <li>VIG07 Defesa pessoal . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>Total . . . . . . . . . . . . . 170h</li>
            </ul>
            <br/>
          
        </Container>


        {/* <div style={{ background: 'var(--grey)' }}>
            <Container paddingTopBottom={30}>
                <h2 className={styles.subTitle}><span>Estrutura</span> do Curso</h2>
                <FerramentasAvaliacao />
            </Container>
        </div> */}
        <MarcarConsulta />
        <Oferta background="white"/>

    </Fragment>
)


export default Avaliacao