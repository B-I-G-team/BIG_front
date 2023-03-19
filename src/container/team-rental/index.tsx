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
import { AiFillCaretDown } from 'react-icons/ai';
import FilledButton from 'components/common/FilledButton';

const tempData = {
  id: 1,
  images: [gymImage1, gymImage2, gymImage3, gymImage4],
  name: '사하 인피니티 스포츠',
  address:
    '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
  phone: '010-1234-5678',
  pricePerHour: 68000,
};

const transferDay = (index: number) => {
  switch (index) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
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
          customInput={
            <DateWrapper>
              {startDate
                ? `${startDate.getFullYear()}-${startDate
                    .getMonth()
                    .toString()
                    .padStart(2, '0')}-${startDate
                    .getDate()
                    .toString()
                    .padStart(2, '0')} (${transferDay(startDate.getDay())})`
                : '날짜 선택'}

              <AiFillCaretDown color="#B2B3B9" />
            </DateWrapper>
          }
          selected={startDate} // value
          onChange={(date) => setStartDate(date as Date)} // 날짜를 선택하였을 때 실행될 함수
        />

        <Price>{`₩ ${pricePerHour.toLocaleString()}`}</Price>
        <FilledButton color="blue" size="fit-content">
          예약하기
        </FilledButton>
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

const ContentWrapper = styled.div`
  padding: 8px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: 700;
  margin-bottom: 4px;
`;

const Address = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 400;
  margin-bottom: 14px;
`;

const Phone = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 400;
  margin-bottom: 14px;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_5};
  font-weight: 700;

  text-align: end;

  margin-bottom: 14px;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme.color.border};
  color: black;
  padding: 10px 16px;

  margin-bottom: 14px;
`;
