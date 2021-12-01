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
            <title>Vetor Categorico | Curso de Segurança - Porteiro</title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/seguranca.jpg" layout="fill" objectFit="cover" alt="seguranca montijo" loading="eager" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Curso</span> de Segurança - Porteiro</h2>
            <br /><br />
            <p>Formação que permite a obtenção do cartão profissional que o habilita ao exercício da especialidade de Segurança Porteiro da profissão de segurança privado</p>
            <br />
            <p>Pretende-se que os formandos apliquem na sua atividade profissional conhecimentos e competências na área legal dos estabelecimentos de restauração e bebidas, sistemas de segurança obrigatórios, direitos de acesso e identificação de comportamentos de risco, segurança física, vigilância humana e eletrónica, revistas, gestão de conflitos, registo de relatórios, defesa pessoal, segurança eletrónica e videovigilância.</p>
            <br/>
            <h5>O curso tem os seguintes objectivos:</h5>
            <ul className={styles.modulos}>
                <li>Formar profissionais para o cumprimento da legislação em vigor</li>
                <li>Desenvolver competências pessoais, sociais e profissionais necessárias para a execução da função de vigilante de segurança porteiro</li>
                <li>Dota-los das competências necessárias e fundamentais ao exercício da atividade de segurança e vigilância privada, em espaços públicos ou privados em empresas prestadoras de serviços na área da segurança</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <ul className={styles.estrutura}>
                <li>SPR01 Regime legal dos estabelecimentos de restauração e de bebidas . . . . . . . . . . . . . . . 10h</li>
                <li>SPR02 Sistemas de segurança obrigatórios e funções do segurança -porteiro. . . . . . . . . . . . . . . 10h</li>
                <li>SPR03 Direito de acesso e identificação de comportamentos de risco . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG01 Segurança física e controlo de acessos . . . 10h</li>
                <li>VIG02 Técnicas e prática de vigilância humana e eletrónica e intervenção de alarmes . . . . 10h</li>
                <li>VIG03 Procedimentos operacionais. . . . . . . . . . . . 10h</li>
                <li>VIG04 Revistas pessoais de prevenção e segurança 10h</li>
                <li>VIG05 Gestão de conflitos e procedimentos de detenção . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG06 Registos técnicos e relatórios e simulação prática de incidentes. . . . . . . . . . . . . . . . 10h</li>
                <li>VIG07 Defesa pessoal . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ALM01 Segurança eletrónica e procedimentos operacionais de emergência em alarmes . . . 10h</li>
                <li>ALM02 Operação de meios de videovigilância e centrais de alarme . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>Total . . . . . . . . . . . . . 120 h</li>
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