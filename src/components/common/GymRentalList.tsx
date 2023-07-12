import React, { useEffect, useMemo, useState } from 'react';

import { Input, Pagination, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Body2Bold, Body2Regular, H5 } from 'styles/mixin';
import { FlexBetween } from './Wrapper';
import { useGymGETQuery } from 'api/axios-client/Query';
import failedImage from 'assets/img-failed.png';

const GymRentalList = ({ type }: { type: 'team-rental' | 'pickup' }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get('page'));
  const query = searchParams.get('query') || '';
  const pageSize = 8;

  useEffect(() => {
    if (type === 'team-rental' && page === 0) {
      navigate(`/team-rental?page=1&query=${query}`);
    } else if (type === 'pickup' && page === 0) {
      navigate(`/pickup?tab=register&page=1&query=${query}`);
    }
  }, [page, type]);

  const [search, setSearch] = useState('');

  const { data: gymsData } = useGymGETQuery({
    offset: String((page - 1) * pageSize),
    limit: String(pageSize),
    search: query,
  });

  const gymList = useMemo(() => gymsData?.data || [], [gymsData]);
  const gymListTotal = useMemo(() => gymsData?.totalCount || 0, [gymsData]);

  const onChangePagination = (page: number) => {
    if (type === 'team-rental')
      navigate(`/team-rental?page=${page}&query=${query}`);
    else if (type === 'pickup')
      navigate(`/pickup?tab=register&page=${page}&query=${query}`);
  };

  return (
    <Container>
      <Header>
        <Title>{`"${query}" 검색결과`}</Title>
        <FlexBetween>
          <Input
            placeholder="체육관, 업체 검색"
            style={{
              marginRight: '4px',
            }}
            prefix={
              <SearchOutlined style={{ color: '#8C8D96', fontSize: '18px' }} />
            }
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onPressEnter={() => {
              navigate(`/team-rental?page=${page}&query=${search}`);
            }}
          />
          <Select
            defaultValue={'인기순'}
            options={[
              { value: '인기순', label: '인기순' },
              { value: '가격순', label: '가격순' },
            ]}
          />
        </FlexBetween>
      </Header>

      <GymList>
        {gymList.map(({ id, images, name, address1, defaultPrice }) => (
          <GymItem
            key={id}
            to={
              type === 'pickup'
                ? `/pickup?tab=register&id=${id}`
                : `/team-rental?id=${id}`
            }
          >
            <Image
              src={(images.length > 0 && images[0].url) || ''}
              onError={(e) =>
                ((e.target as HTMLImageElement).src = failedImage)
              }
            />
            <Content>
              <GymName>{name}</GymName>
              <Address>{address1}</Address>
              <Price>{`₩ ${defaultPrice.toLocaleString()} / 1시간`}</Price>
            </Content>
          </GymItem>
        ))}
      </GymList>
      <PaginationWrapper>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={gymListTotal}
          onChange={onChangePagination}
        />
      </PaginationWrapper>
    </Container>
  );
};

export default GymRentalList;

const Container = styled.div`
  padding: 0 10px;
`;

const GymList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.grid.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));
    grid-gap: 18px;
  }
`;
const GymItem = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 16px;
  /* min-height: 230px; */

  /* max-width: 200px; */

  @media ${({ theme }) => theme.grid.tablet} {
    /* width: 180px; */
    width: 100%;
  }
`;
const Content = styled.div`
  padding: 7px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
const GymName = styled.div`
  ${H5}
`;
const Address = styled.div`
  ${Body2Regular}
`;
const Price = styled.div`
  ${Body2Bold}
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0;
`;

const Title = styled.div`
  ${H5}
`;

const Header = styled.div`
  padding: 10px 0;

  @media ${({ theme }) => theme.grid.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
