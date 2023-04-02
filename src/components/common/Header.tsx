import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';
import Search from 'components/common/Search';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiBell } from 'react-icons/bi';

import Drawer from './Drawer';
import { useMeQuery } from 'api/axios-client/Query';

const Header = () => {
  const location = useLocation();
  const { data: user } = useMeQuery();

  const [open, setOpen] = useState(false);

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
            <LeftItem to="/">개인대관</LeftItem>
            <LeftItem to="/">팀 순위</LeftItem>
            <LeftItem to="/">커뮤니티</LeftItem>
            <Search />

            {/* 인풋 */}
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
            <NavList>
              <StyledLink to="/gym">내 정보</StyledLink>
              {user ? (
                <StyledLink to="/" onClick={() => logout()}>
                  로그아웃
                </StyledLink>
              ) : (
                <StyledLink to="/login">로그인</StyledLink>
              )}
              <button type="button">
                <BiBell size={30} />
              </button>
            </NavList>
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

const NavList = styled.div`
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
  ::after {
    content: '|';
    margin: 0 15px;

    font-size: ${({ theme }) => theme.font.size.body_1};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.black};
  }
`;
