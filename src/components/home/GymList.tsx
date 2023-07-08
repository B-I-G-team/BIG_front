import React, { useMemo } from 'react';
import styled from 'styled-components';
import GymItem from './GymItem';
import { Body2Regular, Description, H4, H5 } from 'styles/mixin';
import { FlexCenter } from 'components/common/Wrapper';
import { useGymGETQuery } from 'api/axios-client/Query';

const GymList = () => {
  const page = 1;
  const pageSize = 4;
  const query = '';

  const { data: gymsData } = useGymGETQuery({
    offset: String((page - 1) * pageSize),
    limit: String(pageSize),
    search: query,
  });

  const gymList = useMemo(() => gymsData?.data || [], [gymsData]);

  return (
    <Section>
      <Container>
        <Title>인기 체육관</Title>
        <SubTitle>팀대관 및 픽업게임을 해보세요.</SubTitle>
        <Wrapper>
          <ListContainer>
            {gymList.map((item) => (
              <GymItem key={item.id} data={item} />
            ))}
          </ListContainer>
        </Wrapper>

        <FlexCenter>
          <MoveButton>팀대관 전체 보기 →</MoveButton>
        </FlexCenter>
      </Container>
    </Section>
  );
};

export default GymList;

const Section = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 5px;

  max-width: 1180px;
  margin: auto;
`;

const Title = styled.div`
  ${H5}

  text-align: center;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.heading_6};
    font-weight: 700;
  }

  @media ${({ theme }) => theme.grid.laptop} {
    ${H4}
  }
`;

const SubTitle = styled.div`
  ${Description}
  text-align: center;

  margin-bottom: 10px;

  @media ${({ theme }) => theme.grid.laptop} {
    ${Body2Regular}
  }
`;

const ListContainer = styled.div`
  display: flex;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;

  /* height: 100%; */

  @media ${({ theme }) => theme.grid.tablet} {
    /* justify-content: space-between; */
    width: 100%;
    position: static;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 240px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.grid.tablet} {
    height: auto;

    margin-bottom: 30px;
  }
`;

const MoveButton = styled.button`
  ${Body2Regular}

  padding: 4px 10px;
`;
