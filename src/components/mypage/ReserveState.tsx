import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';

interface DataProps {
  Data: {
    id: number;
    state: string;
    image: string;
    type: string;
    gymName: string;
    location: string;
    time: string;
    pay: number;
  };
}

const ReserveState = ({ Data }: DataProps) => {
  const Paystring = Data.pay.toLocaleString();
  if (Data.state === WAIT_CONFIRM) {
    return (
      <Container>
        <Pay>결제할 금액 : {Paystring} </Pay>
        <ButtonBox>
          <CancelButton>취소하기</CancelButton>
        </ButtonBox>
      </Container>
    );
  } else if (Data.state === WAIT_PAY) {
    return (
      <Container>
        <Pay>결제할 금액 : {Paystring} </Pay>
        <ButtonBox>
          <Button>결제하기</Button>
          <CancelButton>취소하기</CancelButton>
        </ButtonBox>
      </Container>
    );
  } else if (Data.state === RESERVE) {
    return (
      <Container>
        <Pay>결제 금액 : {Paystring} </Pay>
        <ButtonBox>
          <Tag icon={<CheckCircleOutlined />} color="success">
            예약완료
          </Tag>
        </ButtonBox>
      </Container>
    );
  }
  return null;
};

export default ReserveState;

const Pay = styled.li`
  font-size: 14px;
  font-weight: 700;
  align-self: flex-end;
  @media ${({ theme }) => theme.grid.tablet} {
    font-size: ${({ theme }) => theme.font.size.body_1};
  }
`;
const Button = styled.div`
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

const CancelButton = styled.div`
  padding: 0px 7px;
  color: black;
  border: 1px solid #d9d9d9;
  text-align: center;
  border-radius: 2px;
  width: 80px;
  height: 24px;
  @media ${({ theme }) => theme.grid.tablet} {
    border-radius: 4px;
    padding: 4px 15px;
    width: 90px;
    height: 32px;
  }
  &:hover {
    background-color: #ebebeb;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;

  gap: 4px;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media ${({ theme }) => theme.grid.tablet} {
    width: 50%;
    height: 110px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
