import styles from '../styles/Coaching.module.css'
import Container from '../components/UI/Container'
import Image from 'next/image'
import { Fragment } from 'react'
import MarcarConsulta from '../components/MarcarConsulta'
import Head from 'next/head'
import Oferta from '../components/homepage/Oferta'

const Formacao = props => (
    
    <Fragment>
        <Head>
        <title>Psicohelp | Psicologia. Saúde. Recursos Humanos</title>
        <meta name="description" content="Serviço de psicologia clínica, psicoterapia e coaching. Orientação Escolar e Vocacional" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

        <div className={styles.wrapper}>
            <Image src="/assets/img/formacao/formacao.jpg" priority={true} loading="eager" layout="fill" objectFit="cover" alt="formação barreiro" />
        </div>
        <Container paddingTopBottom={50}>
            <h2 className={styles.subTitle}><span>Serviços de</span> Formação</h2>
            <br /><br />
            <p>Tendo em consideração as particularidades de cada Cliente, desenvolvemos ações de formação que tem por base um aprofundado diagnóstico de necessidades, o que permite desenhar cada ação “à medida” das reais necessidades e objetivos dos nossos Clientes.</p>
            <br/>
            <p>As metodologias que utilizamos, permitem envolver os participantes na ações, captando a sua atenção, motivação e participação nos diversos desafios com que são confrontados.</p>
            <br />
            <p>Recorremos a metodologias ativas e práticas, utilizando para o efeito, exercícios, role plays, simulações, dinãmicas de grupo, provas de team building, entre outros.</p>
            <br/>
            <p>A nossa esfera de atuação, tem como “foco” a vertente comportamental, podendo as ações assumir um formato de duração mais alargada (2/3 dias) , ou um formato mais curto, como é o caso dos Workshops Temáticos. Atuamos em áreas como sejam:</p>
            <br/>
            <ul className={styles.listWrapper}>
                <li>Comunicação</li>
                <li>Gestão do Tempo</li>
                <li>Gestão do Stress</li>
                <li>Trabalho em Equipa</li>
                <li>Gestão da Mudança</li>
                <li>Liderança, entre outros</li>
            </ul>
        </Container>
        <MarcarConsulta />
        <Oferta background="white"/>

    </Fragment>
)

export default Formacao