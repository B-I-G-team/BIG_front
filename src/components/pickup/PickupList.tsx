import PickupItem from 'components/home/PickupItem';
import React from 'react';
import styled from 'styled-components';

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
    homeTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-db.svg',
    awayTeam: '???',
    awayTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-sk.svg',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
  {
    id: 4,
    homeTeam: 'KT 소닉붐',
    homeTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-kt.svg',
    awayTeam: 'KCC',
    awayTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-kcc.svg',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
  {
    id: 5,
    homeTeam: '스타트',
    homeTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-db.svg',
    awayTeam: '???',
    awayTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-sk.svg',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
  {
    id: 6,
    homeTeam: 'KT 소닉붐',
    homeTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-kt.svg',
    awayTeam: 'KCC',
    awayTeamLogo: 'https://kbl.or.kr/imgs/logo/emblem-kcc.svg',
    gym: '사하인피니티 체육관',
    startDate: '2023-04-24 09:00',
    endDate: '2023-04-24 11:00',
  },
];

const PickupList = () => {
  return (
    <List>
      {tempDataArr.map((data) => (
        <PickupItem key={data.id} data={data} pickupPage={true} />
      ))}
    </List>
  );
};

export default PickupList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media ${({ theme }) => theme.grid.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, auto));
    grid-gap: 15px;
  }
`;
