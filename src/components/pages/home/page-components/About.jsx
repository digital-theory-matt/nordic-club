import React, { useState, useEffect } from 'react';
import Button from '../../../site-components/buttons/index.jsx';

export default function About({content}) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='about' className='d-flex flex-column flex-md-row' style={{width:'100%', height:'100vh', margin:'100px 0px 100px 0px'}}>
            <div id='about-content' className='d-flex flex-column justify-content-center' style={{height:screenWidth > 768 ? '100%' : '50%', width:'100%', maxWidth:'600px', gap:'10px'}}>
                <h2 style={{margin:'0px 30px 0px 30px', fontWeight:'300'}}>{content.title}</h2>
                <h3 style={{margin:'0px 30px 0px 30px', fontWeight: '400'}}>{content.subtitle}</h3>
                <Button link='memberships' buttonType='tertiary' buttonText='Enroll Today!' height='50px' width='200px' margin='0 30px 0 30px'/>
            </div>
            <div id='about-photo' className='flex-grow-1' style={{backgroundImage:'url(/images/photos/nordic-inn.jpg)', backgroundSize:'cover', backgroundPosition:'center', height:screenWidth > 768 ? '100%' : '50%', width:'100%'}}></div>
        </div>
    );
}