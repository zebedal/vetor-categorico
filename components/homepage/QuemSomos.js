import styles from './QuemSomos.module.css'
import Image from 'next/image'
import Button from '../UI/Button'

const QuemSomos = props => (
    <div className="container">
        <div className={` ${styles.flex}`}>
            <div className={styles.imgWrapper}>
                <Image src="/assets/img/nos.jpg" layout="fill" alt="psicologia e psicoterapia" />
            </div>
            <div className={styles.content}>
                <strong>Quem somos</strong>
                <h2>Somos o seu melhor <span>formador</span></h2>
                <br />
                <br />
                <br />
                <p>
                    Et nostrud proident proident minim in qui qui qui nulla sint ad ad exercitation tempor. Consectetur tempor laborum ipsum ullamco sint in do irure in. Sunt officia cupidatat pariatur qui esse duis excepteur adipisicing ullamco. Exercitation nisi ex nostrud aliqua et.
                </p>
                <br />
                <br />
                <Button text="Sobre nós" route="/sobre" />
            </div>
        </div>
    </div>
)

export default QuemSomos