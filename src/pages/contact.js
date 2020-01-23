import React from 'react'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Partner from '../components/partner.js'
import './contact.css'
export default function contact() {
    return (
        <div>
            <Navigation/>
            <div className="contact-container">
    <section className="contact-wrapper">
        <div className="contact-divider">
            <h1>Contact Us</h1>
        </div>
    </section>
</div>
            <div className="wrapper">
  <section className="columns">
    <div className="column">
      <h3>
        <i className="fa fa-map-marker" /> Address
      </h3>
      <p>
        Uniqon Consulting Limited,
        <br />
        Margaret Powell House,
        <br />
        401-447 Midsummer Boulevard,
        <br />
        Central Milton Keynes,
        <br />
        United Kingdom,
        <br />
        MK9 3BN.
      </p>
    </div>
    <div className="column">
      <h3>
        <i className="fa fa-phone" /> Call center
      </h3>
      <p>
        This number is toll free if calling from Great Britain otherwise we
        advise you to use the electronic form of communication.
      </p>
      <p>+44 (0)2039 230700</p>
    </div>
    <div className="column">
      <h3>
        <i className="fa fa-envelope" /> Electronic support
      </h3>
      <p>
        Please feel free to write an email to us or to use our electronic
        support.
      </p>
      <p>info@uniqon.co.uk</p>
    </div>
  </section>
</div>;

            <Partner/>
               {/* map */}
      <div className="map agileits">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1148.7984438751976!2d-0.7626263239743333!3d52.04005879476201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877aaa27e3d0033%3A0x2063d416ca8c8d72!2sMidsummer+Blvd%2C+Milton+Keynes+MK9+3BN!5e1!3m2!1sen!2suk!4v1476280508062" />
      </div>
      {/* //map */}
            <Footer/>
        </div>
    )
}
