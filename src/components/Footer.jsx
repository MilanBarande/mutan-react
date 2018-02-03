import React from 'react';

const PageFooter = () => (
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>
        UPMC<span>Lip6</span>
      </h3>
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
      <p className="footer-company-name">UPMC Lip6 &copy; 2015</p>
    </div>

    <div className="footer-center" />

    <div className="footer-right">
      <p className="footer-company-about">
        <span>About MUTAN</span>
        MUTAN is based on Neural Networks and the Tucker Decomposition to address this machine
        learning problem.
      </p>

      <div className="footer-icons">
        <a href="https://twitter.com/RemiCadene">
          <i className="fa fa-twitter footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/remi-cadene-6527509b/">
          <i className="fa fa-linkedin footer-icon" />
        </a>
        <a href="https://github.com/Cadene">
          <i className="fa fa-github footer-icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default PageFooter;
