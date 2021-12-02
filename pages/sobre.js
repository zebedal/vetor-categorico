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
                    <h2>Olá, somos a <span>Vetor Categórico</span></h2>
                    <br />
                    <br />
                    <p>Somos um Centro de Formação criado no ano de 2019 no Montijo, possuidores de Certificação DGERT e com autorização da DN PSP número 52, para a formação na área de Segurança Privada.</p>
                    <br />
                    <p>O nosso objetivo é formar profissionais capacitados e com todos os conhecimentos necessários para que possam exercer a sua profissão com a dignidade e brio que a mesma necessita.</p>
                    <br />
                    <p>Queremos contribuir para que a imagem da profissão de Segurança Privada seja uma imagem de profissionalismo, rigor e empenho..</p>
                    <br />
                    <h3>Missão</h3>
                    <br />
                    <p>A VETOR CATEGÓRICO surge pela emergente necessidade de formar profissionais de segurança privada competentes e especializados em diversas áreas de atuação, fornecendo-lhes instrumentos e competências necessárias para se distinguirem no mercado de trabalho cada vez mais exigente e competitivo..
                    </p>
                    <br />
                    <p>
                    Através da nossa rede de centros de formação de segurança privada, preparamos os melhores profissionais no cumprimento da legislação em vigor, dotando-os das competências necessárias e fundamentais ao exercício da atividade de segurança e vigilância privada.
                    </p>
                    <p>Através de formação obrigatória e complementar pretendemos ser a referência da formação nesta área, sendo que para alcançar esse objetivo, contamos com um grupo de formadores altamente qualificados e com uma vasta experiência profissional quer na área da formação profissional quer no setor da Segurança Privada em Portugal.</p>
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