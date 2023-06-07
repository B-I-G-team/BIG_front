import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import GymRentalList from 'components/common/GymRentalList';
import PickupList from 'components/pickup/PickupList';
import { useSearchParams } from 'react-router-dom';

const items: TabsProps['items'] = [
  {
    key: 'registered-game',
    label: `등록된 게임`,
    children: <PickupList />,
  },
  {
    key: 'register',
    label: `등록하기`,
    children: <GymRentalList type="pickup" />,
  },
];

const index = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const id = searchParams.get('id');
  const tab = searchParams.get('tab');

  useEffect(() => {
    if (!tab) setSearchParam({ tab: 'registered-game' });
  }, [tab]);

  if (id) {
    return <Section>{id}</Section>;
  }

  return (
    <Section>
      <Tabs
        defaultActiveKey="1"
        activeKey={tab as string}
        items={items}
        onTabClick={(activeKey) => {
          setSearchParam({ tab: activeKey });
        }}
      />
    </Section>
  );
};

export default index;

const Section = styled.div`
  padding: 0 10px;

  max-width: 1180px;
  margin: auto;

  @media ${({ theme }) => theme.grid.tablet} {
    padding: 0;
  }
`;
