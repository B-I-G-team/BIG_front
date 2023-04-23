import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PickupItem from './PickupItem';

const tempDataArr = [
  {
    id: 1,
    homeTeam: '스타트',
    homeTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-db.svg',
    awayTeam: '???',
    awayTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-sk.svg',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
  {
    id: 2,
    homeTeam: 'KT 소닉붐',
    homeTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-kt.svg',
    awayTeam: 'KCC',
    awayTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-kcc.svg',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
  {
    id: 3,
    homeTeam: '스타트',
    homeTeamLogo: '',
    awayTeam: '',
    awayTeamLogo: '',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
];

const PickupList = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Title>픽업 게임 일정/결과</Title>
        <Button size="small" onClick={() => navigate('/pickup')}>
          더보기
        </Button>
      </Header>

      <ListWrapper>
        <List>
          {tempDataArr.map((data) => (
            <PickupItem key={data.id} data={data} />
          ))}
        </List>
      </ListWrapper>
    </Container>
  );
};

export default PickupList;

const Container = styled.div`
  padding: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ListWrapper = styled.div`
  position: relative;
  height: 120px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  position: absolute;
  top: 0;
  left: 0;
`;
