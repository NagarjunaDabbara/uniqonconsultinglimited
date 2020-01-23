import React from 'react'
import './cardBox.css'
export default function cardBox() {
    return (
        <div>
        <div className="container">
        <strong><h1 className="Services">OUR SERVICES</h1></strong><hr className="hrs"/>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="https://i.udemycdn.com/course/750x422/690284_b512.jpg" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Software Engineering</h4><hr/>
              <h5 className="card-text">Software Development</h5>
              <h5 className="card-text">Software Enhancement</h5>
              <h5 className="card-text">Software Migration</h5>
              <h5 className="card-text">Software Testing</h5>
              <h5 className="card-text">Software Support</h5>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://www.aiglobalmedialtd.com/wp-content/uploads/2019/03/financial-services-firms-update-in-house-technology-on-a-reactive-basis-750x410.jpg" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Industries</h4><hr/>
              <h5 className="card-text">Banking Financial Services</h5>
              <h5 className="card-text">Insurance</h5>
              <h5 className="card-text">Retail</h5>
              <h5 className="card-text">ERP</h5>
              <h5 className="card-text">Mobile Applications</h5>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://brandexperts.com.pk/wp-content/uploads/2019/08/It-Services.jpg" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Offerings</h4><hr/>
              <h5 className="card-text">IT Services</h5>
              <h5 className="card-text">IT Consulting</h5>
              <h5 className="card-text">Mobility Products &amp; Services</h5>
              <h5 className="card-text">Cloud Services</h5>
              <h5 className="card-text">BPM Solutions</h5>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQswOmesf6rWYZ5yZ8tZGtuq740CEpQLKo-MClYMybpbhnUcPZj" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Centres of Excellence</h4><hr/>
              <h5 className="card-text">IT Consulting</h5>
              <h5 className="card-text">Mobility</h5>
              <h5 className="card-text">BPM Solutions</h5>
              <h5 className="card-text">Software Testing</h5>
              <h5 className="card-text">Storage Solutions
              </h5>
            </div>
          </div>
        </div>
      </div> 
        </div>
    )
}
