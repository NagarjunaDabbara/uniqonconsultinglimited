import React from 'react'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import './about.css'
import Partner from '../components/partner.js'

export default function about() {
    return (
        <div>
            <Navigation/>
            <div className="about-container">
    <section className="wrapper">
        <div className="divider">
            <h1>About Us</h1>
        </div>
    </section>
</div>

<div className="about">

<p>Uniqon has been at the forefront in innovating unique technology solutions since 2008, focusing on IT Services, IT Consulting, Mobile Applications development and BPM Solutions.</p>
<p>We combine a consultant’s unique problem-solving orientation with deep technical knowledge and strong execution to help clients achieve success in their most critical missions.</p>
<p>In a crowded market place, where thousands of companies across the world provide technology and business solutions, we position ourselves as a niche player, as an advisor to the leadership teams of our customer organizations. We work with key decision people in the customer’s organization to help them develop their business strategy and be successful in the global marketplace.</p>
<p>Uniqon firmly believes that organizations must look beyond cost savings. In order to succeed in the global marketplace, they have to find innovative streams to generate the investment needed for taking the business forward.</p>
<h1><strong>Our Vision</strong></h1>
<p>Our vision is to help our customers achieve their goals in  transforming their technology base through our unique approach.</p>
</div>
<Partner/>
<Footer/>
        </div>
    )
}
