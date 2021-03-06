// Importing Components from node_modules
import React from 'react';
import Emoji from 'react-emoji-render';

// Importing Styles
import '../stylesheets/Footer.scss';

// Importing Static Assets
import logo from '../assets/Light_Logo_Text.png';
import codeOfConduct from '../assets/HYL_code_of_conduct.pdf';

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="row footer-upper">
        <div className="col-xl-2 footer-about">
          <div className="footer-about-inner">
            <img
              src={logo}
              alt="organization logo"
              style={{
                maxWidth: '200px',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Contains site links */}
        <div className="col-xl-4 footer-site-links">
          <div className="footer-site-links-wrapper">
            <div className="col-md footer-hack-info">

              <div className="footer-hack-info-wrapper">
                <h3 className="footer-title">Hackathon Info</h3>

                <div className="footer-site-links-text">
                  <a
                    href="https://forms.gle/R2tgjp2fDUzZNt9z9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign Up to Participate
                  </a>
                </div>
                <div className="footer-site-links-text">
                  <a href="/#about">
                    About
                  </a>
                </div>
                <div className="footer-site-links-text">
                  <a href="/#schedule">
                    Schedule
                  </a>
                </div>
                <div className="footer-site-links-text">
                  <a href="/#sponsors">
                    Our Sponsors
                  </a>
                </div>
                <div className="footer-site-links-text">
                  <a href="/#faq">
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md footer-other-events">
              <div className="footer-other-events-wrapper">
                <h3 className="footer-title">Other Events</h3>
                <div className="footer-site-links-text">
                  <a href="/other-events">
                    Other Events
                  </a>
                </div>
                <div className="footer-site-links-text">
                  <a href="/other-events/#upcoming">
                    Upcoming Events
                  </a>
                </div>
                <div className="footer-site-links-text">
                  <a href="/other-events/#past">
                    Past Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Following content is for the social media links */}
        <div className="col-xl-3 footer-contact-info">
          <div className="footer-social-wrapper">
            <div className="footer-social-title">
              <h3 className="footer-title">Get In Touch</h3>
            </div>
            <div className="footer-social-icons">
              <svg width="46" height="46" viewBox="0 0 24 24" className="fb-icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                <a href="https://www.facebook.com/Hack-Your-Learning-104061298155807" target="_blank" rel="noopener noreferrer">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6zm4-2a2
                                    2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v-7h-1a1 1 0 1 1 0-2h1V9.5A3.5 3.5 0 0 1 15.5 6h.6a1
                                    1 0 1 1 0 2h-.6A1.5 1.5 0 0 0 14 9.5V11h2.1a1 1 0 1 1 0 2H14v7h4a2 2 0 0 0 2-2V6a2 2
                                    0 0 0-2-2H6z"
                  />
                </a>
              </svg>
              <svg width="46" height="46" viewBox="0 0 24 24" className="ig-icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                <a href="https://www.instagram.com/uofc_hyl/" target="_blank" rel="noopener noreferrer">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4
                                    4 0 0 1-4 4H6a4 4 0 0 1-4-4V6zm4-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0
                                    0 0-2-2H6zm6 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm10.5-4a1.5
                                    1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                  />
                </a>
              </svg>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <a href="https://www.linkedin.com/company/hack-your-learning" target="_blank" rel="noopener noreferrer">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0
                                    4-4V6a4 4 0 0 0-4-4H6zM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm5 5a1
                                    1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6zm.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 10c.34 0 .64.17.82.428A3.51
                                    3.51 0 0 1 14.5 10c2.16 0 3.5 1.926 3.5 3.571V17a1 1 0 1 1-2 0V13.57c0-.768-.66-1.571-1.5-1.571-.524
                                    0-1.103.285-1.5.963V17a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1z"
                  />
                </a>
              </svg>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <a href="mailto:hello@hackyourlearning.ca" target="_blank" rel="noopener noreferrer">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.544 5.168A2.777 2.777 0 0 1 4.8 4h14.4c.936 0 1.753.47 2.256
                                1.168.343.478.544 1.067.544 1.699v10.266C22 18.682 20.78 20 19.2 20H4.8C3.22 20 2 18.682
                                2 17.133V6.867c0-.632.2-1.221.544-1.7zM4.933 6l6.327 6.965a1 1 0 0 0 1.48 0L19.067 6H4.933zM20
                                7.948l-5.78 6.362a3 3 0 0 1-4.44 0L4 7.948v9.185c0 .514.392.867.8.867h14.4c.408 0 .8-.353.8-.867V7.948z"
                  />
                </a>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal rule */}
      <hr />

      {/* Contains the sub footer contain */}
      <div className="row sub-footer--container">
        <div className="col-xl-6 footer-copyright">
          <Emoji text="Copyright &#xa9; 2020 Hack Your Learning | Made with :heart: in Calgary" />
        </div>

        <div className="col-xl-6 footer-conduct">
          <a href={codeOfConduct} target="_blank" rel="noopener noreferrer">Code of Conduct</a>
        </div>
      </div>

    </div>
  </>
);

export default Footer;
