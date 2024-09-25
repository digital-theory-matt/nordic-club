import React from 'react';
import { useData } from './DataContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

import Nav from './components/site-components/nav/index.jsx';
import Nav_Lite from './components/site-components/nav_lite/index.jsx';
import Home from './components/pages/home/index.jsx';
import Memberships from './components/pages/memberships/index.jsx';
import Footer from './components/site-components/footer/index.jsx';

//hero
//memberships
//member-login
//member-dashboard
//error-page

function App(props) {

  const { data, loading, error } = useData();
  if (loading) return <div className='d-flex align-items-center justify-content-center' style={{width:'100vw', height:'100vh'}}><h3>Loading...</h3></div>;
  if (error) return <div>Error: {error.message}</div>;

  // console.log(props.page);
  // console.log(data);
  if(props.page === 'home') {
    return (
      <div>
        <Nav customerPortal={props.customerPortal}/>
        <Home content={data}/>
        <Footer content={data.contact}/>
      </div>
    );
  } else if(props.page === 'memberships') {
    return (
      <div>
        <Nav_Lite customerPortal={props.customerPortal}/>
        <Memberships />
        <Footer content={data.contact}/>
      </div>
    )
  } 

}

export default App;
