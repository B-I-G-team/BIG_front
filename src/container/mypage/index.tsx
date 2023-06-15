import React, { useEffect, useMemo, useState } from 'react';
import { useMePUTMutation } from 'api/axios-client/Query';
import styled from 'styled-components';
import Reserve from 'components/mypage/Reserve';
import type { RadioChangeEvent } from 'antd';
import type { TabsProps } from 'antd';

import { useMeGETQuery } from 'api/axios-client/Query';
import { Tabs, Radio, Select, Input, Button } from 'antd';
import ReserveStateNotify from 'components/mypage/ReserveStateNotify';
import Swal from 'sweetalert2';
import { Body4 } from 'api/axios-client';
import { useMeGETQueryKey } from 'api/queryKeyHooks';
import { useQueryClient } from '@tanstack/react-query';
import {
  Body1Bold,
  Body1Medium,
  Body2Bold,
  Body2Medium,
  H4,
  H5,
} from 'styles/mixin';
import useWindowSize from 'hooks/common/useWindowSize';
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

  const { width: windowWidth } = useWindowSize();
  const isMobile = useMemo(() => windowWidth <= 400, [windowWidth]);

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [position, setPosition] = useState('');

  const [modify, setModify] = useState(false);
  const [reserveState, setReserveState] = useState(WAIT_CONFIRM);

  useEffect(() => {
    if (user) {
      setHeight(user.height);
      setWeight(user.weight);
      setPosition(user.position);
    }
  }, [user]);

  const { mutate: userModifyMutate } = useMePUTMutation({
    onMutate: () => {
      const oldData = queryClient.getQueryData(meQueryKey);
      queryClient.setQueryData(meQueryKey, {
        ...user,
        height,
        weight,
        position,
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
      new Body4({
        position,
        height,
        weight,
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
        <TitleText>내 정보</TitleText>
        {modify ? (
          <>
            <Button
              onClick={handleSaveButton}
              style={{ margin: 4 }}
              size={isMobile ? 'small' : 'middle'}
            >
              저장
            </Button>
            <Button
              onClick={handleCancelButton}
              style={{ margin: 4 }}
              size={isMobile ? 'small' : 'middle'}
            >
              취소
            </Button>
          </>
        ) : (
          <Button
            onClick={handleModifyButton}
            style={{ margin: 4 }}
            size={isMobile ? 'small' : 'middle'}
          >
            수정
          </Button>
        )}
      </Title>

      <InformationBox>
        <Informations>
          <Information>
            <InformationTitle>이 름</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              <Image src={user.image} />
              {user.name}
            </InformationData>
          </Information>
          <Information>
            <InformationTitle>소 속 팀</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              {modify ? (
                <>
                  <p style={{ marginRight: 17 }}>
                    {user.team.name || '아직 팀이 없습니다.'}
                  </p>
                  {!user.team.name ? (
                    <>
                      <Button
                        style={{ margin: 4 }}
                        size={isMobile ? 'small' : 'middle'}
                      >
                        팀등록
                      </Button>
                      <Button
                        style={{ margin: 4 }}
                        size={isMobile ? 'small' : 'middle'}
                      >
                        팀참가
                      </Button>
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
            <InformationTitle>포 지 션</InformationTitle>
            <Separator>:</Separator>
            <InformationData>
              {modify ? (
                <>
                  <Select
                    style={{ width: 210 }}
                    size={isMobile ? 'small' : 'middle'}
                    onChange={(value) => setPosition(value)}
                    value={position}
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
                <p>{user.position === 'None' ? '미등록' : user.position}</p>
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
                    size={isMobile ? 'small' : 'middle'}
                    value={height}
                    onChange={({ target: { value } }) => {
                      setHeight(Number(value));
                    }}
                    style={{ width: 92, marginRight: 8 }}
                  />
                  /
                  <Input
                    type="number"
                    placeholder="몸무게"
                    size={isMobile ? 'small' : 'middle'}
                    value={weight}
                    onChange={({ target: { value } }) =>
                      setWeight(Number(value))
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

      <ResevationSection>
        <TitleText>예약 정보</TitleText>
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
                    <Radio.Button value={WAIT_CONFIRM}>
                      승인 대기중
                    </Radio.Button>
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
      </ResevationSection>
    </Container>
  );
};
export default Index;

const Container = styled.div`
  padding: 8px;
`;

const Title = styled.div`
  margin: 4px 0 15px 0;

  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.grid.tablet} {
    margin-bottom: 20px;
  }
`;

const TitleText = styled.div`
  ${H5}

  margin-right: 4px;

  @media ${({ theme }) => theme.grid.tablet} {
    ${H4}
    margin-right: 8px;
  }
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
  border-radius: 50px;

  @media ${({ theme }) => theme.grid.tablet} {
    width: 30px;
    height: 30px;
  }
`;

const InformationBox = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Informations = styled.ul`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
`;

const Information = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media ${({ theme }) => theme.grid.tablet} {
    margin-bottom: 25px;
  }
`;

const InformationTitle = styled.div`
  width: 74px;

  ${Body2Bold}
  @media ${({ theme }) => theme.grid.tablet} {
    width: 95px;
    ${Body1Bold}
  }
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

  ${Body2Medium}

  @media ${({ theme }) => theme.grid.tablet} {
    ${Body1Medium}
  }
`;

const SubTab = styled.div`
  display: flex;
  align-items: center;
`;

const ResevationSection = styled.div``;
