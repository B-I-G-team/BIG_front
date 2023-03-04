import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo.png';
import FilledButton from '../../components/common/FilledButton';
import OutlinedButton from '../../components/common/OutlinedButton';
import { FlexAround } from '../../components/common/Wrapper';

const index = () => {
  return (
    <Container>
      <Link to="/">
        <LogoImage src={logoImage} />
      </Link>
      <EmailInput type="email" placeholder="이메일" />
      <PasswardInput type="password" placeholder="비밀번호" />
      <FilledButton color="primary_25">로그인</FilledButton>
      <Wrapper>
        <Text to="/">아이디 찾기</Text>
        <Text to="/">비밀번호 찾기</Text>
      </Wrapper>

      <OutlinedButton color="primary_25">간편 회원가입</OutlinedButton>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 85px;
`;

const LogoImage = styled.img`
  width: 245px;
  margin-bottom: 32px;
`;

const CommonInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
  background-color: #fff;
  width: 245px;
  height: 40px;
  padding: 0 16px;
`;

const EmailInput = styled(CommonInput)`
  margin-bottom: 24px;
`;

const PasswardInput = styled(CommonInput)`
  margin-bottom: 24px;
`;

const Wrapper = styled(FlexAround)`
  width: 245px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Text = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.body_2};
  font-weight: 400;
`;
