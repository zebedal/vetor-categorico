import styles from './CoachingServices.module.css'
import Image from 'next/image'
import { useState, Fragment, useEffect } from 'react'
import LifeCoaching from './LifeCoaching'
import CareerCoaching from './CareerCoaching'
import ExecutiveCoaching from './ExecutiveCoaching'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


SwiperCore.use([Pagination]);


const CoachingServices = props => {

    const [activeCoach, setActiveCoach] = useState(1)
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        const innerWidth = window.innerWidth < 550
        setIsMobile(innerWidth)
    }, [])

    const handleIndexChange = ({realIndex}) => {
        setActiveCoach(realIndex + 1)
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
                style={{marginTop:'50px', padding:'20px 0'}}
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
                    <div onClick={() => setActiveCoach(1)} className={`${styles.slide} ${activeCoach === 1 ? styles.selected : ""}`}>
                        <div className={styles.imgWrapper}><Image src="/assets/img/coaching/life-coaching.jpg" layout="fill" objectFit="cover" alt="life coaching" /></div>
                        <br />
                        <h4>Coaching de Vida</h4>
                    </div>
                    {(isMobile && activeCoach === 1) && <LifeCoaching />}
                    </SwiperSlide>

                    <SwiperSlide>
                    <div onClick={() => setActiveCoach(2)} className={`${styles.slide} ${activeCoach === 2 ? styles.selected : ""}`}>
                        <div className={styles.imgWrapper}><Image src="/assets/img/coaching/executive-coaching.jpg" layout="fill" objectFit="cover" alt="life coaching" /></div>
                        <br />
                        <h4>Coaching Executivo</h4>
                    </div>
                    {(isMobile && activeCoach === 2) && <ExecutiveCoaching />}
                    </SwiperSlide>

                    <SwiperSlide>
                    <div onClick={() => setActiveCoach(3)} className={`${styles.slide} ${activeCoach === 3 ? styles.selected : ""}`}>
                        <div className={styles.imgWrapper}><Image src="/assets/img/coaching/business-coaching.jpg" layout="fill" objectFit="cover" alt="life coaching" /></div>
                        <br />
                        <h4>Coaching de Carreira</h4>
                    </div>
                    {(isMobile && activeCoach === 3) && <CareerCoaching />}
                    </SwiperSlide>

                </div>

                <div className="swiper-pagination" style={{width:'fit-content',margin:'0 auto',left:0, right:0,   top:'0px'}}></div>
            </Swiper>
           
            

            {(activeCoach === 1 && !isMobile) && <LifeCoaching />}
            {(activeCoach === 2 && !isMobile) && <CareerCoaching />}
            {(activeCoach === 3 && !isMobile) && <ExecutiveCoaching />}

        </Fragment>

    )
}






export default CoachingServices