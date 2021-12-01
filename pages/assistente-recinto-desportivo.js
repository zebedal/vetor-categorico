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
            <title>Vetor Categorico | Curso de Assistente de Recinto Desportivo</title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/assistente_banner.jpg" layout="fill" objectFit="cover" alt="vigilante montijo" loading="eager" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Assistente</span> de Recinto Desportivo</h2>
            <br /><br />
            <p>Formação que permite a obtenção do cartão profissional que o habilita ao exercício da especialidade de assistente de Recinto Desportivo da profissão de segurança privado</p>
            <br />
            <p>Pretende-se que os formandos apliquem na sua atividade profissional conhecimentos e competências na área da legislação dos espetáculos desportivos e prevenção da violência, sistema de segurança, ambiente e gestão de multidões, comunicação com espectadores, planos de contingência e emergência, revistas, gestão de conflitos e defesa pessoal. </p>
            <br/>
            <h5>O curso tem os seguintes objectivos:</h5>
            <ul className={styles.modulos}>
                <li>Desenvolver competências pessoais, sociais e profissionais necessárias para a execução da função de vigilante de segurança privada</li>
                <li>Promover a aquisição de competências para a realização de revistas de pessoas e buscas de prevenção de segurança</li>
                <li>Promover a aquisição de competências em gestão de conflitos</li>
                <li>Promover a aquisição de conhecimentos em defesa pessoal</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <ul className={styles.estrutura}>
                <li>ARD01 Regime legal dos espetáculos desportivos e da prevenção da violência . . . . . . . . . . . 10h</li>
                <li>ARD02 Sistema de segurança em recintos desportivos e estrutura de comando . . . . . . . . . . 10h</li>
                <li>ARD03 Manutenção de ambiente seguro e gestão de multidões . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ARD04 Gestão das necessidades dos espetadores. Informação, orientação e aconselhamento 10h</li>
                <li>ARD05 Planos de contingência e de emergência. Evacuação de recintos desportivos. . . . . 10h</li>
                <li>ARD06 Procedimentos de revistas e buscas de segurança . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ARD07 Gestão de incidentes e procedimentos de emergência . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG05 Gestão de conflitos e procedimentos de detenção . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG07 Defesa pessoal . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>Total . . . . . . . . . . . . . 90 h</li>
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