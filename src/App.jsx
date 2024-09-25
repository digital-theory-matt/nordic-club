import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

import Nav from './components/site-components/nav/index.jsx';
import Nav_Lite from './components/site-components/nav_lite/index.jsx';
import Home from './components/pages/home/index.jsx';
import Memberships from './components/pages/memberships/index.jsx';
import Footer from './components/site-components/footer/index.jsx';

import siteContent from './content.json';

function App(props) {

  if(props.page === 'home') {
    return (
      <div>
        <Nav customerPortal={props.customerPortal}/>
        <Home content={siteContent}/>
        <Footer content={siteContent.contact}/>
      </div>
    );
  } else if(props.page === 'memberships') {
    return (
      <div className='d-flex flex-column justify-content-between' style={{minHeight:'100vh'}}>
        <Nav_Lite customerPortal={props.customerPortal}/>
        <Memberships />
        <Footer content={siteContent.contact}/>
      </div>
    )
  } 

}

export default App;
