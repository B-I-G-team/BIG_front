import React, { useEffect, useMemo, useState } from 'react';
import gymImage1 from 'assets/gym1.jpeg';
import gymImage2 from 'assets/gym2.jpeg';
import gymImage3 from 'assets/gym3.jpeg';
import gymImage4 from 'assets/gym4.jpeg';
import Slide from 'components/Slide';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

import locale from 'antd/locale/ko_KR';

import FilledButton from 'components/common/FilledButton';
import TimeSelect, { TimeItem } from 'components/common/TimeSelect';
import Input from 'components/common/Input';
import {
  useBookingsAllQuery,
  useBookingsMutation,
  useMeGETQuery,
} from 'api/axios-client/Query';
import { Body } from 'api/axios-client';
import { ConfigProvider, DatePicker } from 'antd';
import useWindowSize from 'hooks/common/useWindowSize';
import { useMeGETQueryKey } from 'api/queryKeyHooks';
import Swal from 'sweetalert2';

const tempData = {
  id: 1,
  images: [gymImage1, gymImage2, gymImage3, gymImage4],
  name: '사하 인피니티 스포츠',
  address:
    '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
  phone: '010-1234-5678',
  pricePerHour: 68000,
  openTime: '08:00',
  closedTime: '20:00',
};

const createTimeArray = (openTime: string, closedTime: string) => {
  const [openHour, openMinute] = openTime.split(':');
  const [closeHour, closeMinute] = closedTime.split(':');
  const timeArray = [];
  let count = 0;
  for (let i = +openHour; i <= +closeHour; i++) {
    count++;
    const timeItem = {
      order: count,
      key: `${String(i).padStart(2, '0')}:${openMinute}`,
      label: `${String(i).padStart(2, '0')}:${closeMinute}`,
      available: true,
    };
    timeArray.push(timeItem);
  }
  return timeArray;
};

const plusOneHourString = (timeStr: string) => {
  const [hour, minute] = timeStr.split(':');
  return `${String(Number(hour) + 1).padStart(2, '0')}:${minute}`;
};

