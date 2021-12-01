
import styles from './Burger.module.css'

const Burger = ({toggleMenu, animateFill}) => (
    <div className={styles.Burger}>
        <svg width="27" height="18" viewBox="0 0 27 18" fill="none" onClick={toggleMenu}>
            <path d="M1 1H26" stroke={animateFill ?  '#fff':'#1a1a1a'} strokeWidth="2" strokeLinecap="round" />
            <path d="M1 9H26" stroke={animateFill ?  '#fff':'#1a1a1a'}  strokeWidth="2" strokeLinecap="round" />
            <path d="M1 17H26" stroke={animateFill ?  '#fff':'#1a1a1a'}  strokeWidth="2" strokeLinecap="round" />
        </svg>


    </div>
)

export default Burger