import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import gym1Img from '../assets/gym1.jpg'
import gym2Img from '../assets/gym2.jpg'
import gym3Img from '../assets/gym3.jpg'
import SlideImgs from './SlideImgs';


const tempDataArr = [
    {
      id: 1,
      image: gym1Img,
      name: '사하 인피니트 스포츠',
    },
    {
      id: 2,
      image: gym2Img,
      name: '당리 인피니트 스포츠',
    },
    {
      id: 3,
      image: gym3Img,
      name: '괴정 인피니트 스포츠',
    },
  ];

const Slide = () => {
  return (
            <Carousel width={"100%"} showArrows ={false} dynamicHeight ={true}>
                 {tempDataArr.map((item) => (
            <SlideImgs key={item.id} data={item} />
          ))}
            </Carousel>
           
           /*
            <Carousel showArrows={false} dynamicHeight={true}>
            <div key="slide1">
                <img src="http://placehold.it/350x150" />
            </div>
            <div key="slide2">
                <img src="http://placehold.it/255x150" />
            </div>
            <div key="slide3">
                <img src="http://placehold.it/295x150" />
            </div>
            <div key="slide4">
                <img src="http://placehold.it/310x150" />
            </div>
            <div key="slide5">
                <img src="http://placehold.it/575x250" />
            </div>
            <div key="slide6">
                <img src="http://placehold.it/450x150" />
            </div>
            </Carousel>
        */
        
  )
}

export default Slide

