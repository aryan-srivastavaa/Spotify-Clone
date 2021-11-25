import React from 'react'

function Card(props) {
    
    return (
        <> 
        <div className='album-details' id='albumdetails'>
            <img   src={props.source} alt={props.alternate} className='album-logo' />
            <h3 >{props.title}</h3>
            </div>
        </>
    )
}

export default Card
