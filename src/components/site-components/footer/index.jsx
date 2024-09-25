import React from 'react';
import Logo from '../logo/index.jsx';

export default function Footer({content}) {

return(
    <div id='footer' className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '100%', padding: 10, background: '#776871', gap: 10}}>
    <div id='footer-margin' className="d-flex justify-content-between align-items-center flex-wrap" style={{width:'100%', maxWidth:'1000px', gap:'20px'}}>
        <div id='footer-logo' className='d-flex flex-column justify-content-end align-items-start' style={{minWidth:'320px'}}>
            <div className="Frame1" style={{alignSelf: 'stretch', height: 105, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <Logo />
                <div className="NordicInnText" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div className="LookingToStayAtTheNordicInn" style={{alignSelf: 'stretch', color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>Looking to stay at the Nordic Inn?</div>
                    <div className="ClickHere" style={{alignSelf: 'stretch', color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                        <a href='https://www.nordic-inn.com/' style={{color:'white'}}>Click here</a>
                    </div>
                </div>
            </div>
            <div className="Copyright2024TheNordicClub" style={{alignSelf: 'stretch', color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>© Copyright 2024 The Nordic Club. </div>
            <div className="AllRightsReserved" style={{alignSelf: 'stretch', color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>All rights reserved.</div>
        </div>

        <div id='footer-contact-column' style={{flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 11, display: 'inline-flex'}}>
            <div className="Contact" style={{width: 74, color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>{content.title}</div>
            <div className="Address" style={{color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>{content.address}</div>
            <div className="Phone" style={{color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>{content.phone}</div>
            <div className="Email" style={{color: 'white', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>{content.email}</div>
        </div>
    </div>
</div>
)
}