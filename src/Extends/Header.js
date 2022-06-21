
import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import Section from './Switch.js'

// LOGO
import sitelogo from '../Assets/Logo.png';
import discord_icon from '../Assets/discord_icon.png';
import twitter_icon from '../Assets/twitter_icon.png';

import wildpaper from '../Assets/WildpaperFinal.pdf'




function Header() {

  const [expanded, setExpanded] = useState(false);


  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }


  return (
    <div className='main-header'>
      <div className='mar'>
        <Navbar bg='default' expand='lg' expanded={expanded}>
          <Container>
            <Navbar.Brand as={Link} to={'/'}>
              <img src={sitelogo} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id='basic-navbar-nav'>

              <Nav className=''>
                <Nav.Link exact='true' as={Link} to={'/'} >Home</Nav.Link>
                <Nav.Link exact='true' href={'#about'} >About</Nav.Link>
                <Nav.Link exact='true' href={'#roadmap'} >Roadmap</Nav.Link>
                <Nav.Link exact='true' href={'#utility'} >Utility</Nav.Link>
                <Nav.Link exact='true' href={'#theteam'} >The Team</Nav.Link>
                <Nav.Link exact='true' href={wildpaper} >Wildpaper</Nav.Link>
                <Nav.Link exact='true' href={'#faq'} >FAQ</Nav.Link>

                <div className="nav-links">
                  <span><img src={discord_icon} alt="" /></span>
                  <span><img src={twitter_icon} alt="" /></span>
                </div>
              </Nav>


            </Navbar.Collapse>

          </Container>


        </Navbar>
      </div>
      <Section />
    </div>

  );
}

export default Header;
