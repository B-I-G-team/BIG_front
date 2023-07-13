import React from 'react';
import { Button } from 'antd';
import styled, { css } from 'styled-components';
import TimeButton from './TimeButton';
interface timeButton {
  time: string;
  state: string;
  innerText: string;
}
const createTimeArray = (
  openTime: string,
  closedTime: string,
  unusableTime: number[],
) => {
  const [openHour, openMinute] = openTime.split(':');
  const [closeHour, closeMinute] = closedTime.split(':');
  const timeArray = [];
  let count = 0;
  for (let i = +openHour; i <= +closeHour; i++) {
    count++;
    let timeItem = {
      key: count,
      time: `${String(i).padStart(2, '0')}:${openMinute}`,
      state: 'available',
      innerText: '대관가능',
    };
    for (let j = 0; j <= unusableTime.length; j++) {
      if (i == unusableTime[j]) {
        timeItem = {
          ...timeItem,
          state: 'unuseable',
          innerText: '대관불가',
        };
      }
    }
    timeArray.push(timeItem);
  }
  return timeArray;
};
const TimeSelect2 = () => {
  const times = createTimeArray('09:00', '22:00', [10, 11, 12]);
  return (
    <TimeSelectWrapper>
      {times.map((data) => (
        <TimeButtonWrapper key={data.key}>
          <TimeButton variant={data.state}>{data.innerText}</TimeButton>
          <TimeText>{data.time}</TimeText>
        </TimeButtonWrapper>
      ))}
    </TimeSelectWrapper>
  );
};

export default TimeSelect2;
const TimeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TimeSelectWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }
  ::-webkit-scrollbar-thumb {
    height: 11px;
    background: #c0c0c0;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #e6e6e6;
  }
`;
const TimeText = styled.span``;
