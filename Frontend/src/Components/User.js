import React from "react";
import img1 from './images/a1.png'; 
import img2 from './images/a3.png'; 
import img3 from './images/a2.png';

import {FaYoutube,RiStarSFill} from 'react-icons'

function User() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/orders">Orders</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Watch List</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "36rem",width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Item 1</h5>
                <p className="card-text">
                Item 1 Description<br/>
                  $40
                  
                </p>
                <a href="/orders" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "36rem",width: "18rem" }}>
              <img src={img2} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <br/><br/><br/>
                <h5 className="card-title">Item 2</h5>
                <p className="card-text">
                Item 2 Description<br/>
                $40
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "36rem",width: "18rem" }}>
              <img src={img3} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Item 3</h5>
                <p className="card-text">
                  Item 1 Description<br/>
                  $40
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
