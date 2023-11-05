/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import './gamesswiper.css'

import {
    EffectCoverflow,
    Navigation,
    Autoplay
} from 'swiper/modules'
import EachGame from './EachGame'
const GamesSwiper = ({games}) => {
    const [active, setActive] = useState(false);

    const handleToggleVideos = () =>{
        setActive(!active)
    }


    return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 35,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows : true,
        }}

        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }}

        modules={[
            EffectCoverflow,
            Navigation,
            Autoplay
        ]}

        className='gameSlider'
    >
        {
            games && games.map((game) => (
            <SwiperSlide key={game._id}>
                    <EachGame  
                        active={active} 
                        toggleVideos={handleToggleVideos}
                        game={game}
                    />
            </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default GamesSwiper