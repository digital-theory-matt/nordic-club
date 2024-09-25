import React, { useEffect, useState } from 'react';

import Hero from './page-components/Hero.jsx';
import Gallery from './page-components/Gallery.jsx';
import Amenities from './page-components/Amenities.jsx';
import About from './page-components/About.jsx';
import FAQs from './page-components/FAQs.jsx';
import CTA from './page-components/CTA.jsx';

export default function Home({content}) {

    return (
        <div className="App" style={{width: '100%', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <Hero content={content.hero}/>
          <Gallery />
          <Amenities />
          <About content={content.about}/>
          <FAQs content={content.faqs}/>
          <CTA />
        </div>
      );
    }