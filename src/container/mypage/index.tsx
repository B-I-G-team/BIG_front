import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { User } from 'types/common';
import Reserve from 'components/mypage/Reserve';
import type { RadioChangeEvent } from 'antd';
import { useMeQuery } from 'api/axios-client/Query';
import { Tabs, Radio, Select, Input, Button } from 'antd';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';
const TEAM = 'team-rental';
const PICKUP = 'pickup';
const INDIVIDUAL = 'individual-rental';

const Notification = ({ Data }: any) => {
  if (Data === WAIT_CONFIRM) {
    return <Notify>😊 사장님의 승인요청을 기다리고 있습니다.</Notify>;
  } else if (Data === WAIT_PAY) {
    return <Notify>😊 결제가 완료되면 예약이 완료됩니다.</Notify>;
  } else return <Notify></Notify>;
};
const Index = () => {
  const { data: user } = useMeQuery() as {
    data: User;
  };

  const [modify, setModify] = useState(false);
  let addInfoUser = {
    ...user,
    team: '스타트',
    position: '센터',
    height: 190,
    weight: 88,
  };

  const tempUser = {
    ...addInfoUser,
  };
  const [state, setState] = useState(WAIT_CONFIRM);
  const onChange = (e: RadioChangeEvent) => {
    setState(e.target.value);
  };
  const handleChangePosition = (value: string) => {
    addInfoUser.position = value;
  };
  const handleChangeHeight = (e: any) => {
    addInfoUser.height = e.target.value;
  };
  const handleChangeWeight = (e: any) => {
    addInfoUser.weight = e.target.value;
  };

  const handleSaveButton = () => {
    setModify(false);
  };

  const handleModifyButton = () => {
    setModify(true);
  };
  const handleCancelButton = () => {
    addInfoUser = tempUser;
    setModify(false);
  };
  const menuArr = [
    { name: '픽업게임', content: PICKUP },
    { name: '팀 대관', content: TEAM },
    { name: '개인 대관', content: INDIVIDUAL },
  ];

  return (
    <Container>
      <Title>
        <p style={{ marginRight: 17 }}>내 정보</p>
        {modify ? (
          <>
            <Button onClick={handleSaveButton} style={{ margin: 4 }}>
              저장
            </Button>
            <Button onClick={handleCancelButton} style={{ margin: 4 }}>
              취소
            </Button>
          </>
        ) : (
          <Button onClick={handleModifyButton} style={{ margin: 4 }}>
            수정
          </Button>
        )}
      </Title>

      <InformationBox>
        <Informations>
          <Information>
            <InformationTitle>이름</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              <Image src={addInfoUser.image} />
              {addInfoUser.name}
            </InformationData>
          </Information>
          <Information>
            <InformationTitle>소속팀</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              {modify ? (
                <>
                  <p style={{ marginRight: 17 }}>
                    {addInfoUser.team || '아직 팀이 없습니다.'}
                  </p>
                  <Button style={{ margin: 4 }}>팀등록</Button>
                  <Button style={{ margin: 4 }}>팀참가</Button>
                </>
              ) : (
                <p style={{ marginRight: 17 }}>
                  {addInfoUser.team || '아직 팀이 없습니다.'}
                </p>
              )}
            </InformationData>
          </Information>
          <Information>
            <InformationTitle>포지션</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              {modify ? (
                <>
                  <Select
                    defaultValue={addInfoUser.position || 'None'}
                    style={{ width: 210 }}
                    onChange={handleChangePosition}
                    options={[
                      { value: '포인트가드', label: '포인트가드' },
                      { value: '슈팅가드', label: '슈팅가드' },
                      { value: '스몰포워드', label: '스몰포워드' },
                      { value: '파워포워드', label: '파워포워드' },
                      { value: '센터', label: '센터' },
                      { value: 'None', label: 'None' },
                    ]}
                  />
                </>
              ) : (
                <p>{addInfoUser.position}</p>
              )}
            </InformationData>
          </Information>
          <Information>
            <InformationTitle>이름</InformationTitle>
            <Separator>:</Separator>

            <InformationData>
              {modify ? (
                <>
                  <Input
                    onChange={handleChangeHeight}
                    placeholder="키"
                    style={{ width: 92, marginRight: 8 }}
                  />{' '}
                  /{' '}
                  <Input
                    onChange={handleChangeWeight}
                    placeholder="몸무게"
                    style={{ width: 92, marginLeft: 8 }}
                  />
                </>
              ) : (
                <>
                  {addInfoUser.height || '미등록'} /{' '}
                  {addInfoUser.weight || '미등록'}
                </>
              )}
            </InformationData>
          </Information>
        </Informations>
      </InformationBox>

      <Title>진행중인 예약정보</Title>
      <Tabs
        items={menuArr.map((tab, index) => {
          const id = String(index + 1);
          return {
            label: tab.name,
            key: id,
            children: (
              <>
                <SubTab>
                  <Radio.Group
                    value={state}
                    onChange={onChange}
                    style={{ marginBottom: 16 }}
                  >
                    <Radio.Button value={WAIT_CONFIRM}>
                      승인 대기중
                    </Radio.Button>
                    <Radio.Button value={WAIT_PAY}>결제 대기중</Radio.Button>
                    <Radio.Button value={RESERVE}>예약 완료</Radio.Button>
                  </Radio.Group>
                  <Notification Data={state} />
                </SubTab>
                <Reserve Data={tab.content} subData={state}></Reserve>
              </>
            ),
          };
        })}
      />
    </Container>
  );
};

export default Index;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 11px;
  border-radius: 50px;
`;
const Container = styled.div`
  height: 150vh;
`;
const InformationBox = styled.div`
  display: flex;
  @media ${({ theme }) => theme.grid.tablet} {
    justify-content: flex-start;
  }
  margin-bottom: 34px;

  .unactive {
    display: none;
  }

  .active {
    display: flex;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_4};
  font-weight: 700;
  padding: 0px;
  margin-bottom: 20px;
  margin-top: 34px;
  display: flex;
  align-items: center;
`;

const Informations = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
  align-items: flex-start;
`;

const Information = styled.li`
  padding: 10px;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: 700;
  align-items: center;
  height: 32px;
  margin-bottom: 20px;
`;
const InformationTitle = styled.div`
  width: 92px;
`;
const Separator = styled.div`
  width: 90px;
`;
const InformationData = styled.div`
  display: flex;
  align-items: center;
`;

const Notify = styled.p`
  @media ${({ theme }) => theme.grid.tablet} {
    margin-left: 48px;
    font-size: ${({ theme }) => theme.font.size.subtitle_2};
    font-weight: 500;
  }
  display: none;
`;
const SubTab = styled.div`
  display: flex;
  align-items: center;
`;
