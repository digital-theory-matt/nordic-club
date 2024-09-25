import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const gallery = [
    {photoSrc: 'images/photos/weight-room.jpg', caption: 'Come check out our weight room'},
    {photoSrc: 'images/photos/exercise-room.jpg', caption: 'Maybe you want some cardio?'},
    {photoSrc: 'images/photos/locker-room.jpg', caption: 'Locker rooms are available'},
    {photoSrc: 'images/photos/sauna.jpg', caption: 'Mens, Womens, and coed saunas'},
    {photoSrc: 'images/photos/nordic_dumbells.jpg', caption: 'We have free weights too'},
    {photoSrc: 'images/photos/court.jpg', caption: 'How about a game of racquetball?'},
    ];

export default function Gallery(){

    // Initialize state to hold the screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const [swiperSlide, setSwiperSlide] = useState(0);

    // Update state when the window is resized
    useEffect(() => {
    // Define the resize handler function
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };

    }, []);

    return(<div id="gallery" className='d-flex flex-column justify-content-center align-items-center' style={{width: '100%', height: '75vh', padding: 15, background: 'white', gap:'10px'}}>
        <div id="gallery-header" className='d-flex justify-content-center align-items-center'>
            <h3 style={{fontWeight:'400', color:'var(--primary-color)'}}>Gallery</h3>
        </div>

        <div style={{height:'70%', width:'100%', cursor:'grab'}}>
        <Swiper className='d-flex' style={{height:'100%', width:'100%'}} 
            modules={[Navigation]}
            slidesPerView={(screenWidth > 768 ? 3 : 1)}
            navigation
            // onSlideChange={(swiperSlide) => setSwiperSlide(swiperSlide.activeIndex)}
        >
            {gallery.map((photo, index) => (
                <SwiperSlide key={index} style={{height:'100%', width:'100%'}}>
                    <img src={`${photo.photoSrc}`} alt={photo.caption} style={{height:'100%', width:'100%', objectFit:'contain'}}/>
                    {/* <h3 style={{fontWeight:'400'}}>{gallery[swiperSlide].caption}</h3> */}
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
        {/* <div id="gallery-caption" className='d-flex' >
            <div className="Caption" style={{flex: '1 1 0', textAlign: 'center', color: '#776871', fontSize: 20, fontFamily: 'Lato', fontWeight: '400', wordWrap: 'break-word'}}>
                <h3 style={{fontWeight:'400'}}>{gallery[swiperSlide].caption}</h3>
            </div>
        </div> */}
    </div>);
}