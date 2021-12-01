import styles from './Back.module.css'
import Image from 'next/image'
import back from '../../public/assets/img/back.jpg'
import Calendar from '../svg/Calendar'
import Therapy from '../svg/Therapy'
import Customer from '../svg/Customer'

const Back = props => (
    <div className={styles.wrapper}>
        <Image src={back} layout="fill" objectFit="cover" alt="coaching"/>
        <div className={`container ${styles.flex}`}>

            <div className={styles.box}>
                <Calendar />
                <div>20+</div>
                <p>Anos de experiência</p>
            </div>

            <div className={styles.box}>
                <Therapy />
                <div>10+</div>
                <p>Várias especialidades</p>
            </div>

            <div className={styles.box}>
                <Customer />
                <div>500+</div>
                <p>Clientes satisfeitos</p>
            </div>



        </div>
    </div>
)

export default Back