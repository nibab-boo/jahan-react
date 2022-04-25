import React from 'react';
import { Carousel } from 'react-bootstrap';

// images import
import drinkMix from './../../assets/images/drink_mix.jpg'
import garlicCheeseNan from './../../assets/images/garlic_cheese_nan.jpeg'
import khuhuriRum from './../../assets/images/khukuri_rum.jpg'

const HomeCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={drinkMix}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={garlicCheeseNan}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={khuhuriRum}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
