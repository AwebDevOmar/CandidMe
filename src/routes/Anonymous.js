import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Anonymous(){
    
const token = localStorage.getItem("access_token");
const {_id}=useParams();

//fetch the user deatils of message receiver

const [data ,setData]=useState({
  first_name:'',
  last_name:'',
  picture:''
})

useEffect(() => {


  fetch(`http://192.168.0.194:5000/get_user/${_id}`, {
    method: 'GET', 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
      
             }
     
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  })
  .then((data) => {
    
    setData({
      first_name: data.first_name,
      last_name: data.last_name,
      picture: data.picture     
    })
  })
  console.log("I fire once")
},[]

);

//message submit process

const [values, setValues] = useState({ message: "", hint: ""});

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
      
  }


const submit = async()=>{
    await fetch(`http://192.168.0.194:5000/post_message/${_id}`, {
    method: 'POST', 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'token':`${token}`
       },
    body : JSON.stringify(values)
     
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data)
    
  })
  }    


return (

<div className='page_container'>
  <div className='formContainer'>
    <div className='header'>
      <img className='profile-img'  src={data.picture} alt='profile'/>
      <p className='name'>{data.first_name} {data.last_name}</p>
    </div>
    <textarea className='message' placeholder='Your Candid Text here' name="message" value={values.message} onChange={handleInputChange} ></textarea>
      <textarea type="text" name='hint' placeholder='Drop a hint' className='hint'  value={values.hint} onChange={handleInputChange}></textarea>
      <button className='button-54' onClick={submit}>Send</button>
  </div>
</div>

)
}