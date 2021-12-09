import styles from '../styles/Media.module.css'
import Image from 'next/image'
import { Fragment } from 'react'
import Oferta from '../components/homepage/Oferta'
import { SRLWrapper } from "simple-react-lightbox";
import { images } from '../data/images'
import MarcarConsulta from '../components/MarcarConsulta'


const Sobre = props => (
    <Fragment>
        <div className={`container ${styles.imageContainer}`} >
            <SRLWrapper>
                {images.map(img => <div className={styles.imgBox} key={img}><Image src={img.src} alt={img.alt} layout="fill" /></div>)}
            </SRLWrapper>
        </div>

        <MarcarConsulta />

        <Oferta background="white" />


    </Fragment>
)

export default Sobre