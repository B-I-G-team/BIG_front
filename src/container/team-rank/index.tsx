import React, { useEffect, useMemo, useState } from 'react';
import { useTeamsGETQuery } from 'api/axios-client/Query';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Button, Table } from 'antd';
import styled from 'styled-components';
import useWindowSize from 'hooks/common/useWindowSize';
import { FlexStart } from 'components/common/Wrapper';

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
    title: '팀소개',
    dataIndex: 'introduction',
    key: 'introduction',
    width: 160,
  },
  {
    title: '팀장',
    dataIndex: 'leaderName',
    key: 'leaderName',
    render: (text, { leaderImage }) => (
      <FlexStart>
        <TeamLogo src={leaderImage} />
        <>{text}</>
      </FlexStart>
    ),
    width: 80,
  },
  {
    title: '지역',
    dataIndex: 'local',
    key: 'local',
    width: 60,
  },
  {
    title: '인원',
    dataIndex: 'peopleCount', // 임시
    key: 'peopleCount',
    width: 30,
  },
  {
    title: '승',
    dataIndex: 'peopleCount', // 임시
    key: 'winCount',
    width: 30,
  },
  {
    title: '패',
    dataIndex: 'peopleCount', // 임시
    key: 'loseCount',
    width: 30,
  },
  {
    title: '승률',
    dataIndex: 'peopleCount',
    key: 'odds',
    width: 30,
  },
  {
    title: '팀신청',
    width: 40,
    key: 'apply',
    render: () => <Button>신청</Button>,
    fixed: 'right',
  },
];

const Index = () => {
  const { width: windowWidth } = useWindowSize();
  const isMobile = useMemo(() => windowWidth <= 400, [windowWidth]);

  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 1,
  });
  const { data } = useTeamsGETQuery({
    offset: String(
      ((pagination.current as number) - 1) * (pagination.pageSize as number) +
        1,
    ),
    limit: String(pagination.pageSize),
    search: '',
  });

  const handleTableChange = (_pagination: TablePaginationConfig) => {
    setPagination(_pagination);
  };

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: data?.totalCount,
    }));
  }, [data?.totalCount]);

  return (
    <Section>
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data?.data}
        pagination={{ ...pagination, position: ['bottomCenter'] }}
        onChange={handleTableChange}
        scroll={{ x: isMobile ? 1200 : 1500 }}
      />
    </Section>
  );
};

export default Index;

const Section = styled.div`
  max-width: 1180px;
  margin: auto;
`;

const TeamLogo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  margin-right: 4px;
`;
