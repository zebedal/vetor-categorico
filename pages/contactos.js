import ContactForm from "../components/ContactForm"
import Container from "../components/UI/Container"
import styles from '../styles/Contactos.module.css'
import Facebook from '../components/svg/Facebook'
import Linkedin from '../components/svg/Linkedin'
import MarcarConsulta from '../components/MarcarConsulta'

const Contactos = props => (
    <div>
        <Container paddingTopBottom={50} paddingLeftRight={20}>
            <div className={styles.flex}>
                <div>
                    <h2>Contactos</h2>
                    <strong className={styles.Strong}>Estamos sempre dispostos a ajudar</strong>
                    <br/><br/>
                    <div className={styles.contact}><span>Telefone:</span> 917 641 225 - 939 163 067</div>
                    <div className={styles.contact}><span>Email:</span> geral@vectorform.pt</div>
                    <p>Rua Gago Coutinho nº41 – 2870-330 Montijo</p>
                    <br/>
                    <p>Disponível todos os dias úteis, das <b>09h00</b> às <b>18:00</b></p>
                    <br />
                    <h5>Siga-nos!</h5>
                    <br/>
                    <Facebook width={20} height={20}/>&nbsp;&nbsp;
                    <Linkedin width={20} height={20}/>
                </div>
                <ContactForm />
            </div>
        </Container>
        <MarcarConsulta />
    </div>
)

export default Contactos