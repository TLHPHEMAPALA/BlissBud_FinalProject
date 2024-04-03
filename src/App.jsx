import Login from './Components/Loginpage/Login';
import Signup from './Components/SignupPage/Signup';
import Questionarie from './Components/QuestionsPage/Questionarie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Music from './Components/Music/Music';
import Meditation from './Components/Meditation/Meditation';
import Contact from './Components/Contact/Contact';
import Popup from './Components/Loginpage/Popup';
import Videos from './Components/Videos/Videos';
import Calmsongs from  './Components/Calm/Calmsongs';

function App() {
  return (
      <div className="w-full">
          <BrowserRouter>
             <Routes>
                   <Route path ="/" element ={<Login/>}> </Route>
                   <Route path ="/Signup" element ={<Signup/>}> </Route>
                   <Route path ="/Questionarie" element ={<Questionarie/>}> </Route>
                   <Route path ="/Dashboard" element ={<Dashboard/>}> </Route>
                   <Route path ="/Music" element ={<Music/>}> </Route>
                   <Route path ="/Meditation" element ={<Meditation/>}> </Route>
                   <Route path ="/Contact" element ={<Contact/>}> </Route>
                   <Route path ="/Popup" element ={<Popup/>}> </Route>
                   <Route path ="/Videos" element ={<Videos/>}> </Route>
                   <Route path ="/Calmsongs" element ={<Calmsongs/>}> </Route>
             </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;



/*             <div className="flex items-center w-full lg:w-1/2">
              <Login />
            </div>
            <div className="items-center justify-center hidden lg:flex lg:w-1/2">
              <div className="flex items-center lg:w-3/5">
                <Side />
              </div>
            </div>
           */ 