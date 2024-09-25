import React from 'react';
import Button from '../../../site-components/buttons/index.jsx';

//content is loaded from google sheets

export default function hero({content}){

    return (
        <div id='hero' style={{ width: '100%', height: '80vh', background: 'rgba(119, 104, 113, 0.70)', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex', minHeight:'667px' }}>
            <div className="Content" style={{ flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', display: 'flex', flexWrap:'wrap', minWidth:'320px' }}>
                <div className="Column" style={{ flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 20, display: 'inline-flex', minWidth:'320px', maxWidth:'500px' }}>
                    <div id='title' style={{ alignSelf: 'stretch', color: '#1A1818', wordWrap: 'break-word' }}>
                        <h1 style={{fontWeight:'300'}}>{content.title}</h1>
                    </div>
                    <div id='title-subtitle' style={{ alignSelf: 'stretch', color: '#1A1818', wordWrap: 'break-word' }}>
                        <h3 style={{fontWeight:'300'}}>{content.subtitle}</h3>
                    </div>
                    <div id='title-amenities' style={{ alignSelf: 'stretch', color: '#1A1818', fontSize: 12, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word' }}>
                        <p>
                            {content.bullets.map((bullet, index) => (
                                <span key = {index}>
                                    {bullet}
                                    <br />
                                </span>
                            ))}

                        </p>
                    </div>
                    <Button link='memberships' buttonType='primary' buttonText='Enroll Today!' height='50px' width='200px' margin='0 0px 0 0px'/>
                </div>
                <div id='hero-picture' alt='Picture of weights' style={{ flex: '1 1 0', alignSelf: 'stretch', padding: '0px', background: 'url(/images/photos/hero-image.png)', backgroundSize: 'cover', backgroundPosition: 'center', minWidth: '320px' }}>
                    <div id='hero-gradient' style={{ width: '100%', height: '100%', zIndex:'10', background: 'linear-gradient(to left, rgba(119, 104, 113, .7) 0%, rgba(119, 104, 113, 0.70) 100%)', backgroundBlendMode: 'multiply',  justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                    </div>
                </div>
            </div>
        </div>
    );
}