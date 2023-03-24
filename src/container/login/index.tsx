import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';

import KaKaoIconImg from 'assets/kakao-icon.png';

const Index = () => {
  return (
    <Container>
      <Link to="/">
        <LogoImage src={logoImage} />
      </Link>

      <Text>
        간편하게 로그인하고
        <br /> 다양한 서비스를 이용해보세요.
      </Text>

      <KaKaoButton href="http://rasp.jaejun.me:8000/auth/kakao">
        <KakaoIcon src={KaKaoIconImg} />
        <KakaoLabel>카카오 로그인</KakaoLabel>
      </KaKaoButton>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 85px;
`;

const LogoImage = styled.img`
  width: 245px;
  margin-bottom: 37px;
`;

const Text = styled.div`
  font-size: 19px;
  font-weight: 800;
  line-height: 32px;

  text-align: center;
  margin-bottom: 37px;
`;

const KaKaoButton = styled.a`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.kakao_container};
  color: ${({ theme }) => theme.color.kakao_label};
  border-radius: 12px;

  width: 300px;
  height: 45px;

  &:hover {
    opacity: 0.8;
  }
`;

const KakaoIcon = styled.img`
  padding: 4px;
`;
const KakaoLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
