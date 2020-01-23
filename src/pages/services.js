import React from 'react'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Partner from '../components/partner.js'
import './services.css'
export default function services() {
    return (
        <div>
          <Navigation/>
          <div className="services-container">
    <section className="services-wrapper">
        <div className="services-divider">
            <h1>Services</h1>
        </div>
    </section>
</div>
                <div className="text">
        <p>Uniqon provides a range of services in Product engineering, Application Development &amp; Maintenance Services, IT Consulting, Mobility &amp; Cloud Services, BPM Services, Software Testing and support- all directed at a commitment to deliver for clients’ results that endure with on-time delivery, perfection and certainty. Services are offered in multiple technologies across a spectrum of domains.</p>
        <p>Uniqon has expertise in the following cross-cutting functional capabilities:</p>
        <ul>
          <li>
            IT Services
          </li>
          <li>IT Consulting </li>
          <li>Software Testing </li>
          <a href="http://www.3frameslab.com/"><li>Mobility</li></a>
          <a href="http://www.3frameslab.com/"><li>Cloud Services </li></a>
        </ul>
        </div>
        <Partner/>
        <Footer/>
        </div>
    )
}
