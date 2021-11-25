import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from './Card';
import Playlist from './Playlist';
import Footer from './Footer';




function RightContent() {
    const greetings = ()=>{
        let a = new Date();
        let d = a.getHours();
        console.log(d);
        if(d>=1 && d<=12){
           var gree = 'Good Morning!';
        }
        else if(d>12 && d<=16){
            gree = 'Good AfterNoon!';
        }
        else if(d>5 && d<=20){
           gree = 'Good Evening!';
        }
        else{
            gree = 'Good Night!';
        }
        
        return gree;
    }
    function xy(){
        document.getElementById('footer').style.visibility = 'visible';
        
       
        
    }
    const clicked = ()=>{
        let a = document.getElementById('albumdetails');
        a.addEventListener('click',(e)=>{
            console.log(e.target.key); 

        })
    }
    

    return (
        <> 
          <div className='right-content-nav'>
           <h1 className='right-content-h1'>{greetings()}</h1> 
           <NavLink to='/profile' >
           <img src='https://seeklogo.com/images/A/anonymous-logo-7E968E8797-seeklogo.com.png' alt='Your Profile Logo' className='right-content-nav-logo'/>
           </NavLink>
           </div>
           <h2>Playlists</h2>

           <div className='cards'>
              {Playlist.map((val,key)=>{
                  return ( 
                  <div key={key} className='card-div'  id='carddiv' onClick={xy}> <Card id={key} source={val.source} alternate={val.alternate} title={val.title} /> </div>
                  )
              })} 
          
           </div>
           <div className='footer' id='footer'><Footer name='Arijit Singh' image='https://images.unsplash.com/photo-1552267094-b4c3771bd5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'/></div>
            

        </>
    )
}

export default RightContent
