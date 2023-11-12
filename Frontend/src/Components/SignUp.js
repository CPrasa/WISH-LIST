import React,{useState} from "react";
import axios from "axios";


export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [data,setData]=useState([]);

  const adddata=()=>{

    axios.post("http://localhost:8080/api/users",
    {
      
    "firstname": `${firstName}`,
    "lastname": `${lastName}`,
    "username": `${userName}`,
    "email": `${email}`,
    "phonenumber": `${phoneNumber}`,
    "password": `${password}`
  }).then((response)=>
  {
      console.log(response.data);
      alert("Account created successfully");
    })
    .catch((error)=>{
      console.log(error);
    })

  }  




  return(
    <div className="container d-flex justify-content-center align-items-center" style={{ 
      border: '2px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '10px', // Added border radius
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Increased shadow
      width: '1000px',
      height: '600px',
      marginTop: '50px'
    }}>
      <div className="container"> 
        <h2 className="text-center">SIGN UP</h2>
        <form> 
          <div className="form-group">
            <label htmlFor="itemTitle">First Name*</label> 
            <input type="text" className="form-control" id="itemTitle" placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="itemTitle">Last Name*</label> 
            <input type="text" className="form-control" id="itemTitle" placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="itemTitle">User Name*</label> 
            <input type="text" className="form-control" id="itemTitle" placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="itemTitle">Email Address*</label> 
            <input type="email" className="form-control" id="itemTitle" placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="itemTitle">Phone Number*</label> 
            <input type="tel" className="form-control" id="itemTitle" placeholder="+945420456"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Password</label> 
            <input type="password" className="form-control" id="description" placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <ul>
              <li>Something at least 8 characters Long</li>
              <li>Use one or more numbers</li>
              <li>Use one or more lowercase letters</li>
            </ul>
          </div>
          <div className="text-center">

            <button type="submit" onClick={adddata} className="btn btn-primary">
            Create Account
           </button>
          </div>
        </form>
      </div>
    </div>
  );
}


