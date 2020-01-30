import React from 'react'
import './navigation.css'
import logo from '../assets/logo.png'
import Header from './header.js'
import { Link } from 'react-router-dom'
import $ from 'jquery';

export default function navigation() {
	$(document).ready(function(){
		$("#flip").click(function(){
			$("#nav").slideToggle(1500);
		});
	  });
	return (
	
        <div>
                    <Header/>
                    <div className="header">
		<div className="logo">
		<Link to="/"> <img className="logo-img"  src={logo}/></Link>
		</div>
		<div id="flip"><button className="nav-btn">Menu</button></div>
		<nav id="nav" className="menu">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/services">Services</Link></li>
				<li><Link to="/careers">Careers</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</nav>
	</div>
        </div>  
    )
}