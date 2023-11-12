import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';
import CreateOrder from './Components/CreateOrder';
import Loging from './Components/Loging';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import User from './Components/User';
import Orders from './Components/Orders';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (

    <Router>
    <div>
     <Header/>
     <Routes>
      <Route path="" exact Component={LandingPage} /> 
     </Routes>
     <Routes>
     <Route path="/add" exact Component={CreateOrder} />
     </Routes>
   
     <Routes>
     <Route path="/login" exact Component={Loging} />
     </Routes>
     <Routes>
     <Route path="/Signup" exact Component={SignUp} />
     </Routes>
     <Routes>
     <Route path="/user" exact Component={User} />
     </Routes>
     <Routes>
     <Route path="/orders" exact Component={Orders} />
     </Routes>
    </div>
    
    </Router>
    
  );
}

export default App;
