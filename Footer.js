import React,{useState} from 'react';


function Footer(props) {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);


    const likefunc = () =>{
        setLike(!like);
}
    const playfunc = ()=>{
        setPlay(!play);

    }
    return (
        <>
        <div className='footer-track'>
           
            <img src={props.image} className='footer-track-img'/>
            <div className='footer-album-details'>
            <span className='footer-album-name'>{props.name} </span>
            <button id='like' onClick={likefunc}>{(like===true)?'💗':'🤍'}</button>
            </div>
            
            <div className='play-forward'>    
            <button className='footer-prev'>⏮️</button>
            <button className='footer-pause' onClick={playfunc}>{(play===true)?'⏸':'▶️'}</button>
            <button className='footer-next'>⏭️</button>
            </div>
        </div>
        </>
    )
}

export default Footer
