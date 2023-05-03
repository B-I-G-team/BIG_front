import React, { useEffect, useState } from 'react';
import { useMePUTMutation } from 'api/axios-client/Query';
import styled from 'styled-components';
import Reserve from 'components/mypage/Reserve';
import type { RadioChangeEvent } from 'antd';
import { Typography } from 'antd';

import { useMeGETQuery } from 'api/axios-client/Query';
import { Tabs, Radio, Select, Input, Button } from 'antd';
import ReserveStateNotify from 'components/mypage/ReserveStateNotify';
import Swal from 'sweetalert2';
import { Body2 } from 'api/axios-client';
import { useMeGETQueryKey } from 'api/queryKeyHooks';
import { useQueryClient } from '@tanstack/react-query';
import { H1, H3, H5 } from 'styles/mixin';
const WAIT_CONFIRM = 'wait_confirm';
const WAIT_PAY = 'wait_pay';
const RESERVE = 'reserve';
const TEAM = 'team-rental';
const PICKUP = 'pickup';
const INDIVIDUAL = 'individual-rental';

interface User {
  id: string;
  image: string;
  name: string;
  height: number;
  weight: number;
  position: string;
  team: {
    name: string;
  };
}

const Index = () => {
  const queryClient = useQueryClient();
  const { meQueryKey } = useMeGETQueryKey();
  const { data: user, isFetching: isFetching } = useMeGETQuery({
    queryKey: meQueryKey,
  }) as {
    data: User;
    isFetching: boolean;
  };

  console.log(Typography);

  const [userHeight, setUserHeight] = useState(0);
  const [userWeight, setUserWeight] = useState(0);
  const [userPosition, setUserPosition] = useState('');

  const [modify, setModify] = useState(false);
  const [reserveState, setReserveState] = useState(WAIT_CONFIRM);

  useEffect(() => {
    if (user) {
      setUserHeight(user.height);
      setUserWeight(user.weight);
      setUserPosition(user.position);
    }
  }, [user]);

  const { mutate: userModifyMutate } = useMePUTMutation({
    onMutate: () => {
      const oldData = queryClient.getQueryData(meQueryKey);
      queryClient.setQueryData(meQueryKey, {
        ...user,
        height: userHeight || user.height,
        weight: userWeight || user.weight,
        position: userPosition || user.position,
      });
      return oldData;
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: '유저 정보 수정 성공',
      });
    },
    onError: (error, variable, oldData) => {
      queryClient.setQueryData(meQueryKey, oldData);
      Swal.fire({
        icon: 'error',
        title: '유저 정보 수정 실패',
      });
    },
  });

  const onChangeReserveState = ({ target: { value } }: RadioChangeEvent) => {
    setReserveState(value);
  };

  const handleSaveButton = () => {
    setModify(false);
    userModifyMutate(
      new Body2({
        position: userPosition || user.position,
        height: userHeight || user.height,
        weight: userWeight || user.weight,
      }),
    );
  };

  const handleModifyButton = () => {
    setModify(true);
  };

  const handleCancelButton = () => {
    setModify(false);
  };

  const menuArr = [
    { name: '픽업게임', content: PICKUP },
    { name: '팀 대관', content: TEAM },
    { name: '개인 대관', content: INDIVIDUAL },
  ];

  if (isFetching) {
    return <>Loading</>;
  }

  return (
    <Container>
      <Title>
        <Title>내 정보</Title>
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
              <Image src={user.image} />
              {user.name}
            </InformationData>
          </Information>
          <Information>
            <InformationTitle>소속팀</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              {modify ? (
                <>
                  <p style={{ marginRight: 17 }}>
                    {user.team.name || '아직 팀이 없습니다.'}
                  </p>
                  {!user.team.name ? (
                    <>
                      <Button style={{ margin: 4 }}>팀등록</Button>
                      <Button style={{ margin: 4 }}>팀참가</Button>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <p style={{ marginRight: 17 }}>
                  {user.team.name || '아직 팀이 없습니다.'}
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
                    style={{ width: 210 }}
                    onChange={(value) => setUserPosition(value)}
                    value={userPosition}
                    options={[
                      { value: '포인트가드', label: '포인트가드' },
                      { value: '슈팅가드', label: '슈팅가드' },
                      { value: '스몰포워드', label: '스몰포워드' },
                      { value: '파워포워드', label: '파워포워드' },
                      { value: '센터', label: '센터' },
                      { value: undefined, label: 'None' },
                    ]}
                  />
                </>
              ) : (
                <p>{user.position}</p>
              )}
            </InformationData>
          </Information>
          <Information>
            <InformationTitle>키 / 몸무게</InformationTitle>
            <Separator>:</Separator>

            <InformationData>
              {modify ? (
                <>
                  <Input
                    type="number"
                    placeholder="키"
                    value={userHeight}
                    onChange={({ target: { value } }) => {
                      setUserHeight(Number(value));
                    }}
                    style={{ width: 92, marginRight: 8 }}
                  />
                  /
                  <Input
                    type="number"
                    placeholder="몸무게"
                    value={userWeight}
                    onChange={({ target: { value } }) =>
                      setUserWeight(Number(value))
                    }
                    style={{ width: 92, marginLeft: 8 }}
                  />
                </>
              ) : (
                <>
                  {user.height || '미등록'} {' / '}
                  {user.weight || '미등록'}
                </>
              )}
            </InformationData>
          </Information>
        </Informations>
      </InformationBox>

      <Title>진행중인 예약정보</Title>
      <Tabs
        items={menuArr.map((tab) => ({
          label: tab.name,
          key: tab.content,
          children: (
            <>
              <SubTab>
                <Radio.Group
                  value={reserveState}
                  onChange={onChangeReserveState}
                  style={{ marginBottom: 16 }}
                >
                  <Radio.Button value={WAIT_CONFIRM}>승인 대기중</Radio.Button>
                  <Radio.Button value={WAIT_PAY}>결제 대기중</Radio.Button>
                  <Radio.Button value={RESERVE}>예약 완료</Radio.Button>
                </Radio.Group>
                <ReserveStateNotify reserveState={reserveState} />
              </SubTab>
              <Reserve content={tab.content} subData={reserveState} />
            </>
          ),
        }))}
      />
    </Container>
  );
};
export default Index;

const Container = styled.div`
  padding: 8px;
`;

const Title = styled.div`
  margin: 12px 0;

  display: flex;
  align-items: center;

  ${H5}

  @media ${({ theme }) => theme.grid.tablet} {
    ${H3}
  }
`;

const TitleText = styled.div``;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 11px;
  border-radius: 50px;
`;

const InformationBox = styled.div`
  display: flex;
  @media ${({ theme }) => theme.grid.tablet} {
    justify-content: flex-start;
  }
  margin-bottom: 34px;
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
  width: 30px;
  @media ${({ theme }) => theme.grid.tablet} {
    width: 90px;
  }
`;

const InformationData = styled.div`
  display: flex;
  align-items: center;
`;

const SubTab = styled.div`
  display: flex;
  align-items: center;
`;
