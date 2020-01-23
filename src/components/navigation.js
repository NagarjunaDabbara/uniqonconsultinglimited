import React from 'react'
import './navigation.css'
import logo from '../assets/logo.png'
import Header from './header.js'
import { Link } from 'react-router-dom'

export default function navigation() {
    return (
        <div>
            <Header/>
           <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa fa-bars" />
        </label>
        <img className="nav-logo" src={logo} />
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>      
            </ul>
      </nav>
        </div>
    )
}
