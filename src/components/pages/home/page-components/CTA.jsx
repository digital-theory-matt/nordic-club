import React from 'react';
import Button from '../../../site-components/buttons/index.jsx';

export default function CTA() {
    return(
        <div id='CTA' className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%', margin:'0px 0px 100px 0px'}}>
            <h1>Enjoy the Nordic Club Today!</h1>
            <Button link='memberships' buttonType='tertiary' buttonText='Enroll Today' height='50px' width='200px'/>
        </div>
    )
}