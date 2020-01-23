import React from 'react'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Partner from '../components/partner.js'
import './careers.css'
export default function careers() {
    return (
        <div>
            <Navigation/>
            <div className="careers-container">
    <section className="careers-wrapper">
        <div className="careers-divider">
            <h1>Careers</h1>
        </div>
    </section>
</div>
               <div className="text">
        <p>Uniqon is a fast growing organization and we are always on the lookout for skilled, talented and enthusiastic individuals to join our existing team. In return we offer a competitive salary and benefits package, excellent training opportunities and long term career progression in our company.</p>
        <p>If you are interested in finding out more or would like to enroll for future vacancies please send your CV to info@uniqon.co.uk</p>
        <table>
        <thead>
          <tr>
            <th>POSITION</th>
            <th>SKILLS</th>
            <th>QUALIFICATION</th>
            <th>LOCATION</th>
            <th>EXPERIENCE</th>
            <th>APPLY NOW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="POSITION">SAP Basis Consultants	</td>
            <td data-column="SKILLS">	Certified SAP Basis Consultants with minimum 4 years of SAP Technical Support and Help desk experience</td>
            <td data-column="QUALIFICATION">Any Graduation</td>
            <td data-column="LOCATION">UK	</td>
            <td data-column="EXPERIENCE">	Minimum 4 years	</td>
            <td data-column="APPLY NOW">Apply Now	</td>
          </tr>
          <tr>
            <td data-column="POSITION">IT Systems Architect / Pega PRPC	</td>
            <td data-column="SKILLS">Pega PRPC v6.x, CPM framework, Java, Oracle, WebSphere, XML with excellent communication	</td>
            <td data-column="QUALIFICATION">Any Graduation</td>
            <td data-column="LOCATION">UK	</td>
            <td data-column="EXPERIENCE">	Minimum 5 years</td>
            <td data-column="APPLY NOW">Apply Now	</td>
          </tr>
          <tr>
            <td data-column="POSITION">Office Administrator/ Fixed term Contract	</td>
            <td data-column="SKILLS">Admin activities, Assisting the Technical team and Support team, MS Office, Excellent Communication	</td>
            <td data-column="QUALIFICATION">Any Graduation	</td>
            <td data-column="LOCATION">UK	</td>
            <td data-column="EXPERIENCE">	Minimum 2 years	</td>
            <td data-column="APPLY NOW">Apply Now</td>
          </tr>
          <tr>
            <td data-column="POSITION">Software Test Analyst	</td>
            <td data-column="SKILLS">Manual and Automation testing using selenium with excellent communication	</td>
            <td data-column="QUALIFICATION">Any Graduation	</td>
            <td data-column="LOCATION">UK	</td>
            <td data-column="EXPERIENCE">	Minimum 5 years	</td>
            <td data-column="APPLY NOW">Apply Now</td>
          </tr>
        </tbody>
      </table>
        
        <p>We welcome suitable international experience, functional experience wherever applicable and additional certifications etc.</p>  
    <h1><strong>Apply with confidence</strong></h1>
        <p>
          Latest copy of resume in MS Word format to be emailed to info@uniqon.co.uk mentioning position applied in email subject. As an established international organisation we are an equal opportunity employer and our HR practices do not discriminate race, religion or sex. We also believe in maintaining best professional work disciplines offering complete freedom at work that help every individual innovate every day and balance between work and life joyfully.</p>
      </div>
      <Partner/>
      <Footer/>
        </div>
    )
}
