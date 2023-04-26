import React from 'react';
import styled from 'styled-components';
import { gray } from '@ant-design/colors';

interface Props {
  data: {
    id: number;
    homeTeam: string;
    homeTeamLogo: string;
    awayTeam: string;
    awayTeamLogo: string;
    gym: string;
    startDate: string;
    endDate: string;
  };
}

const PickupItem = ({ data }: Props) => {
  const { id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, gym, startDate } =
    data;
  return (
    <Container>
      <Header>
        <Date>{startDate}</Date>
        <Location>{gym}</Location>
      </Header>

      <Content>
        <TeamWrapper>
          <HomeTeam>
            <TeamLogo src={homeTeamLogo} />
            <TeamName>{homeTeam}</TeamName>
          </HomeTeam>
          <AwayTeam>
            <TeamLogo src={awayTeamLogo} />
            <TeamName>{awayTeam}</TeamName>
          </AwayTeam>
        </TeamWrapper>

        <Verse>VS</Verse>
      </Content>

      <Footer>
        <Status>경기에정</Status>
      </Footer>
    </Container>
  );
};

export default PickupItem;

const Container = styled.div`
  width: 250px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  border-radius: 4px;
  padding: 8px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.grid.tablet} {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;

  /* Footnote/description */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #262626;
`;

const Date = styled.div``;

const Location = styled.div``;

const Content = styled.div`
  position: relative;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

const HomeTeam = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AwayTeam = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 25px;
  height: auto;
`;

const TeamName = styled.div``;

const Verse = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Status = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #8c8c8c;
`;
