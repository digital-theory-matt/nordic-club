import React, { useState, useEffect } from 'react';
import { motion, animate, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from '../logo/index.jsx';
import Button from '../buttons/index.jsx';

export default function Nav(customerPortal) {

  // Initialize state to hold the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const handleClick =() => {
    setMenuOpen(!menuOpen);
    
  }

  const handleLinkMouseOver =(e) => {
    e.currentTarget.style.textDecoration='underline';
  }

  const handleLinkMouseOut =(e) => {
    e.currentTarget.style.textDecoration='none';
  }

  const handleLinkClick =() => {
    setMenuOpen(false);
  }

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(latest);
    if (menuOpen===false && latest > 100 && latest > scrollPosition){
        animate('#nav', {y: -100}, {type: 'spring', bounce:0, duration:.2});
    } else if (menuOpen===false && latest < scrollPosition){
        animate('#nav', {y: 0}, {type: 'spring', bounce:0, duration:.2});
    }
    setScrollPosition(latest);
  })
  

  return(
    <motion.div id='nav' className='d-flex justify-content-between align-items-center' style={{width: '100%', height: '100%', padding: 10, background: '#776871', position:'sticky', top:'0', zIndex:'1000'}}>
        <div id='nav-margin' className={`d-flex ${menuOpen===false? 'align-items-center' : 'flex-column align-items-start'} justify-content-between`} style={{width:'100%', paddingLeft: 30, paddingRight: 30, gap:'20px'}}>
            <div id='nav-logo-row' className="d-flex flex-row justify-content-between align-items-center" style={{width:'100%'}}>
                <Logo />

                <div id='nav-links' className="d-flex" style={{padding: 10, gap: 10}}>
                    {screenWidth <= 768 && (
                    <div id='nav-menu' onClick={handleClick} style={{width: 50, height: 50}}>
                        <img id='nav-menu-icon' alt="menu" src="/images/svgs/hamburger.svg" style={{width: 50, height: 50, position: 'absolute'}}/>
                    </div>
                    )}
                {screenWidth > 768 && (
                    <div className='d-flex align-items-center' style={{gap:'10px'}}>
                        <div className="About" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='/#gallery' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut}>Gallery</a>
                        </div>
                        <div className="About" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='/#amenities' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut}>Amenities</a>
                        </div>
                        <div className="About" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='/#about' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut}>About</a>
                        </div>
                        <div className="FAQs" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='/#faqs' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut}>FAQs</a>
                        </div>
                        <Button link='memberships' buttonType='primary' buttonText='Enroll Today!' height='40px' width='200px' margin='0 0px 0 0px'/>
                        <Button link={customerPortal} buttonType='secondary' buttonText='Member Login' height='40px' width='200px' margin='0 0px 0 0px'/>
                    </div>
                )}
                </div>
            </div>

            {menuOpen && (
                <div id='nav-mobile-menu-active' className='d-flex flex-column' style={{gap:'20px', width:'100%'}}>
                    <div id='nav-menu-links' style={{gap:'20px'}}>
                    <div className="About" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='#gallery' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut} onClick={handleLinkClick}>Gallery</a>
                        </div>
                        <div className="About" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='#amenities' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut} onClick={handleLinkClick}>Amenities</a>
                        </div>
                        <div className="About" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='#about' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut} onClick={handleLinkClick}>About</a>
                        </div>
                        <div className="FAQs" style={{color: 'white', fontSize: 14, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>
                            <a href='#faqs' style={{color:'white', textDecoration:'none'}} onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut} onClick={handleLinkClick}>FAQs</a>
                        </div>
                    </div>
                    <div id='nav-menu-buttons' className='d-flex justify-content-center' style={{width:'100%', gap:'20px'}}>
                        <Button link='memberships' buttonType='primary' buttonText='Enroll Today!' height='40px' width='50%' fontSize='14px' margin='0 0px 0 0px'/>
                        <Button link={customerPortal} buttonType='secondary' buttonText='Member Login' height='40px' width='50%' fontSize='14px' margin='0 0px 0 0px'/>
                    </div>
                </div>
            )}


        </div>
    </motion.div>
  )


}
