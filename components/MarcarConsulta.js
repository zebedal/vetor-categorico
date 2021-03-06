import Container from "./UI/Container"
import styles from './MarcarConsulta.module.css'
import Button from "./UI/Button"
import Link from 'next/link'

const MarcarConsulta = props => (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.flex}>
                <div>
                    <h2><span>Marque já a sua visita!</span> Ligue: 939 163 067</h2>
                    <strong style={{ color: 'white', fontWeight: 100 }}>Somos um grupo de profissionais com experiência alargada em formação e vigilância</strong>
                </div>
            
                <Button text="Mais informações" background="var(--purple)" margin={30} route="/contactos" />
            </div>
        </Container>
    </div>
)

export default MarcarConsulta