import React from "react";
import "./header.css";
export default function header() {
  return (
    <div>
      <div className="background-image">
              {/* header */}
      <header>
        <div className="header_topw3layouts_bar">
          <div className="container">
            {/* header-top */}
            <div className="row  py-lg-4 py-3">
              <div className="col-xl-7 col-lg-6 header_agileits_left">
                <ul>
                  <li className="mr-3">
                    <i className="fa fa-phone mr-2" /> +44 (0)2039 230700</li>
                  <li>
                    <i className="fa fa-envelope mr-2" />
                    <a href="mailto:info@uniqon.co.uk">info@uniqon.co.uk</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-5 col-lg-6 header_right text-center mt-lg-0 mt-2">
                <div className="row">
                  
                  <div className="col-4 header-loginw3ls text-lg-right text-center">
                    <a href="https://uniqon.peoplehr.net/" target="_blank" className="log">  
                      <i className="fa fa-user mr-2" />Employee Login </a>
                  </div>&nbsp;
                  <div className="col-4 header-loginw3ls">
                    <a href="https://uniqon.peoplehr.net/" target="_blank" className="log">
                      <i className="fa fa-user mr-2" />HRMS Login</a>
                  </div>
                </div>
              </div>
            </div>
            {/*// header-top */}
          </div></div></header>
          <hr className="new2"/>
        </div>
        </div>
     
  );
}
