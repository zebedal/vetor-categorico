import styles from '../styles/Sobre.module.css'
import Image from 'next/image'
import Button from '../components/UI/Button'
import Link from 'next/link'
import { Fragment } from 'react'
import Vertentes from '../components/sobre/Vertentes'
import Oferta from '../components/homepage/Oferta'

const Sobre = props => (
    <Fragment>
        <div className="container">
            <div className={styles.curvedWrapper}>
                <Image src="/assets/img/jose_small.jpg" width={400} height={400} layout="fixed" alt="jose vaz quintino" />
                <div>
                    <h2>Olá, sou o Dr. <span>José Vaz Quintino</span></h2>
                    <br />
                    <br />
                    <p>Possuidor de uma licenciatura e Mestrado em Psicologia pelo Instituto Universitário de Ciências Psicológicas, Sociais e da Vida (ISPA)</p>
                    <br />
                    <p>Tem assumido cargos de Direção Comercial, Marketing e Comunicação, Direção de Unidades de Negócio, assim como funções de Partner, em  Empresas de Consultoria de Recursos Humanos desde 2001;</p>
                    <br />
                    <p>Docente Universitário em Universidades Públicas e Privadas, nas vertentes de Consultoria e Gestão de Recursos Humanos.</p>
                    <br />
                    <h3>Missão</h3>
                    <br />
                    <p>A Psicohelp foi criada com a missão de colocar à disposição dos seus clientes, um leque de serviços diversificado nas áreas da Psicologia, Saúde e Recursos Humanos, contemplado vertentes como a Psicologia Clinica, a Psicoterapia, a Orientação Escolar/Vocacional e o Desenvolvimento Pessoal e Profissional.
                    </p>
                    <br />
                    <p>
                        Temos como objetivo principal, contribuir através dos nossos serviços, para a obtenção de um ajustado equilíbrio entre as vertentes pessoal, familiar, social e profissional dos nossos clientes, obtendo assim um maior bem estar físico e psicológico, traduzido no alcançar de metas e objetivos (pessoais e profissionais). A nossa equipa, conta com profissionais com experiência alargada em diversas vertentes da psicologia e saúde.
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.outerWrapper}>
            <div className="container">
                <h2>Principais<span> vertentes</span></h2>
                <Vertentes />
            </div>
            <br /><br /><br />
            <Link href="/contactos"><a><Button text="Contactar" background="var(--purple)" /></a></Link>
        </div>

        <Oferta background="white" />


    </Fragment>
)

export default Sobre