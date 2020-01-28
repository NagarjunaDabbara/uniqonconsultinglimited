import React from 'react'
import './contactContent.css'
import { Link } from 'react-router-dom'

export default function contactContent() {
    return (
        <div>
              {/* Blog bottom */}
      <section className="gallery-bottom py-5">
        <div className="container">
          <div className="row partner-grids">
            <div className="col-md-9">
              <h2 className="contact-heading">Get in touch with us</h2>
              <p>WE ARE AWALYS AVAILABLE TO ANSWER YOUR QUESTIONS</p>
            </div>
            <div className="col-md-3 text-align">
              <Link to="/contact"><strong>Contact Us</strong></Link>
            </div>
          </div>
        </div>
      </section>
      {/* //blog bottom */} 
        </div>
    )
}
