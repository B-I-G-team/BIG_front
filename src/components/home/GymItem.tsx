import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  data: {
    id: number;
    image: string;
    name: string;
    location: string;
    price: number;
    perHour: number;
    applicant: number;
  };
}

const GymItem = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/team-rental?id=${data.id}`)}>
      <Image src={data.image} />
      <ContentWrapper>
        <TopWrapper>
          <Title>{data.name}</Title>
        </TopWrapper>

        <CenterWrapper>
          <Location>{data.location}</Location>
          <Applicant>신청 인원 수: {data.applicant}명</Applicant>
        </CenterWrapper>

        <BottomWrapper>
          <Price>
            ₩ {data.price.toLocaleString()} / {data.perHour}시간
          </Price>
        </BottomWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default GymItem;

const Container = styled.div`
  transform: rotateX('30deg');

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;
  width: 177px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  box-shadow: 3px 3px 3px 1px rgba(50, 50, 50, 0.15);

  &:hover {
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.grid.tablet} {
    flex: 1;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TopWrapper = styled.div``;
const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 500;

  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.heading_6};
    font-weight: 600;
  }
`;

const Location = styled.div`
  margin-bottom: 10px;
  overflow: hidden; // 안보이게
  white-space: nowrap; //무조건 한줄
  text-overflow: ellipsis; // ... 처리
`;
const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 500;

  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.heading_6};
    font-weight: 600;
  }
`;

const CenterWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.size.body_3};
  font-weight: 300;

  display: block;
  width: 100%;
`;

const Applicant = styled.div``;
