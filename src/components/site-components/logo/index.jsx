import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo(props) {

  const handleLogoClick = () => {
    if (props.onClick) {
        props.onClick();
    }
}

  if (props.link) {return (
    <Link to={props.link} style={{textDecoration:'none'}}>
      <div className="Logo" onClick={handleLogoClick} style={{width: props.width, height: props.height, padding: 10, background: '#453C41', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor:'pointer'}}>
          <div className="Nordic" style={{color: 'white', fontSize: 20, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>Nordic</div>
          <div className="Divider" style={{alignSelf: 'stretch', height: 6, paddingTop: 3, paddingBottom: 3, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
              <div className="Line1" style={{alignSelf: 'stretch', height: 0, border: '1px white solid'}}></div>
          </div>
          <div className="Club" style={{color: 'white', fontSize: 20, fontFamily: 'Lato', fontWeight: '300', wordWrap: 'break-word'}}>Club</div>
      </div>
    </Link>
  );
  }}