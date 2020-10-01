import React from 'react'
import { Button } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
        <a className="navbar-brand" style={{fontSize: 40 }}>Reservation Maker</a>
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{paddingTop: 10 + "pt"}}>
            <Link to="/">
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{fontSize: 26 }}>Home <span class="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to="/Restaurants">
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{fontSize: 26 }}>Restaurants <span class="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to="/About">
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{fontSize: 26 }}>About</a>
            </li>
            </Link>
           <li>
            <NavDropdown title="Services" id="basic-nav-dropdown" style={{fontSize: 26 }}>
            <Link to="/Reservation">
            <NavDropdown.Item href="#action/3.1">Make Reservation</NavDropdown.Item>
            </Link>
            <Link to="/Review">
            <NavDropdown.Item href="#action/3.2">Leave a Review</NavDropdown.Item>
            </Link>
            <Link to="/CancelReservation">
            <NavDropdown.Item href="#action/3.3">Cancel Reservation</NavDropdown.Item>
            </Link>
            </NavDropdown>
           </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <Link to="/SignUp_Login">
          <Button variant="primary" style={{marginRight: 10 + "px"}}>Sign Up/Log In</Button>
          </Link>
          </form>
        </div>
      </nav>
    
    )
}

export default Navbar;