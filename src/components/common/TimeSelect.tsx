import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface Props {
  item: {
    key: string;
    available: boolean;
    label: string;
  }[];
  pricePerHour: number;
  calcPrice: (length: number) => void;
  className?: string;
}

const TimeSelect = ({ item, pricePerHour, calcPrice, className }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onClickTime = (key: string) => {
    setSelected((prev) => {
      if (prev.includes(key)) return prev.filter((value) => value !== key);
      return [...prev, key];
    });
  };

  useEffect(() => {
    calcPrice(selected.length);
  }, [calcPrice, selected]);

  return (
    <TimeList className={className}>
      {item.map((item) => (
        <TimeItem key={item.key}>
          <SelectBox>
            {item.available ? (
              <Available
                select={selected.includes(item.key)}
                onClick={() => onClickTime(item.key)}
              >
                {selected.includes(item.key) && (
                  <AiOutlineCheckCircle color="green" />
                )}
                {pricePerHour.toLocaleString()}
              </Available>
            ) : (
              <SoldOut>판매완료</SoldOut>
            )}
            <Time>{item.label}</Time>
          </SelectBox>
        </TimeItem>
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
const TimeItem = styled.div`
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
