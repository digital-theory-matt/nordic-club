import React from 'react';

const amenities = [
    {title: 'pools', src: 'images/svgs/swimmer.svg', alt: 'Swimmer', text: 'Indoor & Outdoor Pools'},
    {title: 'exerice-room', src: 'images/svgs/treadmill.svg', alt: 'Treadmill', text: 'Cardio Machines'},
    {title: 'weight-room', src: 'images/svgs/dumbbell-weightlifting.svg', alt: 'Weight Room', text: 'Weight Room'},
    {title: 'racquetball-court', src: 'images/svgs/racquet.svg', alt: 'Racquet', text: 'Racquetball Court'},
    {title: 'saunas', src: 'images/svgs/hot-tub.svg', alt: 'Hot Tub', text: 'Multiple Saunas'},
    {title: 'game-room', src: 'images/svgs/joystick.svg', alt: 'Joystick', text: 'Game Room'},
]

export default function Amenities() {
    
    return (
        <div id="amenities" style={{ width: '100%', height: '100%', background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
            <div className="Header" style={{ alignSelf: 'stretch', height: 64, paddingTop: 20, paddingBottom: 20, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }}>
                <div className="Amenities" style={{ color: '#776871', fontSize: 20, fontFamily: 'Lato', fontWeight: '700', wordWrap: 'break-word' }}>Amenities</div>
            </div>

            <div id="amenities-tiles" className='d-flex justify-content-center align-items-center flex-wrap' style={{maxWidth:'1000px', gap:'20px'}}>
                {amenities.map((item, index) => (
                    <div key={`container-${index}`} className={item.title} style={{height: 120, padding: 10, background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex', width:'260px' }}>
                        <div key={`picture-${index}`} className={item.alt} style={{ width: 100, height: 100, position: 'relative' }}>
                        <div key={`icon-${index}`} className="Vector" style={{ width: 100.08, height: 100, left: -0.04, top: 4.17, position: 'absolute', backgroundImage: `url(${item.src})`, backgroundposition: 'center', backgroundSize:'cover' }}></div>
                        </div>
                        <div key={`title-${index}`} className={item.alt} style={{ flex: '1 1 0', alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Lato', fontWeight: '700', wordWrap: 'break-word' }}>
                            <h5 key={`title-text-${index}`}>{item.text}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}