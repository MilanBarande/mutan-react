import React from 'react';

const PageFooter = () => (
  <footer className="footer-distributed">
    <div className="footer-left">
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
