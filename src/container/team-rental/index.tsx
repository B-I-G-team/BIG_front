import React, { ReactNode, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import gymImage1 from 'assets/gym1.jpeg';
import gymImage2 from 'assets/gym2.jpeg';
import gymImage3 from 'assets/gym3.jpeg';
import gymImage4 from 'assets/gym4.jpeg';
import Slide from 'components/Slide';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const tempData = {
  id: 1,
  images: [gymImage1, gymImage2, gymImage3, gymImage4],
  name: '사하 인피니티 스포츠',
  address:
    '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
  phone: '010-1234-5678',
  pricePerHour: 68000,
};

const Index = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('id');
  console.log(query);
  // 아이디 값으로 api 호출
  const { name, address, phone, pricePerHour } = tempData;
  const [startDate, setStartDate] = useState<Date>();

  return (
    <Container>
      <SlideWrapper>
        <Slide
          data={tempData.images.map((image, idx) => ({ id: idx, image }))}
          autoPlay={false}
        />
      </SlideWrapper>

      <ContentWrapper>
        <Title>{name}</Title>
        <Address>{address}</Address>
        <Phone>{phone}</Phone>
        <DatePicker
          locale={ko} // 언어설정 기본값은 영어
          dateFormat="yyyy-MM-dd" // 날짜 형식 설정
          className="input-datepicker" // 클래스 명 지정 css주기 위해
          minDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          placeholderText="날짜 선택" // placeholder
          // customInput={<Container>hi</Container>}
          selected={startDate} // value
          onChange={(date) => setStartDate(date as Date)} // 날짜를 선택하였을 때 실행될 함수
        />
      </ContentWrapper>
    </Container>
  );
};

export default Index;

const Container = styled.div``;

const SlideWrapper = styled.div`
  @media ${({ theme }) => theme.grid.tablet} {
    display: none;
  }
`;

const ContentWrapper = styled.div``;

const Title = styled.div``;

const Address = styled.div``;

const Phone = styled.div``;
