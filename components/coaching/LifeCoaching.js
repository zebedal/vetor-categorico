import React from 'react'
import Container from '../UI/Container'
import styles from './LifeCoaching.module.css'

const LifeCoaching = props => (
    <Container paddingTopBottom={50} paddingLeftRight={0}>
        <p>Ajuda a planear e definir metas pessoais reais e alcançáveis, ter mais objetividade e foco nas ações e alcançar o que é realmente mais importante para a vida do Coachee e para a sua realização pessoal</p>
        <br/>
        <p>O Coach tem como objetivo, ajudar os seus Coachees a alcançarem um equilíbrio entre as diversas vertentes da sua vida, de modo a que se sintam mais realizados.</p>
        <br/>
        <p>Embora possam ser “trabalhadas” diversas variáveis, podemos destacar:</p>
        <br/>
        <ul className={styles.listWrapper}>
            <li>Capacidade de comunicação</li>
            <li>Autoconfiança</li>
            <li>Capacidade de relacionamento interpessoal (a nível familiar, social e profissional)</li>
            <li>Gestão do stress</li>
            <li>Imagem e marketing pessoal</li>
        </ul>
    </Container>
)

export default LifeCoaching