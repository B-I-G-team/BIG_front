import React, { useState, ChangeEvent, useEffect } from 'react';
import styled, { css } from 'styled-components';

function TimeButton({
  children,
  variant,
}: {
  children: string;
  variant: string;
}) {
  const [buttonChecked, setButtonChecked] = useState<boolean>(false);
  const [innerText, setInnerText] = useState('');
  const clickedButton = () => {
    setButtonChecked(!buttonChecked);
    setInnerText(innerText == '대관가능' ? '대관불가' : '대관가능');
    console.log(buttonChecked);
  };
  useEffect(() => {
    setInnerText(children);
  }, []);
  if (variant == 'available') {
    return (
      <AvailableButton checked={buttonChecked} onClick={clickedButton}>
        {innerText}
      </AvailableButton>
    );
  } else if (variant == 'unuseable') {
    return (
      <UnuseableButton checked={buttonChecked} onClick={clickedButton}>
        {innerText}
      </UnuseableButton>
    );
  }
  return <></>;
}

const AvailableButton = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 89px;
  margin: 0;
  border: none;
  background: var(--button-bg-color, #b1ebe8);
  cursor: pointer;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);

  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #94e9e5);
  }
  ${({ checked }) =>
    checked &&
    css`
      background: var(--button-bg-color, #b1b4eb);
      &:active,
      &:hover,
      &:focus {
        background: var(--button-hover-bg-color, #9da1e9);
      }
    `}
`;

const UnuseableButton = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 89px;
  margin: 0;
  border: none;
  background: var(--button-bg-color, #00000088);
  cursor: pointer;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);

  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #000000cc);
  }
  ${({ checked }) =>
    checked &&
    css`
      background: var(--button-bg-color, #f67dfa);
      &:active,
      &:hover,
      &:focus {
        background: var(--button-hover-bg-color, #f595f0);
      }
    `}
`;

export default TimeButton;
