import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export interface TimeItem {
  key: string;
  available: boolean;
  label: string;
  order: number;
}
interface Props {
  item: TimeItem[];
  pricePerHour: number;
  calcPrice: (length: number) => void;
  firstSelectTime: TimeItem;
  secondSelectTime: TimeItem;

  onClickTime: (item: TimeItem) => void;
  className?: string;
}

const TimeSelect = ({
  item,
  pricePerHour,
  calcPrice,
  firstSelectTime,
  secondSelectTime,

  onClickTime,
  className,
}: Props) => {
  useEffect(() => {
    if (firstSelectTime) {
      if (secondSelectTime)
        calcPrice(secondSelectTime.order - firstSelectTime.order + 1);
      else calcPrice(1);
    } else calcPrice(0);
  }, [calcPrice, secondSelectTime, firstSelectTime]);

  return (
    <TimeList className={className}>
      {item.map((item) => (
        <TimeItemWrapper key={item.key}>
          <SelectBox>
            {item.available ? (
              <Available
                select={
                  firstSelectTime?.order === item.order ||
                  secondSelectTime?.order === item.order ||
                  (firstSelectTime?.order < item.order &&
                    secondSelectTime?.order > item.order)
                }
                onClick={() => onClickTime(item)}
              >
                {(firstSelectTime?.order === item.order ||
                  secondSelectTime?.order === item.order ||
                  (firstSelectTime?.order < item.order &&
                    secondSelectTime?.order > item.order)) && (
                  <AiOutlineCheckCircle color="green" />
                )}
                {pricePerHour.toLocaleString()}
              </Available>
            ) : (
              <SoldOut>판매완료</SoldOut>
            )}
            <Time>{item.label}</Time>
          </SelectBox>
        </TimeItemWrapper>
      ))}
    </TimeList>
  );
};

export default TimeSelect;

const TimeList = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 11px; /* 스크롤바의 너비 */
    height: 11px;
  }
  ::-webkit-scrollbar-thumb {
    height: 11px; /* 스크롤바의 길이 */
    background: #c0c0c0; /* 스크롤바의 색상 */

    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #e6e6e6; /*스크롤바 뒷 배경 색상*/
  }
`;
const TimeItemWrapper = styled.div`
  margin-right: 6px;
`;

const SelectBox = styled.div``;

const Available = styled.div<{ select: boolean }>`
  cursor: pointer;

  height: 48px;
  width: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ select }) => (select ? '#B1B4EB' : '#b1ebe8')};
`;

const SoldOut = styled.div`
  height: 48px;
  width: 90px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #d9d9d9;
  opacity: 0.5;
`;

const Time = styled.div`
  margin-bottom: 4px;
`;
