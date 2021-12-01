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
                <strong>Últimas Notícias</strong>
                <h2>Artigos <span>de Opinião</span></h2>
              
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
                                    <Image src="/assets/img/artigos/ansiedade.jpg" layout="fill" objectFit="cover" alt="terapia de casais barreiro" />
                                </div>
                                <br />
                                <h4>A Ansiedade: normalidade ou patologia?</h4>
                                <p>Em doses “normais” a ansiedade permite-nos melhorar o rendimento e a adaptação ao meio envolvente...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://www.distritonline.pt/a-ansiedade-normalidade-ou-patologia%ef%bb%bf/" target="_blank" rel="noreferrer">Ler artigo</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/economia.jpg" layout="fill" objectFit="cover" alt="psicologia barreiro" />
                                </div>
                                <br />
                                <h4>Ano de 2020, uma incógnita...</h4>
                                <p>O objectivo central da economia portuguesa deverá ser o reforço da competitividade das empresas que permita...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://www.distritonline.pt/ano-de-2020-uma-incognita/" target="_blank" rel="noreferrer">Saber mais</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/emocional.jpg" layout="fill" objectFit="cover" alt="inteligência emocional barreiro" />
                                </div>
                                <br />
                                <h4>Inteligência emocional no trabalho</h4>
                                <p>A Inteligência emocional não se dedica apenas a analisar as emoções, ela engloba a capacidade em harmonizar a ...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://www.distritonline.pt/a-importancia-da-inteligencia-emocional-na-integracao-no-mercado-de-trabalho/" target="_blank" rel="noreferrer">Saber mais</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/anorexia.jpg" layout="fill" objectFit="cover" alt="inteligência emocional barreiro" />
                                </div>
                                <br />
                                <h4>A Anorexia Nervosa e a Bulimia</h4>
                                <p>São muitas as situações de âmbito fisiológico e psicológico em que o apetite pode estar alterado (diminuído ou aumentado)</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://www.distritonline.pt/perturbacoes-ao-nivel-do-apetite-a-anorexia-nervosa-e-a-bulimia/" target="_blank" rel="noreferrer">Saber mais</a>&nbsp;&nbsp;
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08957 0L0.910431 1.17918L4.73125 5L0.910431 8.82082L2.08957 10L7.08957 5L2.08957 0Z" fill="var(--blue)" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image src="/assets/img/artigos/fobia.jpg" layout="fill" objectFit="cover" alt="inteligência emocional barreiro" />
                                </div>
                                <br />
                                <h4>Nomofobia uma nova doença?</h4>
                                <p>Se nos focarmos no desenvolvimento tecnológico ocorrido nos últimos anos,  constatamos, que a maioria das funções/tarefas...</p>
                                <br />
                                <div className={styles.linkFlex}>
                                    <a href="https://www.distritonline.pt/nomofobia-dependencia-do-smartphone-e-da-internet-uma-nova-doenca/" target="_blank" rel="noreferrer">Saber mais</a>&nbsp;&nbsp;
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