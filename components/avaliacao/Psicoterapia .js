import Container from "../UI/Container"
import styles from './PsicologiaClinica.module.css'

const Psicoterapia = props => (
    <Container paddingTopBottom={50}>
        <p>A psicoterapia tem como objetivo auxiliar o indivíduo a tomar consciência da razão dos seus receios/problemas, visando o alcançar de mudanças comportamentais que influenciem positivamente todos os campos da sua vida, seja a nível familiar, escolar, social, profissional e de uma forma global, contribua para o seu bem-estar físico e mental.</p>
        <br/>
        <p>A psicoterapia está indicada para o tratamento de situações como sejam:</p>
        <br/>
        <ul className={styles.listWrapper}>
            <li>Depressão</li>
            <li>Distúrbios alimentares (anorexia, bulimia,…)</li>
            <li>Fobias</li>
            <li>Stress pós-traumático</li>
            <li>Conflitos relacionais</li>
            <li>Conflitos conjugais e familiares</li>
            <li>Problemas relacionados com o trabalho (Burnout, por exemplo), entre outros</li>
        </ul>
        <br/>
        <br/>
        <p>Desenvolvemos a Psicoterapia nas seguintes vertentes</p>
        <br/>
        <ul className={styles.listWrapper}>
            <li>Crianças e Adolescentes</li>
            <li>Adultos</li>
            <li>Casal</li>
            <li>Familiar</li>
          
        </ul>
    </Container>
)

export default Psicoterapia