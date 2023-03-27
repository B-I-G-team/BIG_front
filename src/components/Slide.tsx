import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import SlideImgs from './SlideImgs';
import styled from 'styled-components';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
  data: {
    id: number;
    image: string;
  }[];
  height?: string;
  autoPlay?: boolean;
}

const Slide = ({ data, height, autoPlay = true }: Props) => {
  return (
    <Wrapper>
      <Carousel
        autoPlay={autoPlay}
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
        {data.map((item) => (
          <SlideImgs key={item.id} data={item} height={height} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slide;

const Wrapper = styled.div`
  margin: 0 -10px;

  .carousel .slider-wrapper.axis-horizontal .slider {
    align-items: center;
  }
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
