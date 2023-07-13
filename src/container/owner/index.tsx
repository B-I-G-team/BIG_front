import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Popover, Button } from 'antd';
import OutlinedButton from 'components/common/OutlinedButton';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { H3, H4, H5 } from 'styles/mixin';
import gymImage1 from 'assets/gym1.jpeg';
import gymImage2 from 'assets/gym2.jpeg';
import gymImage3 from 'assets/gym3.jpeg';
import gymImage4 from 'assets/gym4.jpeg';
import TimeSelect2 from 'components/common/TimeSelect2';

const items: TabsProps['items'] = [
  {
    key: '0',
    label: `대관 신청 현황`,
  },
  {
    key: '1',
    label: `일정 관리`,
  },
  {
    key: '2',
    label: `체육관 정보 관리`,
  },
];
const tempDataBooking = [
  [
    {
      key: 0,
      type: '팀대관',

      teamName: '서울 SK',
      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
    {
      key: 1,
      type: '팀대관',
      teamName: '부산 KT',

      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
    {
      key: 2,
      type: '팀대관',
      teamName: '대전 수박',

      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
  ],
  [
    {
      key: 0,
      type: '팀대관',

      teamName: '서울 SK',
      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
    {
      key: 1,
      type: '팀대관',
      teamName: '서울 KT',

      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
    {
      key: 2,
      type: '팀대관',
      teamName: '서울 수박',

      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
  ],
  [
    {
      key: 0,
      type: '팀대관',

      teamName: '부산 SK',
      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
    {
      key: 1,
      type: '팀대관',
      teamName: '부산 KT',

      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
    {
      key: 2,
      type: '팀대관',
      teamName: '부산 수박',

      bookingDate: '2023.04.20(수) 15:00 ~ 16:30',
      pay: 15000,
    },
  ],
];
const tempDataGym = [
  {
    value: 0,
    images: [gymImage1, gymImage2, gymImage3, gymImage4],
    label: '사하 인피니티 스포츠',
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    phone: '010-1234-5678',
    pricePerHour: 68000,
    openTime: '08:00',
    closedTime: '20:00',
  },
  {
    value: 1,
    images: [gymImage2, gymImage2, gymImage2, gymImage2],
    label: '연산 인피니티 스포츠',
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    phone: '010-1234-5678',
    pricePerHour: 68000,
    openTime: '08:00',
    closedTime: '20:00',
  },
  {
    value: 2,
    images: [gymImage3, gymImage3, gymImage4, gymImage4],
    label: '동래 인피니티 스포츠',
    address:
      '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
    phone: '010-1234-5678',
    pricePerHour: 68000,
    openTime: '08:00',
    closedTime: '20:00',
  },
];

const tempDataGymschedule = [
  {
    name: '월',
    content: '1',
  },
  {
    name: '화',
    content: '2',
  },
  {
    name: '수',
    content: '3',
  },
  {
    name: '목',
    content: '4',
  },
  {
    name: '금',
    content: '5',
  },
  {
    name: '토',
    content: '6',
  },
  {
    name: '일',
    content: '7',
  },
];

const index = () => {
  const [tab, setTab] = useState(0);
  const handleChangeGym = (value: number) => {
    setManageGym(value);
    setSelectPhoto(tempDataGym[value].images[0]);
  };
  const onChangeTab = (key: string) => {
    setTab(Number(key));
  };
  const content = (
    <PopoverContent>
      {tempDataGym.map((data) => (
        <GymButton key={data.value} onClick={() => handleChangeGym(data.value)}>
          {data.label}
        </GymButton>
      ))}
    </PopoverContent>
  );
  const [manageGym, setManageGym] = useState(0);
  const [selectPhoto, setSelectPhoto] = useState(
    tempDataGym[manageGym].images[0],
  );

  const onSelectPhoto = (image: string) => {
    setSelectPhoto(image);
  };
  return (
    <Container>
      <LeftSection>
        <GymTitleWrapper>
          <GymTitle>{tempDataGym[manageGym].label}</GymTitle>
          <Popover placement="bottomRight" content={content} trigger="click">
            <ButtonPOP>▼</ButtonPOP>
          </Popover>
        </GymTitleWrapper>
        <PhotoWrapper>
          <SelectPhoto src={selectPhoto} />
          <PhotoList>
            {tempDataGym[manageGym].images.map((image, idx) => (
              <PhotoItem
                key={idx}
                src={image}
                onClick={() => onSelectPhoto(image)}
              />
            ))}
          </PhotoList>
        </PhotoWrapper>
      </LeftSection>
      <RightSection>
        <Tabs defaultActiveKey="0" items={items} onChange={onChangeTab} />
        {
          tab == 0 ? (
            <TabContent>
              {tempDataBooking[manageGym].map((data) => (
                <Booking key={data.key}>
                  <Type>{data.type}</Type>
                  <Team>{data.teamName}</Team>
                  <Detail>
                    <Date>{data.bookingDate}</Date>
                    <Pay>결제 금액 : {data.pay.toLocaleString()}원</Pay>
                  </Detail>
                  <Buttons>
                    <ButtonConfirm>승인하기</ButtonConfirm>
                    <ButtonCancel>취소하기</ButtonCancel>
                  </Buttons>
                </Booking>
              ))}
            </TabContent>
          ) : // tab 대관신청현황 작성
          tab == 1 ? (
            <TabContent>
              <TopSection>
                <ContentTitle>정기 일정 관리</ContentTitle>
                <Tabs
                  items={tempDataGymschedule.map((tab) => ({
                    label: tab.name,
                    key: tab.content,
                    children: <TimeSelect2 />,
                  }))}
                />
                <OutlinedButton>저장</OutlinedButton>
              </TopSection>
              <BottomSection>
                <ContentTitle>단기 일정 관리</ContentTitle>
              </BottomSection>
            </TabContent> // tab 일정관리 작성
          ) : (
            <>tab2</>
          ) // tab 체육관 정보 관리 작성
        }
      </RightSection>
    </Container>
  );
};

export default index;

const Container = styled.div`
  max-width: 1180px;
  gap: 32px;
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 50px;
  @media ${({ theme }) => theme.grid.laptop} {
    flex-direction: row;
  }
`;
const ButtonPOP = styled.button`
  font-size: 26px;
  color: gray;
  &:hover {
    opacity: 0.5;
  }
`;
const GymTitle = styled.span`
  font-size: 26px;
  font-weight: 800;
`;
const GymTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  align-items: center;
`;
const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const GymButton = styled.button`
  width: 100%;
`;
const LeftSection = styled.div`
  max-width: 450px;
  width: 40%;
`;
const PhotoWrapper = styled.div`
  @media ${({ theme }) => theme.grid.laptop} {
    display: block;
    width: 100%;
  }
`;
const SelectPhoto = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
const PhotoItem = styled.img`
  width: 23%;
  height: 104px;

  cursor: pointer;
  object-fit: contain;

  &:hover {
    opacity: 0.8;
  }
`;
const PhotoList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightSection = styled.div`
  width: 60%;
`;

const TabContent = styled.div``;
const Booking = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
`;
const Type = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Team = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Date = styled.div`
  font-size: 14px;
  margin-bottom: 3px;
`;
const Pay = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const Detail = styled.div``;
const Buttons = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
const ButtonConfirm = styled.div`
  font-size: 14px;
  padding: 0px 7px;
  color: #3da5f5;
  border: 1px solid #3da5f5;
  text-align: center;
  width: 80px;
  height: 24px;
  border-radius: 2px;
  @media ${({ theme }) => theme.grid.tablet} {
    border-radius: 4px;
    padding: 4px 15px;
    width: 90px;
    height: 32px;
  }
  &:hover {
    background-color: #ecf6fe;
  }
`;
const ButtonCancel = styled.button`
  font-size: 14px;
  padding: 0px 7px;
  border: 1px solid black;
  text-align: center;
  width: 80px;
  height: 24px;
  border-radius: 2px;
  @media ${({ theme }) => theme.grid.tablet} {
    border-radius: 4px;
    padding: 4px 15px;
    width: 90px;
    height: 32px;
  }
  &:hover {
    background-color: #ecf6fe;
  }
`;

const ContentTitle = styled.span`
  font-size: 16px;
`;

const TopSection = styled.div`
  width: 100%;
`;

const BottomSection = styled.div``;
