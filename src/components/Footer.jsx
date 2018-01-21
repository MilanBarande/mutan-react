import React from 'react';
import { Grid } from 'react-bootstrap';

const PageFooter = () => (
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>
        UPMC<span>Lip6</span>
      </h3>

      <p className="footer-links">
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
      </p>

      <p className="footer-company-name">UPMC Lip6 &copy; 2015</p>
    </div>

    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>4 Place Jussieu</span> 75005 Paris, France
        </p>
      </div>

      <div>
        <i className="fa fa-envelope" />
        <p>
          <a href="mailto:remi.cadene@icloud.com">remi.cadene@icloud.com</a>
        </p>
      </div>
    </div>

    <div className="footer-right">
      <p className="footer-company-about">
        <span>About MUTAN</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu
        auctor lacus vehicula sit amet.
      </p>

      <div className="footer-icons">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-github" />
        </a>
      </div>
    </div>
  </footer>
);

export default PageFooter;
