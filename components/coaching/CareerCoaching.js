import React from 'react'
import Container from '../UI/Container'
import styles from './CareerCoaching.module.css'

const CareerCoaching = props => (
    <Container padding={50} paddingLeftRight={0}>
        <p>O cenário económico mundial, cada vez mais globalizado e em constante mutação, provoca, um grau de incerteza cada vez maior face ao futuro. Esta situação acaba por ter repercussões na economia global, mas também nas economias de cada país, levando a alterações nas Empresas, mas também nos seus colaboradores.</p>
        <br/>
        <p>Enquanto nas gerações anteriores, havia uma maior possibilidade de prevermos o futuro de um determinado indivíduo relativamente à sua carreira, hoje vivemos num mundo, onde as alterações tecnológicas, as fusões e aquisições de Empresas e o desenvolvimento de novas competências (pessoais e profissionais) levam a que “cada indivíduo, tenha de ser o gestor da carreira”.</p>
        <br/>
        <p>Assim, para os profissionais que estão a desenhar, a avaliar ou a reinventar a carreira, e pretendem tornar-se mais competitivos face a um mercado cada vez mais exigente, o Career Coaching pode ser um precioso auxiliar, ao nível de:</p>
        <br/>
        <ul className={styles.listWrapper}>
            <li>Tomada de decisão sobre o rumo de carreira a seguir, por exemplo ao nível de recém-licenciados e/ou profissionais com experiência que pretendam vir a encarar um novo desafio profissional</li>
            <li>Desempenho de um novo cargo/função</li>
            <li>Aquisição de “ferramentas” para a procura de Emprego (redes sociais, sites de emprego, entrevista, …)</li>
            <li>Melhoria de competências - soft skills (capacidade de trabalhar em equipa, comunicação, , gestão do tempo e do stress….) face ao assumir de uma nova função ou  mudança para uma nova Organização.</li>
        </ul>
    </Container>
)

export default CareerCoaching