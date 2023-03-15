import React from 'react';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <Container>
      <SearchIcon size={20} />
      <StyledInput placeholder="체육관, 업체 검색" />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: none;
  @media ${({ theme }) => theme.grid.laptop} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 4px;
    width: 300px;
    height: 40px;
    margin-left: 20px;
  }
`;

const StyledInput = styled.input`
  width: 80%;
`;

const SearchIcon = styled(CiSearch)`
  padding: 10px;
  color: ${({ theme }) => theme.color.border};
`;
