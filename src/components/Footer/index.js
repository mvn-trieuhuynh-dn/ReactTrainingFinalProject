import React from 'react';
import  twitterLogo  from '../../assets/img/twitter.png';
import  facebookLogo  from '../../assets/img/facebook.png';
import  lineLogo  from '../../assets/img/line.png';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer-page">
        <div className="container">
          <div className="footer-box">
            <p className="coppyright">Copyright © T. 2021</p>
            <p className="created-by socials">
              <img className="social-icon" src={twitterLogo} alt="twitter"/>
              <img className="social-icon" src={facebookLogo} alt="fb"/>
              <img className="social-icon" src={lineLogo} alt="line"/>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
