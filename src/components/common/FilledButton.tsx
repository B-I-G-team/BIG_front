import React from 'react';
import styled from 'styled-components';

export type CustomColor =
  | 'primary_95'
  | 'primary_85'
  | 'primary_75'
  | 'primary_65'
  | 'primary_55'
  | 'primary_45'
  | 'primary_35'
  | 'primary_25';

interface Props {
  children: any;
  color?: CustomColor;
  onClick?: any;
}

const FilledButton = ({ children, color = 'primary_55', onClick }: Props) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default FilledButton;

const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${({ theme, color }) => theme.color[color as CustomColor]};
  color: white;
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  width: 270px;
  height: 40px;
  border-radius: 4px;

  :hover {
    opacity: 0.8;
  }
`;
