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
                    <br /><br />

                    <div>
                        <strong className={styles.Strong}>Montijo</strong>
                        <div className={styles.contact}><span>Telefone:</span> 917 641 225 - 939 163 067</div>
                        <div className={styles.contact}><span>Email:</span> geral@vectorform.pt</div>
                        <address>Rua Gago Coutinho nº41 – 2870-330 </address>
                    </div>
                    <br />
                    <div>
                        <strong className={styles.Strong}>Vila do Conde</strong>
                        <div className={styles.contact}><span>Telefone:</span> 910 488 504 </div>
                        <div className={styles.contact}><span>Email:</span> norte@vectorform.pt</div>
                        <address>Av.ª Júlio Saúl Dias n.º 48 R/c - 4480-673</address>
                    </div>
                    <br />
                    <div>
                        <strong className={styles.Strong}>Santiago do Cacém</strong>
                        <div className={styles.contact}><span>Telefone:</span> 964 408 924 </div>
                        <div className={styles.contact}><span>Email:</span> vetorformsantiagocacem@gmail.com</div>
                        <address>Rua da Estação dos Caminhos de Ferro nr 11 - 7540-157</address>
                    </div>
                    <br />
                    <div>
                        <strong className={styles.Strong}>Leiria</strong>
                        <div className={styles.contact}><span>Telefone:</span> 913 888 690 </div>
                        <address>Rua da Carvalha, nº570 - 2400-441</address>
                    </div>
                    <br />
                    <div>
                        <strong className={styles.Strong}>Entroncamento</strong>
                        <div className={styles.contact}><span>Telefone:</span> 913 888 690 </div>
                        <address>Rua Dom João de Castro, nº8 C - 2300-138</address>
                    </div>
                </div>
                <ContactForm />
            </div>
        </Container>
        <MarcarConsulta />
    </div>
)

export default Contactos