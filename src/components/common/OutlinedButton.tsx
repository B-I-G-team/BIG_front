import React from 'react';
import styled from 'styled-components';

interface Props {
  children: any;
  color?:
    | 'primary_95'
    | 'primary_85'
    | 'primary_75'
    | 'primary_65'
    | 'primary_55'
    | 'primary_45'
    | 'primary_35'
    | 'primary_25';
}

const OutlinedButton = ({ children, color = 'primary_55' }: Props) => {
  return <ButtonContainer color={color}>{children}</ButtonContainer>;
};

export default OutlinedButton;

const ButtonContainer = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme, color }) => theme.color[color as string]};
  color: ${({ theme, color }) => theme.color[color as string]};
  background-color: white;
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  width: 270px;
  height: 40px;

  border-radius: 4px;

  :hover {
    opacity: 0.8;
  }
`;
