import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Image } from 'react-bootstrap';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';


import classNames from 'classnames/bind';
import styles from './MovieSlide.module.scss';

import FeatureFilm from './components/FeatureFilm';

const cx = classNames.bind(styles);

export default function MovieSlide() {
    const events = [
        {
            imageFilm :  'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg',
            name: 'avatar_2_payoff_posster',
            to: 'avatar2'    
        },
        {
            imageFilm :  'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happy-new-year-240x201_1.png',
            name: 'happy-new-year',
            to: 'happy'    
        }
        ,
        {
            imageFilm :  'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/o/doreamon_web_app_240x201.jpg',
            name: 'doremon_web',
            to: 'doremon'    
        }
        ,
        {
            imageFilm :  'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-crm-team-chi-1-duoc-2-240x201_1.jpg',
            name: 'team chỉ 1 được 2',
            to: 'team'    
        }


        // 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_79k_240x201_170920.png',
    ];
    return (
        <>
            <div className="text-center mt-3">
                <div className="container px-0 mt-3">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={1}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                    >
                        {events.map((event, i) => (
                            <SwiperSlide key={i} className={cx('img-event2')}>
                                <Image className={cx('img-event')} src={event.imageFilm} />
                                <div className={cx('button-play')}>
                                </div>
                                
                                <div className={cx('feature-film')}>
                                 <FeatureFilm  name={event.name} to={event.to} />
                                </div>
                                
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
