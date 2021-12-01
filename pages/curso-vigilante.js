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
            <title>Vetor Categorico | Curso de Vigilante Montijo</title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/vigilante.jpg" layout="fill" objectFit="cover" alt="vigilante montijo" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Curso de</span> Vigilante</h2>
            <br /><br />
            <p>Um Vigilante é o trabalhador, devidamente habilitado e autorizado a exercer as funções previstas na Lei n.º46/2019 de 8 de julho, vinculado por contrato de trabalho a entidades titulares de alvará ou licença que podem desempenhar os seguintes serviços de segurança privada:. </p>
            <br />
            <p> A vigilância de imóveis e o controlo de entrada, presença e saída de pessoas, bem como a prevenção da entrada de armas, substâncias e artigos de uso e porte proibidos ou suscetíveis de provocar atos de violência no interior de edifícios ou outros locais, públicos ou privados, de acesso vedado ou condicionado ao público, ou ainda a vigilância de bens móveis em espaço delimitado fisicamente. </p>
            <br/>
            <h5>O curso está dividido em 4 módulos:</h5>
            <ul className={styles.modulos}>
                <li><b>Módulo Incêndios (25Horas)</b> - Módulo que permite utilizar os meios de 1.ª intervenção; aplicar técnicas de 1.ª intervenção em incêndios; aplicar os procedimentos estabelecidos nos planos de emergência.</li>
                <li><b>Módulo Socorrismo  (25 Horas)</b> - Módulo que permite utilizar os meios de 1.ª intervenção; aplicar técnicas de 1.ª intervenção em primeiros socorros; aplicar os procedimentos estabelecidos nos planos de emergência.</li>
                <li><b>Módulo Base (60Horas)</b> - Pretende-se que os formandos apliquem na sua atividade profissional conhecimentos e competências na área da do direito, regime jurídico da segurança privada, princípios deontológicos e perfil profissional, elaboração de relatórios e comunicações e segurança e higiene no trabalho.</li>
                <li><b>Módulo Vigilante  (90H)</b> - Este é o módulo de formação específico que permite exercer a função de vigilante. Pretende-se que os formandos apliquem na sua atividade profissional conhecimentos e competências na área da segurança física, vigilância humana e eletrónica, revistas, gestão de conflitos, registo de relatórios, defesa pessoal, segurança eletrónica e videovigilância.</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <p><b>Base:</b></p>
            <ul className={styles.estrutura}>
                <li>BAS01 Diversidade, direitos fundamentais e direitos do homem . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>BAS02 Crime, procedimento penal e meios de prova . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>BAS03 Regime jurídico do exercício da atividade de segurança privada, sistema de segurança interna e forças e serviços de segurança …. 10h</li>
                <li>BAS04 Princípios deontológicos e perfil profissional. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>BAS05 Elaboração de relatórios e comunicações . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>BAS06 Segurança e Higiene no trabalho aplicado à segurança privada. . . . . . . . . . . . . . . . . . 10h</li>
                <li>Total . . . . . . . . . . . . . 60h</li>
            </ul>
            <br/>
            <p><b>Vigilante:</b></p>
            <ul className={styles.estrutura}>
                <li>VIG01 Segurança física e controlo de acessos . . . 10h</li>
                <li>VIG02 Técnicas e prática de vigilância humana e eletrónica e intervenção de alarmes . . . . 10h</li>
                <li>VIG03 Procedimentos operacionais. . . . . . . . . . . . 10h</li>
                <li>VIG04 Revistas pessoais de prevenção e segurança. . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG05 Gestão de conflitos e procedimentos de detenção . . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VIG06 Registos técnicos e relatórios e simulação prática de incidentes. . . . . . . . . . . . . . . . 10h</li>
                <li>VIG07 Defesa pessoal . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>ALM01 Segurança eletrónica e procedimentos operacionais de emergência em alarmes . . . 10h</li>
                <li>ALM02 Operação de meios de videovigilância e centrais de alarme . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>Total . . . . . . . . . . . . . 90h</li>
            </ul>
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