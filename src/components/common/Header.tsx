import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';
import { blue } from '@ant-design/colors';

import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiBell } from 'react-icons/bi';

import Drawer from './Drawer';
import { useMeGETQuery } from 'api/axios-client/Query';
import { Button, Input, Popover } from 'antd';
import { useMeGETQueryKey } from 'api/queryKeyHooks';

const { Search } = Input;

const Header = () => {
  const location = useLocation();
  const { meQueryKey } = useMeGETQueryKey();
  const { data: user } = useMeGETQuery({
    queryKey: meQueryKey,
  });

  const [open, setOpen] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
  };

  if (location.pathname !== '/login' && location.pathname !== '/signup')
    return (
      <>
        <Container>
          <LeftSection>
            <LogoLink to="/">
              <Logo src={logoImage} />
            </LogoLink>
            <LeftItem to="/">픽업게임</LeftItem>
            <LeftItem to="/team-rental">팀대관</LeftItem>
            <LeftItem to="/team-rank">팀 순위</LeftItem>
          </LeftSection>
          <RightSecton>
            {/* 태블릿까지 */}
            <button type="button">
              <SearchIcon size={24} />
            </button>
            <button type="button" onClick={openDrawer}>
              <HamburgerIcon size={24} />
            </button>

            {/* 랩탑부터 */}
            <RightContents>
              <Search placeholder="체육관 업체 검색" style={{ width: 350 }} />
              {user ? (
                <UserIcons>
                  <button type="button" style={{ marginRight: '10px' }}>
                    <BiBell size={24} />
                  </button>
                  <Popover
                    content={
                      <PopOverContent>
                        <StyledLink
                          to="/mypage"
                          onClick={() => {
                            setPopOverOpen(false);
                          }}
                        >
                          내 정보
                        </StyledLink>
                        <button
                          type="button"
                          style={{ padding: 0 }}
                          onClick={() => {
                            logout();
                            setPopOverOpen(false);
                          }}
                        >
                          로그아웃
                        </button>
                      </PopOverContent>
                    }
                    trigger="click"
                    open={popOverOpen}
                    onOpenChange={(visible) => {
                      setPopOverOpen(visible);
                    }}
                  >
                    <button type="button">
                      <Profile src={user.image} popOverOpen={popOverOpen} />
                    </button>
                  </Popover>
                </UserIcons>
              ) : (
                <LoginLink to="/login">로그인</LoginLink>
              )}
              <Button type="primary">체육관 등록하기</Button>
            </RightContents>
          </RightSecton>
        </Container>

        <Drawer open={open} closeDrawer={closeDrawer} />
      </>
    );

  return <></>;
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  @media ${({ theme }) => theme.grid.tablet} {
    height: 60px;
  }
`;

const LogoLink = styled(Link)`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 70px;
  height: auto;

  @media ${({ theme }) => theme.grid.tablet} {
    width: 95px;
  }
`;

const RightSecton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(CiSearch)`
  @media ${({ theme }) => theme.grid.tablet} {
    display: none;
  }
`;

const HamburgerIcon = styled(RxHamburgerMenu)`
  @media ${({ theme }) => theme.grid.tablet} {
    display: none;
  }
`;

const RightContents = styled.div`
  display: none;
  @media ${({ theme }) => theme.grid.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LeftItem = styled(Link)`
  display: none;

  @media ${({ theme }) => theme.grid.tablet} {
    display: block;
    font-size: ${({ theme }) => theme.font.size.body_1};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.black};

    padding: 0 20px;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 4px;
`;

const Profile = styled.img<{ popOverOpen: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  border: 2px solid ${({ popOverOpen }) => (popOverOpen ? blue[4] : 'white')};

  transition: 200ms;
`;

const UserIcons = styled.div`
  margin: 0 20px;
`;

const PopOverContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
`;

const LoginLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.black};

  padding: 0 20px;
`;
