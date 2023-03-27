import React from 'react';
import styled from 'styled-components';

interface Props {
  placeholder?: string;
  className?: string;
}

const Input = ({ placeholder, className }: Props) => {
  return (
    <Container className={className}>
      <StyledInput placeholder={placeholder} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
  background-color: #fff;

  padding: 0 10px;
`;
