import React, { useMemo, useState } from 'react';
import { useTeamsAllQuery } from 'api/axios-client/Query';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Table } from 'antd';
import styled from 'styled-components';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import useWindowSize from 'hooks/common/useWindowSize';

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
      <>
        <TeamLogo src={teamImage} />
        <>{text}</>
      </>
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
      <>
        <TeamLogo src={leaderImage} />
        <>{text}</>
      </>
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
    dataIndex: 'peopleCount',
    key: 'peopleCount',
    width: 30,
  },
  {
    title: '승',
    dataIndex: 'peopleCount',
    key: 'peopleCount',
    width: 30,
  },
  {
    title: '패',
    dataIndex: 'peopleCount',
    key: 'peopleCount',
    width: 30,
  },
  {
    title: '승률',
    dataIndex: 'peopleCount',
    key: 'peopleCount',
    width: 30,
  },
];

const Index = () => {
  const { width: windowWidth } = useWindowSize();
  const isMobile = useMemo(() => windowWidth <= 400, [windowWidth]);

  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 200,
  });
  const { data } = useTeamsAllQuery({
    offset: String(pagination.current),
    limit: String(pagination.pageSize),
    search: '',
  });

  const handleTableChange = (_pagination: TablePaginationConfig) => {
    setPagination(_pagination);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ ...pagination, position: ['bottomCenter'] }}
      onChange={handleTableChange}
      scroll={{ x: isMobile ? 800 : 1500 }}
    />
  );
};

export default Index;

const TeamLogo = styled.img`
  width: 24px;
  height: 24px;
`;
