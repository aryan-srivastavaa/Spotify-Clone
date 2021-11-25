import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

import './style.css';
import {NavLink} from 'react-router-dom';

function App() {
    return (
        <>
        
        <div className='body'>
        <NavLink to='/' activeClassName='app-logo'>
           <img src='https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png' alt='spotify logo' className='logo-img'/>
           <h1 className='logo-name'>Spotify</h1>
           </NavLink>
          
            <div className='div-left-right'>
                <div className='left-content'><LeftContent/></div>
                <div className='right-content'><RightContent/></div>
                
            </div>
            </div> 
           
        </>
    )
}

export default App
