import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

// LOGO
import sitelogo from '../Assets/Logo.png';
import discord_icon from '../Assets/discord_icon.png';
import twitter_icon from '../Assets/twitter_icon.png';


function Footer() {
  return (
    <div className='main-footer'>
      <Container>
        <Row>
          <Col sm={6}>
            <div className='f-logo'>
              <Link to={'/'}>
                <img src={sitelogo} alt='' />
                <p>© ADA Exotics 2022 All Rights Reserved</p>
              </Link>
            </div>
          </Col>
          <Col sm={6}>
          <div className="nav-links">
              <span> <a href=""><img src={discord_icon} alt="" /></a></span>
              <span><a href=""><img src={twitter_icon} alt="" /></a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
