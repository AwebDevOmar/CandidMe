
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import PrivateRoute from './routes/PrivateRoute';
import LogIn from './routes/LogIn';
import Home from './routes/Home';
import Play from './routes/Play';
import Inbox from './routes/Inbox';
import Anonymous from './routes/Anonymous';


export default function App() {
  
return (

<>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route element={<PrivateRoute/>}>

      <Route path='/play' element={<Play/>} />
      <Route path='/inbox' element={<Inbox/>} />
      <Route path='/:_id' element={<Anonymous/>} />

      </Route>
      
      <Route path='/login' element={<LogIn/>}/>

    </Routes>
  </>
  );
}

