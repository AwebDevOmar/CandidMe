import {useState,useEffect} from 'react'
import Messages from '../components/Messages'
export default function Inbox (){
    const token = localStorage.getItem("access_token");
    const [messageData,setMessageData]=useState([]);

useEffect(() => {

    (async()=>{

    await  fetch('https://candidmebackend.onrender.com/get_message', {
        method: 'GET', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'token':`${token}`
                 }
         
      }).then(response => {
        if (!response.ok) {
          console.log('invalid response');
        }
        return response.json();
      })
      .then((data) => {
      setMessageData(data)

      })

    console.log('i fire once')
    })();
        
    },[]
)
    return (
    <>
    <div className='inboxHeader'>hello</div>
    <div className='messageCardContainer'>
        {messageData.slice(0).reverse().map((item ,index)=>(
        <Messages key={index} _id={item._id} message={item.message} seen={item.seen} />
        ))}

    </div>
    </>
    )
}