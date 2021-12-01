import styles from './Services.module.css'

const Services = props => (
    <div className={styles.flex}>

        <div className={styles.serviceBox} >
            <h2>Para Jovens</h2>
            <p>Dispomos de diversos serviços direcionados aos mais jovens no âmbito da formação.</p>
            <ul>
                <li>Serviço 1</li>
                <li>Serviço 2</li>
                <li>Serviço 3</li>
                <li>Serviço 4</li>
            </ul>
        </div>

        <div className={styles.serviceBox}>
            <h2>Para Adultos</h2>
            <p>Dispomos de diversos serviços direcionados aos adultos e no âmbito da formação em vigilância.</p>
            <ul>
                <li>Formação 1</li>
                <li>Formação 2</li>
                <li>Formação 3</li>
                <li>Formação 4 </li>
            </ul>
        </div>

        <div className={styles.serviceBox}>
            <h2>Para Seniores</h2>
            <p>Dispomos de diversos serviços direcionados a seniores de todas as idades no âmbito da formação.</p>
            <ul>
                <li>Formação 1</li>
                <li>Formação 2</li>
                <li>Formação 3</li>
                <li>Formação 4 </li>
            </ul>
        </div>

    </div>
)

export default Services