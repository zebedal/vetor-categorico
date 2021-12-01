import React from 'react'
import Container from '../UI/Container'
import styles from './ExecutiveCoaching.module.css'

const ExecutiveCoaching = props => (
    <Container padding={50} paddingLeftRight={0}>
        <p>O Executive Coaching, é um processo que visa apoiar executivos a incrementar a sua performance no contexto organizacional, tendo por base o alcançar de objetivos organizacionais, mas também ao nível do alcançar de objetivos pessoais..</p>
        <br/>
        <p>O Executive Coaching é desenhado à medida das necessidades e objetivos do Coachee, mas pode intervir em aspetos como:</p>
        <br/>
        <ul className={styles.listWrapper}>
            <li>Capacidade para estabelecer metas e objetivos bem definidos</li>
            <li>Definição de estratégias</li>
            <li>Conhecimento a fundo das características da função/ cargo e sua importância na Organização</li>
            <li>Aperfeiçoamento do desempenho profissional.</li>
            <li>Potencializar competências , como por exemplo a tomada de decisão, a gestão de equipas e do tempo, a liderança,...</li>
            <li>Identificar falhas, limitações e corrigi-las</li>
            <li>Desenvolver novas competências, que se revelem importantes face à função que desempenha ou ao futuro</li>
        </ul>
    </Container>
)

export default ExecutiveCoaching