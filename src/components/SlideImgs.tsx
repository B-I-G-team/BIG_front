import React from 'react';
import styled from 'styled-components';

interface Props {
  data: {
    id: number;
    image: string;
  };
  height?: string;
}

const SlideImgs = ({ data, height }: Props) => {
  return (
    <ImageBox height={height as string}>
      <Image src={data.image} alt="image" />
    </ImageBox>
  );
};

export default SlideImgs;

const ImageBox = styled.div<{ height: string }>`
  cursor: pointer;
  height: ${({ height }) => height};

  /* max-height: ${({ height }) => !height && '450px'}; */

  @media ${({ theme }) => theme.grid.laptop} {
    /* border-radius: 20px; */
  }
  overflow: hidden;
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
`;
