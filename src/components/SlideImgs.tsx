import React from 'react'
import styled from 'styled-components';

interface Props {
    data: {
      id: number;
      image: string;
      name: string;
    };
  }

const SlideImgs = ({data} : Props) => {

  return (
   <ImageBox>
        <Image src={data.image} alt={data.name}/>
        <Label>
            {data.name}
        </Label>
    </ImageBox>
  )
}

export default SlideImgs

const ImageBox = styled.div`
`
const Image = styled.img`

`;
const Label = styled.p`
    position : absolute;
    display: inline;
    width : 80%;
    left : 10%;
    bottom : 10%;
    padding :5px;
    border-radius : 5px;
    color: white;
    background-color : rgba(0,0,0,0.2);
    z-index : 10;
`