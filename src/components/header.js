import React from "react";
import "./header.css";
export default function header() {
  return (
    <div>
      <div className="background-image">
        <div className="top-bar" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-8 top-left">
                <span
                  className="phone wow fadeInDown"
                  data-wow-duration=".8s"
                  data-wow-delay=".3s"
                >
                  <i className="glyphicon glyphicon-phone" />
                  <em> +44 (0)2039 230700</em>
                </span>
                <span
                  className="email wow fadeInDown"
                  data-wow-duration=".8s"
                  data-wow-delay=".3s"
                >
                  <i className="glyphicon glyphicon-send" />
                  <em>
                    <a href="">info@uniqon.co.uk</a>
                  </em>
                </span>
              </div>
              <div className="socials pull-right">
                <ul>
                  <li>
                    <a className="wow fadeInUp animated" href>
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href
                      data-wow-delay="0.2s"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href
                      data-wow-delay="0.3s"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href
                      data-wow-delay="0.4s"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href
                      data-wow-delay="0.6s"
                    >
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
          </div>

          <hr className="hr" />
          <div className="top-header">
            <div className="container">
              <div className="col-md-8 col-sm-8 col-xs-8 top-left">
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  Central Milton Keynes,United Kingdom.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 top-right">
                <a
                  href="https://uniqon.peoplehr.net/"
                  target="_blank"
                  className="login"
                >
                  <span />
                  <strong>Employee Login</strong>
                </a>
                <a
                  href="https://uniqon.peoplehr.net/"
                  target="_blank"
                  className="login"
                >
                  <span /> <strong>HRMS Login</strong>
                </a>
              </div>

              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
