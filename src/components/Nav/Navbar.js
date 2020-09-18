import React from 'react'
import { Button } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#" style={{fontSize: 40 }}>Reservation Maker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{paddingTop: 10 + "pt"}}>
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{fontSize: 26 }}>Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{fontSize: 26 }}>Restaurants <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{fontSize: 26 }}>About</a>
            </li>
           <li>
            <NavDropdown title="Services" id="basic-nav-dropdown" style={{fontSize: 26 }}>
            <NavDropdown.Item href="#action/3.1">Make Reservation</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Leave a Review</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cancel Reservation</NavDropdown.Item>
            </NavDropdown>
           </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <Button variant="primary" style={{marginRight: 10 + "px"}}>Sign Up/Log In</Button>
          </form>
        </div>
      </nav>
    
    )
}

export default Navbar;