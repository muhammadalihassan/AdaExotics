import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React, { useState } from 'react';
import About_slider from '../src/Views/About_slider/Index';
// Images imports
import banner_heading from '../src/Assets/ada_heading.png'
import banner_video from '../src/Assets/banner-video.mp4'
import about_heading from '../src/Assets/about-heading.webp'
import gallery_img1 from '../src/Assets/gallery-img1.png'
import gallery_img2 from '../src/Assets/gallery-img2.webp'
import gallery_img3 from '../src/Assets/gallery-img3.webp'
import gallery_img4 from '../src/Assets/gallery-img4.webp'
import gallery_img5 from '../src/Assets/gallery-img5.webp'
import roadmap_heading from '../src/Assets/roadmap_heading.webp'
import project_utility from '../src/Assets/project_utility.webp'
import team_head from '../src/Assets/team-head.webp'
import animal from '../src/Assets/animal.webp'
import wild from '../src/Assets/wild.webp'
import roadmap from '../src/Assets/roadmap.jpg'
import team_img1 from '../src/Assets/team-img1.png'
import team_img2 from '../src/Assets/team-img2.png'
import team_img3 from '../src/Assets/team-img3.png'
import team_ceo from '../src/Assets/team-ceo.webp'
import co_founder from '../src/Assets/co-founder.webp'
import twitter_co from '../src/Assets/twitter_co.png'
import faq from '../src/Assets/faq.webp'


// SLICK
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

import $ from 'jquery';
// Aos animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();





