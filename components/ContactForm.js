import styles from './ContactForm.module.css'
import { useRef, useState, Fragment, useEffect } from 'react';


/* import { send } from 'emailjs-com' */



const ContactForm = props => {

  

    const formRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const contactRef = useRef()
    const messageRef = useRef()


    const handleSubmit = e => {
    

    }


    return (
        <div className={styles.FormWrapper}>
            <h4>Enviar mensagem</h4>
            <br/>
             <form
                method="post"
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <input ref={nameRef} type="text" placeholder="Nome*" name="nome" required></input>
                <input ref={emailRef} type="email" placeholder="Email*" name="email" required></input>
                <input ref={contactRef} type="tel" placeholder="Telefone*" name="telefone" required></input>
                
                <textarea ref={messageRef} name="mensagem" cols="40" rows="8" placeholder="Mensagem" required></textarea>
               
                <button type="submit">ENVIAR MENSAGEM</button>
                <br />
                <br />
                <br />
                <p style={{ color: 'var(--light-grey)', fontFamily: 'lato-light' }}>Responderemos à sua mensagem o mais rapidamente possível. Garantimos a confidencialidade dos seus dados</p>
            </form>
           
        </div>
    )
}

export default ContactForm