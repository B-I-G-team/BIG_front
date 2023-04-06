/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { useMeQuery } from 'api/axios-client/Query';

interface Props {
  open: boolean;
  closeDrawer: () => void;
}

const Drawer = ({ open, closeDrawer }: Props) => {
  const { data: user } = useMeQuery();

  const logout = () => {
    localStorage.removeItem('access_token');
  };

  const location = useLocation();

  useEffect(() => {
    closeDrawer();
  }, [location]);

  return (
    <>
      <Container open={open}>
        <Wrapper>
          <CloseButton onClick={closeDrawer}>
            <AiOutlineClose />
          </CloseButton>
          <LogoLink to="/">
            <Logo src={logoImage} />
          </LogoLink>
          <LinkItem to="/">픽업 게임</LinkItem>
          <LinkItem to="/team-rental">팀 대관</LinkItem>
          <LinkItem to="/">팀 순위</LinkItem>
          {user ? (
            <>
              <LinkItem to="/mypage">내 정보</LinkItem>
              <LinkItem to="/" onClick={() => logout()}>
                로그아웃
              </LinkItem>
            </>
          ) : (
            <>
              <LinkItem to="/login">로그인</LinkItem>
            </>
          )}
        </Wrapper>
      </Container>
      <Overlay open={open} onClick={closeDrawer} />
    </>
  );
};

export default Drawer;

const Container = styled.div<{ open: boolean }>`
  width: 280px;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 2;

  transform: ${({ open }) => (open ? 'translanteX(0)' : 'translateX(100%)')};
  transition: 200ms;
  @media ${({ theme }) => theme.grid.tablet} {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  left: 0;

  color: ${({ theme }) => theme.color.black};

  z-index: 3;
`;

const LogoLink = styled(Link)`
  margin-top: 25px;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
`;

const LinkItem = styled(Link)`
  width: 100%;
  text-align: center;
  padding: 14px 0;
  font-size: ${({ theme }) => theme.font.size.subtitle_1};
  font-weight: 600;
`;

const Overlay = styled.div<{ open: boolean }>`
  position: absolute;
  left: -3px;
  top: 0;
  background-color: rgba(19, 18, 18, 0.7);
  z-index: 1;
  width: 100%;
  height: 100vh;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: 200ms;

  @media ${({ theme }) => theme.grid.tablet} {
    display: none;
  }
`;
