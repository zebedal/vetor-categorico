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
            <title>Vetor Categorico | Curso de Assistente de Recinto de Espectáculos</title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/espectaculos.jpg" layout="fill" objectFit="cover" alt="vigilante montijo" loading="eager" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Assistente</span> de Recinto de Espectáculos</h2>
            <br /><br />
            <p>Formação que permite a obtenção do cartão profissional que o habilita ao exercício da especialidade de assistente de Recinto de Espetáculos da profissão de segurança privado</p>
            <br />
            <p>Pretende-se que os formandos apliquem na sua atividade profissional conhecimentos e competências na área da legislação dos espetáculos e divertimento públicos, regulamentos de prevenção e segurança do evento, ambiente e gestão de multidões, comunicação com espectadores, planos de contingência e emergência, revistas, gestão de conflitos e defesa pessoal.</p>
            <br/>
            <h5>O curso tem os seguintes objectivos:</h5>
            <ul className={styles.modulos}>
                <li>Formar profissionais para o cumprimento da legislação em vigor</li>
                <li>Desenvolver competências pessoais, sociais e profissionais necessárias para a execução da função de vigilante de segurança privada</li>
                <li>Dota-los das competências necessárias e fundamentais ao exercício da atividade de segurança e vigilância privada, em espaços públicos ou privados em empresas prestadoras de serviços na área da segurança</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <ul className={styles.estrutura}>
                <li>ARE01 Regime legal dos espetáculos e divertimentos públicos . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ARE02 Regulamentos de prevenção e segurança do evento. . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ARE03 Planos de contingência e de emergência . . . 10h</li>
                <li>ARD03 Manutenção de ambiente seguro e gestão de multidões . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ARD04 Gestão das necessidades dos espetadores. Informação, orientação e aconselhamento 10h</li>
                <li>ARD06 Procedimentos de revistas e buscas de segurança 10h</li>
                <li>ARD07 Gestão de incidentes e procedimentos de emergência . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG05 Gestão de conflitos e procedimentos de detenção 10h</li>
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