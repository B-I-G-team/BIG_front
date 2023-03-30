import GymList from 'components/home/GymList';
import Slide from 'components/Slide';
import React from 'react';
import temp1 from 'assets/temp1.png';
import temp2 from 'assets/temp2.png';

const tempDataArr = [
  {
    id: 1,
    image: temp1,
  },
  {
    id: 2,
    image: temp2,
  },
];

const Index = () => {
  return (
    <>
      {/* 슬라이드 */}
      <Slide data={tempDataArr} />
      <GymList />
    </>
  );
};

export default Index;
