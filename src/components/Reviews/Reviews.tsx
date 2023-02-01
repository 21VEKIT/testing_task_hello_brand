import React, {useCallback, useRef} from 'react';
import classes from './Reviews.module.scss'
import arrow from './images/arrow.png'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css'
import Review from "./Review/Review";

const Reviews = () => {

    const refReview = useRef<any>(null)

    const handleNextElement = useCallback(() => {
        if(!refReview.current) {
            return
        }
        refReview.current.swiper?.slideNext()
    }, [])

    const handlePrevElement = useCallback(() => {
        if(!refReview.current) {
            return
        }
        refReview.current.swiper?.slidePrev()
    }, [])

    return (
        <section className={classes.reviews}>
            <div className="content">
                <div className={classes.wrapper}>
                    <img src={arrow} alt="" onClick={() => handlePrevElement()}/>

                    <div className={classes.swiper}>
                        <Swiper
                            ref={refReview}
                            slidesPerView={1}
                            spaceBetween={50}
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <Review />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Review />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Review />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Review />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <img onClick={() => handleNextElement()} src={arrow} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Reviews;