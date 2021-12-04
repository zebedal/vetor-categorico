import styles from './Artigos.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


SwiperCore.use([ Pagination]);


const Artigos = props => {
    

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <strong>Atualidade</strong>
                <h2>Últimas <span>notícias</span></h2>
              
                <div className={styles.flex}>

                    <Swiper 
                    spaceBetween={50} 
                    slidesPerView={1} 
                    grabCursor
                    pagination={{el:'.swiper-pagination', 
                    clickable: true}} 
                    breakpoints= {{
                        920: {
                            slidesPerView: 3
                        },
                        450: {
                            slidesPerView: 2
                        }
                    }}
                    >

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/seguranca.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                                </div>
                                <br />
                                <h4>Segurança privada e autoproteção</h4>
                                <p>A presente lei procede à primeira alteração à Lei n.º 34/2013, de 16 de maio, que estabelece o regime...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://dre.pt/dre/detalhe/lei/46-2019-122996202" target="_blank" rel="noreferrer">Ler artigo</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/formacao.jpg" layout="fill" objectFit="cover" alt="psicologia barreiro" />
                                </div>
                                <br />
                                <h4>Formação profissional de segurança</h4>
                                <p>A Portaria n.º 148/2014, veio estabelecer um novo modelo de formação profissional para o pessoal...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://dre.pt/dre/detalhe/portaria/114-2015-67072251" target="_blank" rel="noreferrer">Saber mais</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/covid.jpg" layout="fill" objectFit="cover" alt="inteligência emocional barreiro" />
                                </div>
                                <br />
                                <h4>Medidas no âmbito da pandemia</h4>
                                <p>Os indicadores de avaliação da evolução da pandemia da doença COVID-19 recomendam a adoção de medidas imediatas...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://dre.pt/dre/detalhe/decreto-lei/104-2021-175043500" target="_blank" rel="noreferrer">Saber mais</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                     

                    </Swiper>
                    
                    <div className="swiper-pagination" style={{transform:'translateY(60px)'}}></div>

                </div>
            </div>
        </div>
    )


}

export default Artigos