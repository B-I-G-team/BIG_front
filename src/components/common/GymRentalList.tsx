import React from 'react';
import gymImage1 from 'assets/gym1.jpeg';
import gymImage2 from 'assets/gym2.jpeg';
import gymImage3 from 'assets/gym3.jpeg';
import gymImage4 from 'assets/gym4.jpeg';
import { Pagination } from 'antd';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const tempGymList = [
  {
    id: 1,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 2,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage2,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 3,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage3,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 4,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage4,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 5,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 6,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 7,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 8,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage2,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 9,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage3,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 10,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage4,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 11,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 12,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 13,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 14,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage2,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 15,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage3,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 16,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage4,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 17,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 18,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 19,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 20,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage2,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 21,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage3,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 22,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage4,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 23,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
  {
    id: 24,
    name: '사하 인피니티 스포츠',
    thumbnail: gymImage1,

    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    pricePerHour: 68000,
  },
];

const GymRentalList = ({ type }: { type: 'team-rental' | 'pickup' }) => {
  return (
    <Container>
      <GymList>
        {tempGymList.map(({ id, thumbnail, name, address, pricePerHour }) => (
          <GymItem
            key={id}
            to={
              type === 'pickup'
                ? `/pickup?tab=register&id=${id}`
                : `/team-rental?id=${id}`
            }
          >
            <Image src={thumbnail} />
            <Content>
              <GymName>{name}</GymName>
              <Address>{address}</Address>
              <Price>{`₩ ${pricePerHour.toLocaleString()} / 1시간`}</Price>
            </Content>
          </GymItem>
        ))}
      </GymList>
      <PaginationWrapper>
        <Pagination defaultCurrent={1} total={500} />
      </PaginationWrapper>
    </Container>
  );
};

export default GymRentalList;

const Container = styled.div``;

const GymList = styled.div`
  margin: 0 -3px;

  display: flex;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.grid.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, auto));
    grid-gap: 32px;
  }
`;
const GymItem = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 50%;
  min-height: 230px;

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
`;
const GymName = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 600;
`;
const Address = styled.div`
  font-size: 10px;
  line-height: 11px;
  font-weight: 200;
`;
const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 600;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0;
`;
