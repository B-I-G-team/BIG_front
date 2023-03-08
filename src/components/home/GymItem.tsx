import React from 'react';
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
  return (
    <Container>
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
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;
  width: 177px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex: 1;

  box-shadow: 3px 3px 3px 1px rgba(50, 50, 50, 0.15);
`;

const Image = styled.img`
  width: 100%;
  flex: 1;
`;

const ContentWrapper = styled.div`
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TopWrapper = styled.div``;
const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 500;
`;

const Location = styled.div`
  margin-bottom: 10px;
  overflow: hidden; // 안보이게
  white-space: nowrap; //무조건 한줄
  text-overflow: ellipsis; // ... 처리
`;
const BottomWrapper = styled.div`
  text-align: end;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 500;
`;

const CenterWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.size.body_3};
  font-weight: 300;

  display: block;
  width: 100%;
`;

const Applicant = styled.div``;
