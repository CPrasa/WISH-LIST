import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from'./images/Frame 25.png';

export default function Loging() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    loginAs: "user"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      (loginData.email === "example@gmail.com" && loginData.password === "12345" && loginData.loginAs === "user") ||
      (loginData.email === "admin@gmail.com" && loginData.password === "admin" && loginData.loginAs === "admin")
    ) {
      if (loginData.loginAs === "user") {
        window.location.href = "/user";
      } else if (loginData.loginAs === "admin") {
        window.location.href = "/add";
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const imgStyle1 = {
    width: "1800px",
    height: "auto",
    marginLeft: "0",
    marginRight: "0",
    marginTop: "1500px"
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ 
      border: '2px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      width: '1000px',
      height: '600px',
      marginTop: '50px'
    }}>
      <div>
        <h2 className="text-center">LOG IN</h2>
        <form style={{ width: '500px' }} onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="itemTitle">Email Address</label>
            <input
              type="text"
              className="form-control"
              id="itemTitle"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Password</label>
            <input
              type="password"
              className="form-control"
              id="description"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder=""
              required
            />
          </div>
          <div className="form-group">
            <label>Login As:</label>
            <select
              className="form-control"
              name="loginAs"
              value={loginData.loginAs}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="text-center">
            <div style={{ height: '10px' }}></div>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </form>
        <div style={{ height: '10px' }}></div>
      </div>
    </div>
  );
}
