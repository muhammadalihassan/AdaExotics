import { Container} from 'react-bootstrap';
import imge_slider1 from '../../Assets/image_slider1.webp'
import imge_slider2 from '../../Assets/image_slider2.webp'
import imge_slider3 from '../../Assets/image_slider3.webp'
import imge_slider4 from '../../Assets/image_slider4.webp'
import imge_slider5 from '../../Assets/image_slider5.webp'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Demo slider 
import React, { Component } from "react"; 
import Slider from "react-slick";

function about_slider(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
      
        return (
            <div className='about-slider'>
            <Container>
          <div>
            <Slider {...settings}>
              <div className='item'>
              <img src={imge_slider1} alt='img'/>
              <div className="shade"></div>
              </div>
              <div className='item'>
              <img src={imge_slider2} alt='img'/>
              <div className="shade"></div>
              </div>
              <div className='item'>
              <img src={imge_slider3} alt='img'/>
              <div className="shade"></div>
              </div>
              <div className='item'>
              <img src={imge_slider4} alt='img'/>
              <div className="shade"></div>
              </div>
              <div className='item'>
              <img src={imge_slider5} alt='img'/>
              <div className="shade"></div>
              </div>
            </Slider>
          </div>
          </Container>
          </div>
        );
}

export default about_slider;