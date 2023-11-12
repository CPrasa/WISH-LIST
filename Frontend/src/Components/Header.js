import React from "react";



function Header(){
  return(
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{ color: "white" }}>
      WishList
    </a>
    <a className="navbar-brand" href="/" style={{ color: "white" }}>
      Home
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item d-none d-lg-block">
          <a className="nav-link" href="#">
            <i className="bi bi-house-door" style={{ color: "white" }}></i>
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-search" style={{ color: "white" }}></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-cart" style={{ color: "white" }}></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            <button className="btn btn-outline-light">Login</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signup">
            <button className="btn btn-outline-light rounded-pill">Sign Up</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



  )
}
export default Header;