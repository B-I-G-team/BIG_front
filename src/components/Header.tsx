import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';
import Search from './common/Search';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiBell } from 'react-icons/bi';
import { useAtomValue } from 'jotai';
import { userAtom } from '../atoms/common';
import * as api from '../api/auth';

const Header = () => {
  const location = useLocation();
  const user = useAtomValue(userAtom);

  const onClickLogout = () => {
    api.signout();
  };

  if (location.pathname !== '/login' && location.pathname !== '/signup')
    return (
      <Container>
        <ContentWrapper>
          <LeftSection>
            <Link to="/">
              <Logo src={logoImage} />
            </Link>
            {/* 인풋 */}
            <Search />
          </LeftSection>

          <RightSecton>
            {/* 태블릿까지 */}
            <button type="button">
              <SearchIcon size={30} />
            </button>
            <button type="button">
              <HamburgerIcon size={30} />
            </button>

            {/* 랩탑부터 */}
            <NavList>
              <StyledLink to="/gym">체육관등록</StyledLink>
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
        </ContentWrapper>
      </Container>
    );

  return <></>;
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.color.primary_95};
  @media ${({ theme }) => theme.grid.tablet} {
    height: 80px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: ${({ theme }) => theme.font.weight.heading1};
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

const StyledLink = styled(Link)`
  ::after {
    content: '|';
    margin: 0 15px;

    font-size: ${({ theme }) => theme.font.size.body_1};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.black};
  }
`;
