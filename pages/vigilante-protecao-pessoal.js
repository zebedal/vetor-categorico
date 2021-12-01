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
            <title>Vetor Categorico | Vigilante de Proteção Pessoal</title>
            <meta name="description" content="Serviços de formação certificada em vigilância e segurança" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/seguranca-pessoal.jpg" layout="fill" objectFit="cover" alt="seguranca montijo" loading="eager" />
        </div>


        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Vigilante</span> de Proteção Pessoal</h2>
            <br /><br />
            <p>Formação que permite a obtenção do cartão profissional que o habilita ao exercício da especialidade de Vigilante de Proteção Pessoal e Acompanhamento Pessoal da profissão de segurança privado</p>
            <br />
            <p>O curso de Vigilante de Proteção e Acompanhamento Pessoal irá permitir ao formando a aquisição de conhecimentos, competências e atitudes, para que o mesmo seja capaz de executar tarefas de forma exímia como VPAP.</p>
            <br/>
            <h5>O curso tem os seguintes objectivos:</h5>
            <ul className={styles.modulos}>
                <li>Identificar as funções de segurança de proteção e acompanhamento pessoal;</li>
                <li>Conhecer o regime de exercício da proteção pessoal;</li>
                <li>Gerir conflitos;</li>
                <li>Registar incidentes, tendo em conta os procedimentos necessários;</li>
                <li>Aplicar técnicas de defesa pessoal.</li>
            </ul>
            <br/>
            <h5>Estrutura do Curso:</h5>
            <br/>
            <ul className={styles.estrutura}>
                <li>VPAP01 Enquadramento legal da proteção e acompanhamento pessoal. . . . . . . . . . . . . . . . . . 10h</li>
                <li>VPAP02 Avaliação de riscos e ameaças . . . . . . . . . . 10h</li>
                <li>VPAP03 Planeamento operacional, avaliação e relatórios 10h</li>
                <li>VPAP04 Reconhecimento de itinerários e locais . . . 10h</li>
                <li>VPAP05 Técnicas e procedimentos de proteção pessoal 50h</li>
                <li>VPAP06 Técnicas de deslocação em veículos . . . . . 10h</li>
                <li>VPAP07 Técnicas de proteção pessoal em edifícios e eventos . . . . . . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VPAP08 Técnicas de condução . . . . . . . . . . . . . . . . 10h</li>
                <li>VPAP09 Procedimentos segurança, revista e buscas . . . . . . . . . . . 10h</li>
                <li>VPAP10 Gestão de incidentes e procedimentos de emergência . . . . . . . . . . . . . . . . . . . . . . . 25h</li>
                <li>VPAP11 Gestão de conflitos, resolução e técnicas de comunicação . . . . . . . . . . . . . . . . . . . . . 10h</li>
                <li>VPAP12 Defesa Pessoal . . . . . . . . . . . . . . . . . . . . . . 25h</li>
                <li>Total . . . . . . . . . . . . . 190h</li>
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