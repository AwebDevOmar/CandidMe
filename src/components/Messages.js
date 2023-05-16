import { useState } from 'react'
import anonymousLogo from '../assets/anonymous.webp'
import  cardCover from '../assets/cardCover.png'

export default function Messages(props){
    const token = localStorage.getItem("access_token");
    const [hidden,setHidden]=useState(false);
    const [classSeen, setClassSeen]=useState(null);
    
    const handleToggle=()=>{
        setHidden(!hidden)
        }
    const addSeen=()=>{
         if(props.seen===false){
            setClassSeen(true)
         }

    }
    const setSeen=()=>{
        if(props.seen===false){
            fetch('http://192.168.0.194:5000/seen_status', {
                method: 'POST', 
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json',
                  'token':`${token}`
                         },
                body:JSON.stringify({_id:`${props._id}`}) 
                 
            })
            console.log(`I ran once ${props._id}`)
        }
    }    
    
    const handleClickCover=()=>{
        handleToggle();
        setSeen();
    }

    const handleClickCloseButton =()=>{
        handleToggle();
        addSeen();
    }




    return(
        <>
        <div className={`cardCoverContainer ${hidden?'hidden':' glowing'} ${props.seen?'seen':''} ${classSeen?'seen':''}`} onClick={handleClickCover}>
            <img className='cardCover' src={cardCover} alt='cover'/>
        </div>
        <div className={`cardContainer ${hidden?'':'hidden'}`}>
            <span className="close" onClick={handleClickCloseButton}></span>

            <div className='cardMessageContainer'>
            <div className="cardHeader">
            {props.picture?<img className='cardHeaderImg' src="props.picture" alt='profile pic' />:<img className='cardHeaderImg' src={anonymousLogo} alt='profile pic' />}
            {props.name?<p className='cardHeaderName'>{props.name}</p>:<p className='cardHeaderName'>Anonymous User</p>}    
            </div>
                <p className='cardMessageText' >{props.message}</p>
            </div>
            <div>
            <button className="button-54">Show Hint</button>
            </div>

        </div>
        </>
    )
}