import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import temp1 from 'assets/temp1.png';
import temp2 from 'assets/temp2.png';

import SlideImgs from './SlideImgs';
import styled from 'styled-components';

import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const tempDataArr = [
  {
    id: 1,
    image: temp1,
  },
  {
    id: 2,
    image: temp2,
  },
];

const Slide = () => {
  return (
    <Wrapper>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        transitionTime={200}
        stopOnHover={false}
        renderArrowNext={(nextFunc) => (
          <NextIcon onClick={() => nextFunc()}>
            <MdKeyboardArrowRight size={24} color="white" />
          </NextIcon>
        )}
        renderArrowPrev={(prevFunc) => (
          <PrevIcon onClick={() => prevFunc()}>
            <MdKeyboardArrowLeft size={24} color="white" />
          </PrevIcon>
        )}
      >
        {tempDataArr.map((item) => (
          <SlideImgs key={item.id} data={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slide;

const Wrapper = styled.div`
  margin: 0 -10px;
`;

const Icon = styled.div`
  display: none;
  @media ${({ theme }) => theme.grid.laptop} {
    position: absolute;

    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NextIcon = styled(Icon)`
  right: 14px;
`;

const PrevIcon = styled(Icon)`
  left: 14px;
`;
