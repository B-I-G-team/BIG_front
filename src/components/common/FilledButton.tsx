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
  | 'primary_25'
  | 'blue';

type CustomSize = 'fit-content' | 'xl' | 'lg' | 'md' | 'sm';

interface Props {
  children: any;
  color?: CustomColor;
  onClick?: any;
  size?: CustomSize;
}

const customWidth = (size: CustomSize) => {
  switch (size) {
    case 'fit-content':
      return '100%';
    case 'xl':
      return '330px';
    case 'lg':
      return '300px';
    case 'md':
      return '270px';
    case 'sm':
      return '240px';
    default:
      return '270px';
  }
};

const customHeight = (size: CustomSize) => {
  switch (size) {
    case 'fit-content':
      return '550px';
    case 'xl':
      return '550px';
    case 'lg':
      return '500px';
    case 'md':
      return '300px';
    case 'sm':
      return '250px';
    default:
      return '200px';
  }
};

const FilledButton = ({
  children,
  color = 'primary_55',
  onClick,
  size,
}: Props) => {
  return (
    <ButtonContainer color={color} onClick={onClick} size={size as CustomSize}>
      {children}
    </ButtonContainer>
  );
};

export default FilledButton;

const ButtonContainer = styled.button<{ size: CustomSize }>`
  cursor: pointer;
  background-color: ${({ theme, color }) => theme.color[color as CustomColor]};
  color: white;
  font-size: ${({ theme }) => theme.font.size.body_1};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  width: ${({ size }) => customWidth(size)};
  height: ${({ size }) => customHeight(size)};

  height: 40px;
  border-radius: 4px;

  :hover {
    opacity: 0.8;
  }
`;
