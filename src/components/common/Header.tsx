import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from 'assets/logo.png';
import Search from 'components/common/Search';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiBell } from 'react-icons/bi';
import { useAtomValue } from 'jotai';
import { userAtom } from 'atoms/common';
import * as api from 'api/auth';
import Drawer from './Drawer';

const Header = () => {
  const location = useLocation();
  const user = useAtomValue(userAtom);
  const [open, setOpen] = useState(false);

  const onClickLogout = () => {
    console.log();
    api.signout();
  };

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
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
            <LeftItem to="/">팀대관</LeftItem>
            <LeftItem to="/">개인대관</LeftItem>
            <LeftItem to="/">팀 순위</LeftItem>
            <LeftItem to="/">커뮤니티</LeftItem>
            <Search />

            {/* 인풋 */}
          </LeftSection>

          <RightSecton>
            {/* 태블릿까지 */}
            <button type="button">
              <SearchIcon size={30} />
            </button>
            <button type="button" onClick={openDrawer}>
              <HamburgerIcon size={30} />
            </button>

            {/* 랩탑부터 */}
            <NavList>
              <StyledLink to="/gym">내 정보</StyledLink>
              {user?.email ? (
                <StyledLink to="/" onClick={onClickLogout}>
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
  @media ${({ theme }) => theme.grid.tablet} {
    height: 80px;
  }
`;

const LogoLink = styled(Link)`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;

  @media ${({ theme }) => theme.grid.tablet} {
    width: 150px;
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
