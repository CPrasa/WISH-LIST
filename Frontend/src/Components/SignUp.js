import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const addData = () => {
    const userData = {
      name: `${firstName} ${lastName}`,
      username: userName,
      email: email,
      password: password,
      role: role
    };

    axios.post("http://localhost:3000/users/add", userData)
      .then((response) => {
        console.log(response.data);
        alert("Account created successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
            <label htmlFor="firstName">First Name*</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name*</label>
            <input type="text" className="form-control" id="userName" placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" className="form-control" id="email" placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role*</label>
            <select className="form-control" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="stakeholder">Stakeholder</option>
            </select>
          </div>
          <div>
            <ul>
              <li>Something at least 8 characters Long</li>
              <li>Use one or more numbers</li>
              <li>Use one or more lowercase letters</li>
            </ul>
          </div>
          <div className="text-center">
            <button type="button" onClick={addData} className="btn btn-primary">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
