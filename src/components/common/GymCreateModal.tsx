import { Button, Checkbox, Input, Modal, Select } from 'antd';
import {
  Content,
  FooterContainer,
  StyledModal,
  Title,
} from 'components/styled/modal-common';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexColumnCenterStart, FlexStart } from './Wrapper';

const makeTimeOption = () => {
  const options = [];
  let hour = 0;
  let minute = 0;
  while (hour !== 24) {
    const hourString = String(hour).padStart(2, '0');
    const minuteString = String(minute).padStart(2, '0');
    options.push({
      value: `${hourString}:${minuteString}`,
      label: `${hourString}:${minuteString}`,
    });

    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour += 1;
    }
  }

  return options;
};

const timeOption = makeTimeOption();

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GymCreateModal = ({ open, setOpen }: Props) => {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [openTime, setOpenTime] = useState<string>();
  const [closeTime, setCloseTime] = useState<string>();
  const [defaultPrice, setDefaultPrice] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSelectDisable, setTimeSelectDisable] = useState(false);

  const createGym = () => {};

  return (
    <StyledModal
      open={open}
      onCancel={() => setOpen(false)}
      title={<Title>체육관 등록</Title>}
      footer={
        <FooterContainer>
          <Button type="primary" onClick={() => createGym()}>
            생성하기
          </Button>
          <Button onClick={() => setOpen(false)}>취소</Button>
        </FooterContainer>
      }
    >
      <Content>
        <Wrapper>
          <Text>체육관 이름</Text>
          <StyledInput
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </Wrapper>

        <Wrapper>
          <Text>전화번호</Text>
          <StyledInput
            value={phone}
            onChange={({ target: { value } }) => setPhone(value)}
          />
        </Wrapper>

        <Wrapper>
          <Text>주소1</Text>
          <StyledInput
            value={address1}
            onChange={({ target: { value } }) => setAddress1(value)}
          />
        </Wrapper>

        <Wrapper>
          <Text>주소2</Text>
          <StyledInput
            value={address2}
            onChange={({ target: { value } }) => setAddress2(value)}
          />
        </Wrapper>

        <Wrapper>
          <Text>대관운영시간</Text>
          <FlexColumnCenterStart>
            <Checkbox
              onChange={({ target: { checked } }) => {
                if (checked) {
                  setTimeSelectDisable(true);
                } else {
                  setTimeSelectDisable(false);
                }
              }}
            >
              24시간 운영
            </Checkbox>
            <FlexStart>
              <Select
                style={{ width: 120 }}
                placeholder="시간선택"
                value={openTime}
                onChange={(value) => {
                  setOpenTime(value);
                }}
                options={timeOption}
                disabled={timeSelectDisable}
              />
              <StyledSpan>부터</StyledSpan>
              <Select
                style={{ width: 120 }}
                placeholder="시간선택"
                value={closeTime}
                onChange={(value) => {
                  setCloseTime(value);
                }}
                options={timeOption}
                disabled={timeSelectDisable}
              />
              <StyledSpan>까지</StyledSpan>
            </FlexStart>
          </FlexColumnCenterStart>
        </Wrapper>

        <Wrapper>
          <Text>시간당 가격</Text>
          <StyledInput
            value={defaultPrice}
            type="number"
            onChange={({ target: { value } }) => setDefaultPrice(Number(value))}
          />
        </Wrapper>
      </Content>
    </StyledModal>
  );
};
export default GymCreateModal;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 30px;
`;

const Text = styled.div`
  width: 110px;
`;

const StyledInput = styled(Input)`
  flex: 1;
`;

const StyledSpan = styled.span`
  padding: 0 10px;
`;
