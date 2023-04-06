import React, { useState } from 'react';
import styled from 'styled-components';
import profileImg1 from 'assets/logo.png';
import profileImg2 from 'assets/place1.jpeg';
import Reserve from './Reserve';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';
const TEAM = 'team';
const PICKUP = 'pickup';

const data = [
  {
    id: 1,
    img: profileImg1,
    name: '김민석',
    team: 'Start',
    Roll: 'C',
    height: 191,
    weight: 91,
  },
  {
    id: 2,
    img: profileImg2,
    name: '김대환',
    team: 'Freaks',
    Roll: 'SG',
    height: 170,
    weight: 60,
  },
  {
    id: 3,
    img: profileImg1,
    name: '김민범',
    team: '에어메카',
    Roll: 'SF',
    height: 175,
    weight: 70,
  },
];

const Mypage = () => {
  const user = data[0];
  const menuArr = [
    { name: '픽업게임', content: PICKUP },
    { name: '팀 대관', content: TEAM },
  ];

  const subMenuArr = [
    { name: '승인 대기중', content: WAIT_CONFIRM },
    { name: '결제 대기중', content: WAIT_PAY },
    { name: '예약 완료', content: RESERVE },
  ];
  const [tab, setTab] = useState(0);
  const [subTab, setSubTab] = useState(0);

  const selectMenuHandler = (index: number) => {
    setTab(index);
    setSubTab(0);
  };

  const selectSubMenuHandler = (index: number) => {
    setSubTab(index);
  };
  return (
    <Container>
      <Title>내 정보</Title>
      <InformationBox>
        <Informations>
          <Information>
            <InformationTitle>이름</InformationTitle>
            <Separator>:</Separator>
            <InformationData>{user.name}</InformationData>
          </Information>
          <Information>
            <InformationTitle>소속팀</InformationTitle>
            <Separator>:</Separator>
            <InformationData>{user.team}</InformationData>
          </Information>
          <Information>
            <InformationTitle>포지션</InformationTitle>
            <Separator>:</Separator>
            <InformationData>{user.Roll}</InformationData>
          </Information>
          <Information>
            <InformationTitle>이름</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              {user.height}/{user.weight}
            </InformationData>
          </Information>
        </Informations>
      </InformationBox>

      <Title>진행중인 예약정보</Title>
      <TabMenu>
        {menuArr.map((el, index) => (
          <TabList
            key={index}
            focused=""
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </TabList>
        ))}
        <EmptyBox></EmptyBox>
      </TabMenu>
      <SubTab>
        {subMenuArr.map((el, index) => (
          <TabList
            key={index}
            className={index === currentSubTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectSubMenuHandler(index)}
          >
            {el.name}
          </TabList>
        ))}
      </SubTab>
      <Reserve Data={menuArr[currentTab]} subData={subMenuArr[currentSubTab]} />
    </Container>
  );
};

export default Mypage;
const Container = styled.div`
  height: 150vh;
`;
const InformationBox = styled.div`
  display: flex;
  @media ${({ theme }) => theme.grid.tablet} {
    justify-content: flex-start;
  }
  margin-bottom: 34px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_4};
  font-weight: 700;
  padding: 0px;
  margin-bottom: 20px;
  margin-top: 34px;
`;

const Informations = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
  align-items: flex-start;
`;

const Information = styled.li`
  padding: 10px;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: 700;
`;
const InformationTitle = styled.div`
  width: 92px;
`;
const Separator = styled.div`
  width: 94px;
`;
const InformationData = styled.div``;
const EmptyBox = styled.li`
  width: 100%;
  border-bottom: 1px solid black;
`;
const TabMenu = styled.ul`
  padding: 0px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 10px;

  .submenu {
    display: flex;
    background-color: #e0e2e7;
    @media ${({ theme }) => theme.grid.tablet} {
      width: 100px;
    }
    width: 50%;
    padding: 10px;
    font-size: ${({ theme }) => theme.font.size.subtitle_2};
    transition: 0.5s;
    border-bottom: 1px solid black;
  }

  .focused {
    background-color: rgb(255, 255, 255);
    color: rgb(21, 20, 20);
    border: 1px solid black;
    border-bottom: 0px;
  }
`;

const SubTab = styled.ul`
  font-weight: bold;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: row;
  }
  .submenu {
    color: ${(focused) => '#cdcfff' || '#5d5fef'};
    display: flex;
    transition: 0.5s;
    font-size: ${({ theme }) => theme.font.size.subtitle_2};
    @media ${({ theme }) => theme.grid.tablet} {
      width: 100px;
      padding: 10px;
    }
    width: 30vw;
    padding: 10px;
  }

  .focused {
    color: #5d5fef;
  }
`;

const TabList = styled.li``;
