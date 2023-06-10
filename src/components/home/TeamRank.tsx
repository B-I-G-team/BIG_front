import { ColumnsType } from 'antd/es/table';
import { useTeamsGETQuery } from 'api/axios-client/Query';
import { FlexStart } from 'components/common/Wrapper';
import React from 'react';
import styled from 'styled-components';
import { Button, Table } from 'antd';
import { H4, H5 } from 'styles/mixin';
import { useNavigate } from 'react-router-dom';

interface DataType {
  id: string;
  teamName: string;
  teamImage: string;
  leaderName: string;
  leaderImage: string;
  local: string;
  introduction: string;
  peopleCount: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: '순위',
    key: 'rank',
    render: (_, __, index) => <>{index + 1}</>,
    width: 30,
  },
  {
    title: '팀명',
    dataIndex: 'teamName',
    key: 'teamName',
    render: (text, { teamImage }) => (
      <FlexStart>
        <TeamLogo src={teamImage} />
        <>{text}</>
      </FlexStart>
    ),
    width: 80,
  },
  {
    title: '승률',
    dataIndex: 'peopleCount',
    key: 'odds',
    width: 30,
  },
];

const TeamRank = () => {
  const navigate = useNavigate();

  const { data } = useTeamsGETQuery({
    offset: '0',
    limit: '4',
    search: '',
  });
  return (
    <Section>
      <Header>
        <Title>팀 순위</Title>
        <Button size="small" onClick={() => navigate('/team-rank')}>
          더보기
        </Button>
      </Header>
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data?.data}
        pagination={false}
      />
    </Section>
  );
};

export default TeamRank;

const Section = styled.div`
  padding: 5px;

  @media ${({ theme }) => theme.grid.tablet} {
    width: 25%;
  }
`;
const TeamLogo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  margin-right: 4px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  ${H5}

  padding: 10px 0;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.heading_6};
    font-weight: 700;
  }

  @media ${({ theme }) => theme.grid.laptop} {
    ${H4}
  }
`;
