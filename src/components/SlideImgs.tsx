import React from 'react';
import styled from 'styled-components';
import failedImage from 'assets/img-failed.png';

interface Props {
  data: {
    id: number;
    image: string;
  };
  type?: string;
}

const SlideImgs = ({ data, type }: Props) => {
  return (
    <ImageBox type={type as string}>
      <Image
        src={data.image}
        alt="image"
        type={type as string}
        onError={(e) => ((e.target as HTMLImageElement).src = failedImage)}
      />
    </ImageBox>
  );
};

export default SlideImgs;

const ImageBox = styled.div<{ type: string }>`
  cursor: pointer;
  height: ${({ type }) => (type === 'home' ? `500px` : 'auto')};

  @media ${({ theme }) => theme.grid.laptop} {
    /* border-radius: 20px; */
  }
  overflow: hidden;
`;
const Image = styled.img<{ type: string }>`
  object-fit: ${({ type }) => (type === 'home' ? `cover` : 'contain')};

  height: ${({ type }) => (type === 'home' ? `100%` : 'auto')};
  width: ${({ type }) => (type === 'home' ? `auto` : '100%')};

  @media ${({ theme }) => theme.grid.laptop} {
    object-fit: contain;

    width: 100%;
    height: auto;
  }
`;
