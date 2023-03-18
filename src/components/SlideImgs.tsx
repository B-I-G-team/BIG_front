import React from 'react';
import styled from 'styled-components';

interface Props {
  data: {
    id: number;
    image: string;
  };
  height?: number;
}

const SlideImgs = ({ data, height }: Props) => {
  return (
    <ImageBox height={height as number}>
      <Image src={data.image} alt="image" />
    </ImageBox>
  );
};

export default SlideImgs;

const ImageBox = styled.div<{ height: number }>`
  cursor: pointer;
  object-fit: scale-down;
  height: ${({ height }) => height}px;

  max-height: ${({ height }) => !height && '450px'};

  @media ${({ theme }) => theme.grid.laptop} {
    border-radius: 20px;
  }
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
