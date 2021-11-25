import React from 'react';
import {NavLink} from 'react-router-dom';



function LeftContent() {
    return (
        <div className='leftcontent-nav'>
        <NavLink to='' activeClassName='leftcontent-home'>🏠Home</NavLink>
        <NavLink to='' activeClassName='leftcontent-home'>🔍Search</NavLink>
        <NavLink to='' activeClassName='leftcontent-home'>⚞Your Playlist</NavLink>
        
    
    </div>
    )
}

export default LeftContent
