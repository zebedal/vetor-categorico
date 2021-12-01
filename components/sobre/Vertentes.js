import styles from './Vertentes.module.css'



const Vertentes = props => (
    <div className={styles.grid}>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/assessment.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Assessment</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/avaliacao-psicologica.svg" alt="avaliacao psicológica"/>
            <h5 className={styles.boxTitle}>Avaliação Psicológica</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/executive-search.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Executive Search</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/formacao.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Formação</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/gestao-mudanca.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Gestão da Mudança</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/gestao-carreira.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Gestão de Carreira</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/coaching.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Coaching e Orientação Escolar</h5>
        </div>

        <div className={styles.box}>
            <img src="/assets/img/icons/vertentes/coaching2.svg" alt="assessment"/>
            <h5 className={styles.boxTitle}>Coaching Vocacional e Profissional</h5>
        </div>



    </div>
)

export default Vertentes