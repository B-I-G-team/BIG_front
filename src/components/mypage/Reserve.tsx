import React from 'react';
import styled from 'styled-components';
import placeImg from 'assets/place1.jpeg';
import ReserveState from './ReserveState';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';
const TEAM = 'team-rental';
const PICKUP = 'pickup';
const INDIVIDUAL = 'individual-rental';
interface Props {
  content: string;
  subData: string;
}
const tempDataArr = [
  {
    id: 1,
    state: WAIT_CONFIRM,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 12000,
  },
  {
    id: 2,
    state: WAIT_PAY,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 13300,
  },
  {
    id: 3,
    state: RESERVE,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 20000,
  },
  {
    id: 4,
    state: WAIT_CONFIRM,
    image: placeImg,
    type: PICKUP,
    gymName: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 19000,
  },
  {
    id: 5,
    state: RESERVE,
    image: placeImg,
    type: PICKUP,
    gymName: '괴정 인피니트 스포츠',
    location: '부산광역시 사하구 괴정로48번길',
    time: '2023.03.17(수) 15:00 ~ 16:30',
    pay: 17000,
  },
  {
    id: 6,
    state: RESERVE,
    image: placeImg,
    type: PICKUP,
    gymName: '괴정 인피니트 스포츠',
    location: '부산광역시 사하구 괴정로48번길',
    time: '2023.03.17(수) 15:00 ~ 16:30',
    pay: 17000,
  },
  {
    id: 7,
    state: WAIT_PAY,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 13300,
  },
  {
    id: 8,
    state: WAIT_PAY,
    image: placeImg,
    type: INDIVIDUAL,
    gymName: '사하 인피니트 스포츠',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 13300,
  },
];

const Reserve = ({ content, subData }: Props) => {
  return (
    <Container>
      {tempDataArr.map((el, index) => (
        <ReserveInfoBox
          key={index}
          active={content === el.type && subData === el.state}
        >
          <Image src={el.image} alt="" />
          <ReserveInfo>
            <SectionLeft>
              <MainInfo>
                <Title>{el.gymName}</Title>
                <Location>위치 : {el.location}</Location>
              </MainInfo>
              <Time>{el.time}</Time>
            </SectionLeft>
            <ReserveState data={el} />
          </ReserveInfo>
        </ReserveInfoBox>
      ))}
    </Container>
  );
};

export default Reserve;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const Image = styled.img`
  @media ${({ theme }) => theme.grid.tablet} {
    width: 146px;
    height: 110px;
    display: block;
  }
  margin-right: 10px;
  width: 80px;
  height: 60px;
`;
const ReserveInfoBox = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};

  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  flex-direction: row;

  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: row;
    align-items: center;
  }
  border: 1px solid #d9d9d9;
`;

const ReserveInfo = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.grid.tablet} {
    margin-left: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  list-style: none;
`;

const Title = styled.li`
  font-size: 14px;
  font-weight: 700;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: 16px;
  }
`;
const Location = styled.li`
  font-size: 12px;
  font-weight: 500;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.body_1};
  }
`;

const Time = styled.li`
  font-weight: 500;
  font-size: 12px;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.body_1};
  }
`;

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainInfo = styled.div`
  display: block;

  @media ${({ theme }) => theme.grid.tablet} {
    margin-bottom: 40px;
  }
`;
