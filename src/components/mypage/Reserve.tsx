import React from 'react';
import styled from 'styled-components';
import placeImg from 'assets/place1.jpeg';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';
const TEAM = 'team';
const PICKUP = 'pickup';
interface Props {
  Data: {
    name: string;
    content: string;
  };
  subData: {
    name: string;
    content: string;
  };
}
interface StateProps {
  Data: {
    state: string;
    pay: number;
  };
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
];
const ReserveState = ({ state }: any) => {
  if (state === WAIT_CONFIRM) {
    return (
      <>
        <Notification>승인 대기중입니다.</Notification>
        <Button>취소하기</Button>
      </>
    );
  } else if (state === WAIT_PAY) {
    return (
      <>
        <Notification>결제가 완료되면 예약이 완료됩니다.</Notification>
        <Button>결제하기</Button>
        <Button>취소하기</Button>
      </>
    );
  } else if (state === RESERVE) {
    return <Notification>😊예약이 완료되었습니다.</Notification>;
  }
  return null;
};

const Reserve = ({ Data, subData }: Props) => {
  return (
    <Container>
      {tempDataArr.map((el, index) => (
        <ReserveInfoBox
          key={index}
          className={
            Data.content === el.type && subData.content === el.state
              ? 'active'
              : 'unactive'
          }
        >
          <Image src={el.image} alt="" />
          <ReserveInfoList>
            <Title>{el.gymName}</Title>
            <Location>위치 : {el.location}</Location>
            <Time>{el.time}</Time>
            <ReserveState state={el.state} />
          </ReserveInfoList>
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
  .unactive {
    display: none;
  }
`;
const Image = styled.img`
  @media ${({ theme }) => theme.grid.tablet} {
    width: 35%;
    display: block;
  }
  width: 70%;
`;
const ReserveInfoBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: row;
  }
`;

const ReserveInfoList = styled.ul`
  margin: 0px;
  padding: 0px;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: row;
    padding: 15px;
  }
  list-style: none;
`;

const Title = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Location = styled.li`
  font-size: 14px;
`;

const Time = styled.li`
  margin: 20px 0px;
`;
const Pay = styled.li`
  font-size: 24px;
  font-weight: bold;
`;

const Notification = styled.li`
  margin: 10px 0px;
`;

const Button = styled.div`
  padding: 10px 20px;
  color: blue;
  border: 1px solid blue;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
