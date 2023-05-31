import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Body1Bold, H1, H2, H3, H5 } from 'styles/mixin';

const Landing = () => {
  return (
    <Section>
      <Title>Basketball Indoor Gym</Title>
      <br />
      <SubTitle>
        아마추어 농구 플랫폼 서비스
        <br />
        <br />팀 대관 및 픽업 게임 시스템을 이용해 훈련 및 경기를 쉽게 해보세요.
      </SubTitle>
      <br />

      <CustomButton>실내농구 하러가기 →</CustomButton>
      <div className="custom-shape-divider-bottom-1685360888">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Section>
  );
};

export default Landing;

const Section = styled.div`
  position: relative;
  margin-top: -45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

  .custom-shape-divider-bottom-1685360888 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1685360888 svg {
    position: relative;
    display: block;

    width: calc(180% + 1.3px);
    height: 70px;

    @media ${({ theme }) => theme.grid.tablet} {
      width: calc(146% + 1.3px);
      height: 131px;
    }
  }

  .custom-shape-divider-bottom-1685360888 .shape-fill {
    fill: #ffffff;
  }

  @media ${({ theme }) => theme.grid.tablet} {
    margin-top: -60px;
  }
`;

const Title = styled.div`
  ${H2}

  @media ${({ theme }) => theme.grid.tablet} {
    ${H1}
  }
`;

const SubTitle = styled.div`
  padding: 0 12px;
  ${Body1Bold}

  text-align: center;

  @media ${({ theme }) => theme.grid.tablet} {
    ${H5}
  }
`;

const CustomButton = styled.button`
  background-color: #fff;
  border: 2px solid #fff;
  ${H5}
  padding: 12px 24px;
  border-radius: 8px;
  transition: 200ms;

  &:hover {
    background-color: #2d2d2d;
    color: white;
  }
`;
