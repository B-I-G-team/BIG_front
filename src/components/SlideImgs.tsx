import React from 'react';
import styled from 'styled-components';

interface Props {
  data: {
    id: number;
    image: string;
  };
}

const SlideImgs = ({ data }: Props) => {
  return (
    <ImageBox>
      <Image src={data.image} alt="image" />
    </ImageBox>
  );
};

export default SlideImgs;

const ImageBox = styled.div`
  cursor: pointer;
  padding-left: -10px;

  max-height: 450px;
  @media ${({ theme }) => theme.grid.laptop} {
    border-radius: 20px;
  }
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
