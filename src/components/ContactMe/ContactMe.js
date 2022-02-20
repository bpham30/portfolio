import React from 'react';
import './ContactMe.css';

export default function ContactMe() {
  return (
    <div id ="contact" className="contact-parent">
      <div className="contact-container">
        <div className="contact-title">
          <h1>CONTACT ME</h1>
        </div>
        <div className="contact-menu">
          <ul className='sm-icons'>
            <li>
            <a href="https://github.com/bpham30">
            <i className="fa-brands fa-github-square"></i>
            </a>
            </li>
            <li><a href="www.linkedin.com/in/bpham15">
              <i className="fa fa-linkedin-square"></i>
            </a></li>
            <li><a href="tel:7707570294">
              <i className="fa fa-phone-square"></i>
            </a></li>
            <li><a href="mailto:bangapham16@gmail.com">
              <i className="fa fa-envelope-square"></i>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