const TeamRentalDetail = ({ id }: { id: string }) => {
  const { name, address, phone, pricePerHour, openTime, closedTime } = tempData;
  const { meQueryKey } = useMeGETQueryKey();
  const { data: user } = useMeGETQuery({
    queryKey: meQueryKey,
  });

  const [bookingDate, setBookingDate] = useState<string>();

  const [price, setPrice] = useState(0);
  const [selectPhoto, setSelectPhoto] = useState(tempData.images[0]);
  const [usingTimeArr, setUsingTimeArr] = useState<string[]>([]);
  const { data } = useBookingsAllQuery(
    {
      gymID: 'clh1kt9qg0000ovellhmb1b46',
      firstTime: `${bookingDate}T00:00:00.000z`,
      lastTime: `${bookingDate}T23:59:00.000z`,
    },
    {
      enabled: !!bookingDate,
    },
  );

  /**
   * 시작시간부터 끝시작까지 사용중인 시간대 배열로 변환해주는 함수
   *
   * @param startTime '2023-05-17T12:00:00.000Z' 형태의 string
   * @param endTime  '2023-05-17T15:00:00.000Z' 형태의 string
   * @return ['12:00', '13:00', '14:00'] 형태의 Array
   */
  const func = (startTime: Date, endTime: Date) => {
    console.log(startTime.toDateString());
    console.log(endTime.toDateString());
    const startHour = startTime.getHours();
    const endHour = endTime.getHours();
    // console.log('startHour', startHour);
    // console.log('endHour', endHour);
    const resultArr: any = [];
    // for (let i = startHour; i < endHour; i++) {
    //   resultArr.push(`${String(i).padStart(2, '0')}:00`);
    // }

    return resultArr;
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      data.forEach((item) => {
        setUsingTimeArr((prev) => {
          const set = new Set([...prev, ...func(item.startTime, item.endTime)]);

          return Array.from(set);
        });
      });
    }
  }, [data]);

  useEffect(() => {
    // console.log('data', data);
    // console.log(usingTimeArr);
  }, [usingTimeArr]);

  const { mutate } = useBookingsMutation({
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: '체육관 대관 신청 완료',
      });

      setBookingDate(undefined);
      setStartTime(undefined);
      setEndTime(undefined);
    },
  });

  const { width: windowWidth } = useWindowSize();
  const isMobile = useMemo(() => windowWidth <= 400, [windowWidth]);

  const [startTime, setStartTime] = useState<TimeItem>();
  const [endTime, setEndTime] = useState<TimeItem>();
  const [timeArray, setTimeArray] = useState<any[]>([]);

  const onClickTime = (timeItem: TimeItem) => {
    if (!startTime || startTime?.order > timeItem.order) {
      setStartTime(timeItem);
    } else if (startTime.order === timeItem.order) {
      setStartTime(undefined);
      setEndTime(undefined);
    } else {
      setEndTime(timeItem);
    }

    if (endTime?.order === timeItem.order) {
      setEndTime(undefined);
    }
  };

  const calcPrice = (length: number) => {
    setPrice(length * pricePerHour);
  };

  const onSelectPhoto = (image: string) => {
    setSelectPhoto(image);
  };

  const onClickBooking = () => {
    if (bookingDate && startTime && endTime && user) {
      mutate(
        new Body({
          gymID: 'clh1kt9qg0000ovellhmb1b46',
          teamID: user.team.id,
          startTime: new Date(
            `${bookingDate}T${startTime.label}:00.000`,
          ).toISOString(),
          endTime: new Date(
            `${bookingDate}T${startTime.label}:00.000`,
          ).toISOString(),
        }),
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: '정보를 모두 선택해주세요.',
      });
    }
  };

  useEffect(() => {
    setTimeArray(createTimeArray(openTime, closedTime));
  }, []);

  return (
    <Container>
      <SlideWrapper>
        <Slide
          data={tempData.images.map((image, idx) => ({ id: idx, image }))}
          autoPlay={false}
        />
      </SlideWrapper>

      <PhotoWrapper>
        <SelectPhoto src={selectPhoto} />
        <PhotoList>
          {tempData.images.map((image, idx) => (
            <PhotoItem
              key={idx}
              src={image}
              onClick={() => onSelectPhoto(image)}
            />
          ))}
        </PhotoList>
      </PhotoWrapper>

      <ContentWrapper>
        <Title>{name}</Title>
        <Address>{address}</Address>
        <Phone>{phone}</Phone>
        <ConfigProvider locale={locale}>
          <DatePicker
            style={{ width: '100%' }}
            size={isMobile ? 'middle' : 'large'}
            onChange={(date, dateString) => {
              setBookingDate(dateString);
            }}
          />
        </ConfigProvider>

        <StyledTimeSelect
          item={timeArray}
          pricePerHour={pricePerHour}
          calcPrice={calcPrice}
          startTime={startTime as TimeItem}
          endTime={endTime as TimeItem}
          onClickTime={onClickTime}
        />

        <Price>{`₩ ${price.toLocaleString()}`}</Price>
        <StyledInput placeholder="체육관 사장님께 요청드릴 메시지" />
        <FilledButton color="blue" size="fit-content" onClick={onClickBooking}>
          예약하기
        </FilledButton>
      </ContentWrapper>
    </Container>
  );
};

export default TeamRentalDetail;

const Container = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.grid.laptop} {
    display: flex;
    justify-content: space-between;
  }
`;

const SlideWrapper = styled.div`
  @media ${({ theme }) => theme.grid.laptop} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 8px;
  @media ${({ theme }) => theme.grid.laptop} {
    width: 47%;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: 700;
  margin-bottom: 4px;

  @media ${({ theme }) => theme.grid.laptop} {
    font-size: ${({ theme }) => theme.font.size.heading_4};
    margin-bottom: 32px;
  }
`;

const Address = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 400;
  margin-bottom: 14px;

  @media ${({ theme }) => theme.grid.laptop} {
    font-size: ${({ theme }) => theme.font.size.subtitle_1};
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const Phone = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle_2};
  font-weight: 400;
  margin-bottom: 14px;

  @media ${({ theme }) => theme.grid.laptop} {
    font-size: ${({ theme }) => theme.font.size.subtitle_1};
    font-weight: 600;
    margin-bottom: 42px;
  }
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_5};
  font-weight: 700;

  text-align: end;

  margin-top: 14px;
  margin-bottom: 14px;

  @media ${({ theme }) => theme.grid.laptop} {
    text-align: start;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme.color.border};
  color: black;
  padding: 10px 16px;
`;

const PhotoWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.grid.laptop} {
    display: block;
    width: 47%;
  }
`;

const PhotoItem = styled.img`
  width: 130px;
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
const SelectPhoto = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const StyledInput = styled(Input)`
  margin-bottom: 17px;

  @media ${({ theme }) => theme.grid.laptop} {
    margin-bottom: 30px;
  }
`;

const StyledTimeSelect = styled(TimeSelect)`
  margin-top: 14px;

  @media ${({ theme }) => theme.grid.laptop} {
    margin-top: 30px;
  }
`;
