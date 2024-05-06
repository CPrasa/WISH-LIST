import React, { useState } from "react";
import axios from "axios";

export default function Loging() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch user data from the API
      const response = await axios.get("http://localhost:3000/users");

      // Check if the user exists and if their credentials are correct
      const user = response.data.find(
        (u) =>
          u.email === loginData.email &&
          u.password === loginData.password
      );

      if (user) {
        // Determine the role of the user
        if (user.role === "admin") {
          window.location.href = "/add";
        } else if (user.role === "user") {
          window.location.href = "/user";
        } else if (user.role === "stakeholder") {
          window.location.href = "/stackholder";
        }
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ 
      border: '2px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      width: '500px',
      height: '450px',
      marginTop: '50px'
    }}>
      <div>
        <h2 className="text-center">LOG IN</h2>
        <form style={{ width: '400px' }} onSubmit={handleFormSubmit}>
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
