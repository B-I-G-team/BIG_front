import React from 'react';
import placeImg from 'assets/place1.jpeg';
import styled from 'styled-components';
import GymItem from './GymItem';

const tempDataArr = [
  {
    id: 1,
    image: placeImg,
    name: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길 26 4층',
    price: 10000,
    perHour: 1,
    applicant: 25,
  },
  {
    id: 2,
    image: placeImg,
    name: '당리 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길 26 4층',
    price: 10000,
    perHour: 1,

    applicant: 17,
  },
  {
    id: 3,
    image: placeImg,
    name: '괴정 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길 26 4층',
    price: 10000,
    perHour: 1,
    applicant: 7,
  },
  {
    id: 4,
    image: placeImg,
    name: '괴정 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길 26 4층',
    price: 10000,
    perHour: 1,
    applicant: 7,
  },
];

const GymList = () => {
  return (
    <Container>
      <Title>인기 개인대관 체육관</Title>
      <Wrapper>
        <ListContainer>
          {tempDataArr.map((item) => (
            <GymItem key={item.id} data={item} />
          ))}
        </ListContainer>
      </Wrapper>
    </Container>
  );
};


export default GymList;

const Container = styled.div`
  padding: 5px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_1};
  font-weight: 600;
  padding: 10px 0;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.heading_6};
    font-weight: 700;
  }

  @media ${({ theme }) => theme.grid.laptop} {
    font-size: ${({ theme }) => theme.font.size.heading_5};
  }
`;

const ListContainer = styled.div`
  display: flex;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;

  /* height: 100%; */

  @media ${({ theme }) => theme.grid.tablet} {
    /* justify-content: space-between; */
    width: 100%;
    position: static;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 240px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.grid.tablet} {
    height: auto;
  }
`;
