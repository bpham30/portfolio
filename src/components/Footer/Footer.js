import React from "react";
import './Footer.css';
import resume from '../../assets/Home/resume.pdf';

export default function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-container">
        <div className="row">
            {/* {col 1} */}
            <div className="col">
                <h4>EXPLORE</h4>
                <ul className="list-unstyled">
                    <li >
                        <a href="#about"> About</a>
                    </li>
                    <li>
                    <a href="#project"> Projects</a>
                    </li>
                    
                    <li>
                    <a href="#contact"> Contact</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href={resume} > Resume</a>
                    </li>
                </ul>
            </div>
            
            {/* {col 2} */}
            <div className="col">
                <h4>CONNECT</h4>
                <ul className="list-unstyled">
                    <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bpham15/" > LinkedIn</a>
                    </li>
                    <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/bpham30/" > GitHub</a>
                    </li>
                </ul>
            </div>
           
            {/* {col 3} */}
            <div className="col">
                <h4 >BANG PHAM</h4>
                <ul className="list-unstyled">
                    <li>Atlanta, GA, U.S.A</li>
                    <li>770-757-0294</li>
                    <li>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:bangapham16@gmail.com" > bangapham16@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