function App() {
    return (
        <>
            <Element className='home-section element' name="test1" data-aos="zoom-in">
                <div className="banner-heading">
                    <Container>
                        <img src={banner_heading} alt="img" />
                    </Container>
                </div>
                <div className="banner-video">
                    <Container>
                        <video autoPlay muted loop width="100%" id='myVideo'>
                            <source src={banner_video} type="video/mp4" />
                            <source src={banner_video} type="video/ogg" />
                        </video>
                    </Container>
                </div>
            </Element>
            {/* About  */}
            <Element className='about element' name='test2' id='about'>
                <div className="about-heading" data-aos="fade-left" >
                    <Container>
                        <div className="head-img">
                            <img src={about_heading} alt="img" />
                            <p>ADA Exotics is a digital art and Cardano NFT collection aimed at capturing the beauty of some of the most majestic animals we share the earth with!  Our unique concept for the first series combines the half-faces of animals together, forming a complete face and resulting in truly eye-catching designs. Our second series has been turned into 3D art and will be released in July 2022.</p>
                        </div>
                    </Container>
                </div>
                <div className="about-slider" data-aos="fade-right" >
                    <About_slider />
                </div>
                <div className="series-gallery" data-aos="flip-up" >
                    <Container>
                        <h6>SERIES 1 GALLERY</h6>
                        <div className="gallery-images">
                            <ul>
                                <li> <img src={gallery_img1} alt="img" /> </li>
                                <li> <img src={gallery_img2} alt="img" /> </li>
                                <li> <img src={gallery_img3} alt="img" /> </li>
                                <li> <img src={gallery_img4} alt="img" /> </li>
                                <li> <img src={gallery_img5} alt="img" /> </li>

                            </ul>
                        </div>
                    </Container>
                </div>
            </Element>
            {/* About End */}
            {/* Roadmap  */}
            <Element className='roadmap element' name='test3' id='roadmap'>
                <Container>
                    <div className="head-img" data-aos="fade-left" >
                        <img src={roadmap_heading} alt="img" />
                    </div>
                </Container>
                <div className="roadmap-img" data-aos="zoom-in" >
                    <div className="back-circle">
                        <div data-testid="svgRoot-comp-l2vywlp5" class="_3bLYT _2OIRR"><svg preserveAspectRatio="none" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 200" role="presentation" aria-hidden="true" fill='#7FA88B'>
                            <g>
                                <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                            </g>
                        </svg></div>
                    </div>
                    <img src={roadmap} alt="img" />
                    <div className="arrow-next">
                        <svg preserveAspectRatio="none" data-bbox="14.5 29 171 142" viewBox="14.5 29 171 142" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" fill='#7FA88B'>
                            <g>
                                <path d="M100 29l85.5 142h-47.333L100 103.522 61.833 171H14.5L100 29z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

            </Element>
            {/* Roadmap End */}
            {/* Project utility  */}
            <Element className='project-utility element' name='test4' id='utility'>
                <Container>
                    <div className="head-img" data-aos="fade-left" >
                        <img src={project_utility} alt="img" />
                    </div>
                    <div className="head-img" data-aos="zoom-in" >
                        <img src={wild} alt="img" />
                    </div>
                    <div className="head-img" data-aos="zoom-in" >
                        <img src={animal} alt="img" />
                    </div>
                </Container>
            </Element>
            {/* Project utility End */}
            {/* The Team  */}
            <Element className='team element' name='test5' id='theteam'>
                <Container>
                    <div className="head-img" data-aos="fade-left" >
                        <img src={team_head} alt="img" />
                    </div>
                </Container>
                <Container className='card-width' data-aos="fade-right" >
                    <Row>
                        <Col md={4}>
                            <div className="team-card">
                                <div className="team-img">
                                    <img src={team_img1} alt="img" />
                                    <div className="ceo"><img src={team_ceo} alt="img" /></div>
                                </div>
                                <div className="team-detail">
                                    <h5>CHRIS</h5>
                                    <h6>Founder & Lead Dev</h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="team-card">
                                <div className="team-img">
                                    <img src={team_img2} alt="img" />
                                    <div className="ceo"><img src={co_founder} alt="img" /></div>
                                </div>
                                <div className="team-detail">
                                    <h5>ANGELINA</h5>
                                    <h6>Co-Founder & Artist</h6>
                                    <a href="https://twitter.com/angelinastanzi"><img src={twitter_co} alt="icon" /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="team-card">
                                <div className="team-img">
                                    <img src={team_img3} alt="img" />
                                </div>
                                <div className="team-detail">
                                    <h5>FARSIGHT</h5>
                                    <h6>Backend Developer</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="team-para">
                        <p>We are a three-person team in the UK with a passion for exotic wildlife!  Through our CNFT project, we hope to raise awareness for these animals, many of which are endangered, or on the verge of being so. We hope you enjoy the art and the animals as much as we do! This is all for a good cause–see Our Mission for more details.</p>
                    </div>
                </Container>
            </Element>
            {/* The Team End */}
            {/* FAQ  */}
            <Element className='faq element' name='test6' id='faq'>
                <Container>
                    <div className="head-img"  >
                        <img src={faq} alt="img" data-aos="fade-left" />
                    </div>
                    <div className="accordian-area" data-aos="zoom-right" >
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="num">01</div>
                                    <div className="accord-head"><h3>When is the drop?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    2nd July, 2022. Time TBA.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <div className="num">02</div>
                                    <div className="accord-head"><h3>What is the collection size?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    4,000
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <div className="num">03</div>
                                    <div className="accord-head"><h3>How can I get whitelisted?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Check out our <a href="">Discord</a> to learn how to get whitelisted for Series 2!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <div className="num">04</div>
                                    <div className="accord-head"><h3>Are there any rarities?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes – we will be listed on CNFT.tools after the drop so you can check out the ranking of your Exotic NFTs!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <div className="num">05</div>
                                    <div className="accord-head"><h3>Is this a verified project?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Series 1 is officially verified on CNFT.io and jpg.store.  We will get Series 2 verified too, ASAP.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <div className="num">06</div>
                                    <div className="accord-head"><h3>What's the mint price?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    TBA.  We will release this closer to the mint date.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>
                                    <div className="num">07</div>
                                    <div className="accord-head"><h3>Will there be royalties?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, there will be royalties applied to Series 2.  100% of the royalties made will be put into project development and holder-only raffles and giveaways. The royalties percentage is undecided at this time, but we will update this as soon as we have decided.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>
                                    <div className="num">08</div>
                                    <div className="accord-head"><h3>Policy ID?</h3></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Series 1:  d900cf7c71fd09e413c7e2622de35648933af805713203cf0d025413
                                    <br />
                                    Series 2:  TBA
                                    <br />
                                    *Make sure to check these before purchasing on any secondary marketplaces.


                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </Container>
            </Element>
            {/* FAQ End */}
        </>

    );
}

export default App;