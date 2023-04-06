import React from 'react';
import styled from 'styled-components';
import placeImg from 'assets/place1.jpeg';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';
const TEAM = 'team-rental';
const PICKUP = 'pickup';
const INDIVIDUAL = 'individual-rental';
interface Props {
  Data: string;
  subData: string;
}

interface DataProps {
  Data: {
    id: number;
    state: string;
    image: string;
    type: string;
    gymName: string;
    location: string;
    time: string;
    pay: number;
  };
}
const tempDataArr = [
  {
    id: 1,
    state: WAIT_CONFIRM,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠 ( 팀대관 승인대기중 )',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 12000,
  },
  {
    id: 2,
    state: WAIT_PAY,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠( 팀대관 결제대기중 )',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 13300,
  },
  {
    id: 3,
    state: RESERVE,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠( 팀대관 예약완료 )',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 20000,
  },
  {
    id: 4,
    state: WAIT_CONFIRM,
    image: placeImg,
    type: PICKUP,
    gymName: '사하 인피니트 스포츠( 픽업게임 승인대기중 )',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 19000,
  },
  {
    id: 5,
    state: RESERVE,
    image: placeImg,
    type: PICKUP,
    gymName: '괴정 인피니트 스포츠( 픽업게임 예약완료 )',
    location: '부산광역시 사하구 괴정로48번길',
    time: '2023.03.17(수) 15:00 ~ 16:30',
    pay: 17000,
  },
  {
    id: 6,
    state: RESERVE,
    image: placeImg,
    type: PICKUP,
    gymName: '괴정 인피니트 스포츠( 픽업게임 에약완료 )',
    location: '부산광역시 사하구 괴정로48번길',
    time: '2023.03.17(수) 15:00 ~ 16:30',
    pay: 17000,
  },
  {
    id: 7,
    state: WAIT_PAY,
    image: placeImg,
    type: TEAM,
    gymName: '사하 인피니트 스포츠( 팀대관 결제 대기중 )',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 13300,
  },
  {
    id: 8,
    state: WAIT_PAY,
    image: placeImg,
    type: INDIVIDUAL,
    gymName: '사하 인피니트 스포츠( 개인대관 결제 대기중 )',
    location: '부산광역시 사하구 마하로48번길',
    time: '2023.03.15(수) 15:00 ~ 16:30',
    pay: 13300,
  },
];
const ReserveState = ({ Data }: DataProps) => {
  const Paystring = Data.pay.toLocaleString();
  if (Data.state === WAIT_CONFIRM) {
    return (
      <>
        <Pay>결제할 금액 : {Paystring} </Pay>
        <ButtonBox>
          <CancelButton>취소하기</CancelButton>
        </ButtonBox>
      </>
    );
  } else if (Data.state === WAIT_PAY) {
    return (
      <>
        <Pay>결제할 금액 : {Paystring} </Pay>
        <ButtonBox>
          <Button>결제하기</Button>
          <CancelButton>취소하기</CancelButton>
        </ButtonBox>
      </>
    );
  } else if (Data.state === RESERVE) {
    return (
      <>
        <Pay>결제 금액 : {Paystring} </Pay>
        <ButtonBox>
          <ReserveLabel>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
              />
              <path
                fill="currentColor"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
              />
            </svg>
            예약완료
          </ReserveLabel>
        </ButtonBox>
      </>
    );
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
            Data === el.type && subData === el.state ? 'active' : 'unactive'
          }
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
            <ReserveState Data={el} />
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
  .unactive {
    display: none;
  }
`;
const Image = styled.img`
  @media ${({ theme }) => theme.grid.tablet} {
    width: 146px;
    display: block;
  }
  width: 100%;
`;
const ReserveInfoBox = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: row;
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
    margin-left: 55px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  list-style: none;
`;

const Title = styled.li`
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: 700;
`;
const Location = styled.li`
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: 500;
`;

const Time = styled.li`
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: 500;
`;

const Pay = styled.li`
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: 700;
  margin-bottom: 12px;
  align-self: flex-end;
`;
const Button = styled.div`
  padding: 4px 15px;
  color: #3da5f5;
  border: 1px solid #3da5f5;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  gap: 10px;

  &:hover {
    background-color: #ecf6fe;
  }
`;

const CancelButton = styled.div`
  padding: 4px 15px;
  color: black;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  gap: 10px;

  &:hover {
    background-color: #ebebeb;
  }
`;
const ReserveLabel = styled.div`
  padding: 4px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6ffed;
  color: #52c41a;
  border: 1px solid #b7eb8f;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  gap: 10px;
`;
const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainInfo = styled.div`
  display: block;
  margin-bottom: 40px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;
