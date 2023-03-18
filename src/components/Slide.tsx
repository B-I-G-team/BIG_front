import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import gym1Img from '../assets/gym1.jpg';
import gym2Img from '../assets/gym2.jpg';
import gym3Img from '../assets/gym3.jpg';
import SlideImgs from './SlideImgs';

const tempDataArr = [
  {
    id: 1,
    image: gym1Img,
  },
  {
    id: 2,
    image: gym2Img,
  },
  {
    id: 3,
    image: gym3Img,
  },
];

const Slide = () => {
  return (
    <Carousel width={'100%'} showArrows={false} dynamicHeight={true}>
      {tempDataArr.map((item) => (
        <SlideImgs key={item.id} data={item} />
      ))}
    </Carousel>
  );
};

export default Slide;
