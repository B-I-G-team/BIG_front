import React from 'react';
import styled from 'styled-components';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';

interface Props {
  data: string;
}

const ReserveStateNotify = ({ data }: Props) => {
  if (data === WAIT_CONFIRM) {
    return <Notify>😊 사장님의 승인요청을 기다리고 있습니다.</Notify>;
  } else if (data === WAIT_PAY) {
    return <Notify>😊 결제가 완료되면 예약이 완료됩니다.</Notify>;
  }
  return <></>;
};

export default ReserveStateNotify;

const Notify = styled.p`
  @media ${({ theme }) => theme.grid.tablet} {
    margin-left: 48px;
    font-size: ${({ theme }) => theme.font.size.subtitle_2};
    font-weight: 500;
  }
  display: none;
`;
