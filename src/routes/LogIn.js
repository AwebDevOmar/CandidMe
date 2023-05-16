import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons';

function usePreviousLocation() {
    const [previousLocation, setPreviousLocation] = useState(null);
  
    useEffect(() => {
      const storedLocation = sessionStorage.getItem('previousLocation');
      if (storedLocation) {
        setPreviousLocation(storedLocation);
        sessionStorage.removeItem('previousLocation');
      }
    }, []);
  
    return previousLocation;
  }


export default function LogIn(){

const navigate = useNavigate();
const previousLocation = usePreviousLocation();


    function handleLogIn(response){
    
    fetch('https://candidmebackend.onrender.com/auth',
    {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
                 },
        body: JSON.stringify(response.data) 
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("access_token",data.access_token);
        if (previousLocation) {
            navigate(previousLocation); // Redirect to the previous location
          } else {
            navigate('/'); // Redirect to a default location if no previous location found
          }
        
      })
}
    
return(
<div className='login'>
    <LoginSocialFacebook 
    appId="244621298024561"
    onResolve={handleLogIn}
     
    onReject={
      (error)=>{
        console.log(error);
        fetch('http://localhost:5000', {
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(error) 
      })
    }}
    >
       
    <FacebookLoginButton/>
    
    </LoginSocialFacebook>


</div>
)
}