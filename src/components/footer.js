import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      {/* Footer area*/}
      <div className="footer-area">
        <div className=" footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>About us </h4>
                  <div className="footer-title-line" />
                  <img
                    src={logo}
                    alt=""
                    className="wow pulse"
                    data-wow-delay="1s"
                  />
                  <ul className="footer-adress">
                    <strong>
                      {" "}
                      <p>
                        Address:
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
                    </strong>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>Quick links </h4>
                  <div className="footer-title-line" />
                  <ul className="footer-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>News &amp; Events</h4>
                  <div className="footer-title-line" />
                  <ul className="footer-blog">
                    <li>
                      <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                        <strong>
                          {" "}
                          <p
                            style={{
                              lineHeight: "17px",
                              padding: "8px 2px",
                              marginRight: "-30px"
                            }}
                          >
                            >>Uniqon moved into its new office space in Central
                            Milton Keynes.
                          </p>
                        </strong>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                        <strong>
                          {" "}
                          <p
                            style={{
                              lineHeight: "17px",
                              padding: "8px 2px",
                              marginRight: "-30px"
                            }}
                          >
                            >>Uniqon signs up a new client Capita.
                          </p>{" "}
                        </strong>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                        <strong>
                          <p
                            style={{
                              lineHeight: "17px",
                              padding: "8px 2px",
                              marginRight: "-30px"
                            }}
                          >
                            >>Opening for a software developer and a Software
                            tester
                          </p>{" "}
                        </strong>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                        <strong>
                          <p
                            style={{
                              lineHeight: "17px",
                              padding: "8px 2px",
                              marginRight: "-30px"
                            }}
                          >
                            >>Partnered with 3 Frames lab to develop Mobility
                            and Cloud computing products.
                          </p>{" "}
                        </strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer news-letter">
                  <h4>Stay in touch</h4>
                  <div className="footer-title-line" />
                  <div className="social pull-right">
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
                </div>
              </div>
            </div>
          </div>
          <h1 className="quotes">
            WE DON’T JUST TALK ABOUT WHAT IS <br />
            COMING NEXT, WE DO IT.
          </h1>
        </div>
        <div className="footer-copy text-center">
          <div className="container">
            <div className="row">
              <div className="pull-left">
                <span>
                  <a href="">
                    {" "}
                    © Copyright 2014 Uniqon. All rights <b>
                      &reg;
                    </b>reserved.{" "}
                  </a>
                </span>
                <a href=""></a>
              </div>
              <a href=""></a>
              <div className="bottom-menu pull-right">
                <a href=""></a>
                <ul>
                  <li>
                    Webdesign by
                    <a
                      className="wow fadeInUp animated"
                      href="http://www.trinetrawebtechnologies.com"
                      data-wow-delay="0.2s"
                      target="_blank"
                    >
                      TrinetraWebTechnologies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
