import React from 'react';

import Logo from '../logo/index.jsx';
import Button from '../buttons/index.jsx';

export default function NavLite(props) {

    const handleLogoClick = () => {
        const target = '_self';
        window.open('/', target);
    }
    return(
        <div id='nav-lite' className='d-flex justify-content-center align-items-center' style={{backgroundColor:'var(--primary-color)', width:'100%', padding:'0px'}}>
            <div id='nav-lite-margin' className='d-flex justify-content-between align-items-center flex-wrap' style={{width:'100%', maxWidth:'1000px', margin:'5px 30px 5px 30px', rowRap:'60px'}}>
                <Logo onClick={handleLogoClick}/>
                <Button link={props.customerPortal} buttonType='secondary' buttonText='Member Login' height='40px' width='200px' margin='0 0px 0 0px'/>
            </div>
        </div>
    );

}