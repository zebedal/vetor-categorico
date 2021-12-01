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
            <title>Vetor Categorico | Assistente de Portos e Aeroportos – Proteção Portuária</title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/portuario.png" layout="fill" objectFit="cover" alt="seguranca montijo" loading="eager" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Assistente</span> Portos e Aeroportos - Proteção Portuária</h2>
            <br /><br />
            <p>Formação que permite a obtenção do cartão profissional que o habilita ao exercício da especialidade de Assistente Portuário da profissão de segurança privado</p>
            <br />
            <p>Este curso é o módulo de formação específico que permite exercer a função de Assistente Portuário, nomeadamente Vigilância de Portarias e Receções em zonas de segurança portuária; Vigilância para Controlo de Acessos em zonas portuárias controladas e Vigilância em sistemas por Rondas em segurança portuária. Pretende-se que os formandos apliquem na sua atividade profissional conhecimentos e competências na área da legislação nacional e internacional portuária; funções do agente portuário; de forma que o formando exerça a função de agente portuário de forma eficaz e profissional.</p>
            <br/>
            <h5>O curso tem os seguintes objectivos:</h5>
            <ul className={styles.modulos}>
                <li>Transmitir conhecimentos básicos das funções de assistente de portos e aeroportos;</li>
                <li>Conhecer o regime jurídico nacional e internacional aplicável à segurança aérea e aeroportuária;</li>
                <li>Adquirir competências em termos de utilização de equipamentos eletrónicos de segurança e do controlo de pessoas, bagagens e mercadorias;</li>
                <li> Reconhecer as normas de segurança nas infraestruturas aeroportuárias, comportamentos antissociais e proibidos, conforto, orientação e bem-estar dos passageiros;</li>
                <li>Transmitir competências na gestão de incidentes e execução de planos de segurança.</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <ul className={styles.estrutura}>
                <li>APP01 Funções e conteúdos funcionais da atividade de assistente de portos e aeroportos em ambiente portuário . . . . 10h</li>
                <li>APP02 Regime legal nacional e internacional aplicável ao transporte marítimo e infraestruturas portuárias. . . . . . 10h</li>
                <li>APP03 Sistemas Nacionais de Segurança e Planos Nacionais de Segurança . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>APP04 Manutenção de ambiente seguro e gestão de necessidades de utentes de infraestruturas portuárias . . . . . . . . 10h</li>
                <li>APP05 Técnicas e procedimentos de controlo de pessoas, bagagens e mercadorias (portos). . . . . . . . . . . . . . . . 25h</li>
                <li>APP06 Planos de segurança e emergência portuários . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  10h</li>
                <li>APP07 Procedimentos de revistas pessoais e buscas de segurança (portos) . . . . . . . . . . . . . . . . . . . . . . .  10h</li>
                <li>APP08 Técnicas, procedimentos e prática de identificação de objetos, bens e substâncias perigosas ou proibidas . . . . 25h</li>
                <li>APP09 Identificação de documentos e de sinais, marcas, símbolos e códigos internacionais e nacionais de mercadorias . . 10h</li>
                <li>APP10 Gestão de conflitos: identificação de comportamentos de risco, resolução e técnicas de comunicação. . . . . . . . 10h</li>
                <li>VIG07 Defesa pessoal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  10h</li>
                <li>Total . . . . . . . . . . . . . 140h</li>
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