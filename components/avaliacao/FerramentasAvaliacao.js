import styles from './FerramentasAvaliacao.module.css'
import Image from 'next/image'
import { useState, Fragment, useEffect } from 'react'
import PsicologiaClinica from './PsicologiaClinica';
import Psicoterapia from './Psicoterapia ';
import OrientacaoEscolar from './OrientacaoEscolar';
import OrientacaoProfissional from './OrientacaoProfissional';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';




SwiperCore.use([Pagination]);


const FerramentasAvaliacao = props => {
    const [activeTool, setActiveTool] = useState(1)
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        const innerWidth = window.innerWidth < 550
        setIsMobile(innerWidth)
    }, [])

    const handleIndexChange = ({ realIndex }) => {
        setActiveTool(realIndex + 1)
    }


    return (
        <Fragment>

            <Swiper
                slidesPerView={1}
                onActiveIndexChange={handleIndexChange}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                style={{ marginTop: '50px', padding: '20px 0' }}
                breakpoints={{
                    920: {
                        slidesPerView: 3
                    },
                    450: {
                        slidesPerView: 2,
                    }
                }}
            >

                <div className={styles.flexWrapper}>

                    <SwiperSlide>
                        <div onClick={() => setActiveTool(1)} className={`${styles.slide} ${activeTool === 1 ? styles.selected : ""}`}>
                            <div className={styles.imgWrapper}><Image src="/assets/img/avaliacao/terapia.jpg" layout="fill" objectFit="cover" alt="avaliação psicológica" /></div>
                            <br />
                            <h4>Psicologia Clínica</h4>
                        </div>
                        {(isMobile && activeTool === 1) && <PsicologiaClinica />}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div onClick={() => setActiveTool(2)} className={`${styles.slide} ${activeTool === 2 ? styles.selected : ""}`}>
                            <div className={styles.imgWrapper}><Image src="/assets/img/avaliacao/psico-terapia.jpg" layout="fill" objectFit="cover" alt="terapia" /></div>
                            <br />
                            <h4>Psicoterapia</h4>
                        </div>
                        {(isMobile && activeTool === 2) && <Psicoterapia />}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div onClick={() => setActiveTool(3)} className={`${styles.slide} ${activeTool === 3 ? styles.selected : ""}`}>
                            <div className={styles.imgWrapper}><Image src="/assets/img/avaliacao/escola.jpg" layout="fill" objectFit="cover" alt="avaliação escolar" /></div>
                            <br />
                            <h4>Orientação Escolar</h4>
                        </div>
                        {(isMobile && activeTool === 3) && <OrientacaoEscolar />}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div onClick={() => setActiveTool(4)} className={`${styles.slide} ${activeTool === 4 ? styles.selected : ""}`}>
                            <div className={styles.imgWrapper}><Image src="/assets/img/avaliacao/profissional.jpg" layout="fill" objectFit="cover" alt="avaliação profissional" /></div>
                            <br />
                            <h4>Orientação Profissional</h4>
                        </div>
                        {(isMobile && activeTool === 4) && <OrientacaoEscolar />}
                    </SwiperSlide>


                </div>

                <div className="swiper-pagination" style={{ width: 'fit-content', margin: '0 auto', left: 0, right: 0, top: '0px', height:'30px' }}></div>
            </Swiper>



            {(activeTool === 1 && !isMobile) && <PsicologiaClinica />}
            {(activeTool === 2 && !isMobile) && <Psicoterapia />}
            {(activeTool === 3 && !isMobile) && <OrientacaoEscolar />}
            {(activeTool === 4 && !isMobile) && <OrientacaoProfissional />}

        </Fragment>

    )
}

export default FerramentasAvaliacao