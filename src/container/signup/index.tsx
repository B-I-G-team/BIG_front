import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';
import FilledButton from 'components/common/FilledButton';
import OutlinedButton from 'components/common/OutlinedButton';
import { FlexAround } from 'components/common/Wrapper';
import * as api from 'api/auth';
import Swal from 'sweetalert2';

interface InputChangeProps {
  target: { value: string };
}

/**
 * 회원가입
 * TODO: 임시로 작성 인증과정 현재 없는데 도입해야할듯
 */
const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [caption, setCaption] = useState('');
  const [caption2, setCaption2] = useState('');
  const [caption3, setCaption3] = useState('');

  const onChangeEmail = ({ target: { value } }: InputChangeProps) => {
    setEmail(value);
    const reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!value) {
      setCaption('');
    } else if (value && !reg.test(value)) {
      setCaption('이메일 형식이 올바르지 않습니다.');
    } else {
      setCaption('확인되었습니다.');
    }
  };

  const onChangePassword = ({ target: { value } }: InputChangeProps) => {
    setPassword(value);

    const reg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (!value) {
      setCaption2('');
    } else if (value && !reg.test(value)) {
      setCaption2('8자 이상의 영문자, 숫자, 특수문자를 사용하세요.');
    } else {
      setCaption2('확인되었습니다.');
    }
  };

  const onChangeConfirm = ({ target: { value } }: InputChangeProps) => {
    setConfirm(value);
    if (!value) {
      setCaption3('');
    } else if (value !== password) {
      setCaption3('비밀번호가 일치하지 않습니다.');
    } else {
      setCaption3('확인되었습니다.');
    }
  };

  const onClickSignup = async () => {
    if (
      caption === '확인되었습니다.' &&
      caption2 === '확인되었습니다.' &&
      caption3 === '확인되었습니다.'
    ) {
      const res = await api.signup(email, password);
      if (typeof res === 'string') {
        setCaption('이미 가입한 이메일이 존재합니다.');
      } else {
        Swal.fire({
          icon: 'success',
          title: '회원가입 성공',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate('/login'));
      }
    } else {
      if (!email) setCaption('필수값입니다.');
      if (!password) setCaption2('필수값입니다.');
      if (!confirm) setCaption3('필수값입니다.');
    }
  };

  return (
    <Container>
      <Link to="/">
        <LogoImage src={logoImage} />
      </Link>
      <Subtitle>회원가입</Subtitle>

      <InputWrapper>
        <EmailInput
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmail}
        />
        <CaptionText check={caption === '확인되었습니다.'}>
          {caption}
        </CaptionText>
      </InputWrapper>

      <InputWrapper>
        <PasswardInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <CaptionText check={caption2 === '확인되었습니다.'}>
          {caption2}
        </CaptionText>
      </InputWrapper>

      <InputWrapper>
        <PasswardInput
          type="password"
          placeholder="비밀번호 재입력"
          value={confirm}
          onChange={onChangeConfirm}
        />
        <CaptionText check={caption3 === '확인되었습니다.'}>
          {caption3}
        </CaptionText>
      </InputWrapper>

      <FilledButton color="primary_25" onClick={onClickSignup}>
        가입하기
      </FilledButton>
      <Wrapper>
        <Text to="/">아이디 찾기</Text>
        <Text to="/">비밀번호 찾기</Text>
      </Wrapper>

      <OutlinedButton color="primary_25" onClick={() => navigate('/login')}>
        로그인 하러가기
      </OutlinedButton>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
`;

const LogoImage = styled.img`
  width: 245px;
`;

const CommonInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
  background-color: #fff;
  width: 245px;
  height: 40px;
  padding: 0 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const EmailInput = styled(CommonInput)``;

const PasswardInput = styled(CommonInput)``;

const Wrapper = styled(FlexAround)`
  width: 245px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Text = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.body_2};
  font-weight: 400;
`;

const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: 600;
  margin-bottom: 24px;
`;

const CaptionText = styled.div<{ check: boolean }>`
  color: ${({ check }) => (check ? 'green' : 'red')};
  font-size: ${({ theme }) => theme.font.size.body_2};
  font-weight: 500;
`;
