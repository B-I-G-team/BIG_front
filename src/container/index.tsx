import GymList from 'components/home/GymList';
import Slide from 'components/Slide';
import React, { useState } from 'react';
import temp1 from 'assets/temp1.png';
import temp2 from 'assets/temp2.png';
// import TeamCreateModal from 'components/mypage/TeamCreateModal';
import GymCreateModal from 'components/common/GymCreateModal';
import Landing from 'components/home/Landing';
import Footer from 'components/home/Footer';
import TeamCreateModal from 'components/mypage/TeamCreateModal';
import PickupList from 'components/home/PickupList';

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
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* 슬라이드 */}
      {/* <Slide data={tempDataArr} /> */}
      <Landing />
      <PickupList />
      <GymList />
      {/* <TeamCreateModal open={open} setOpen={setOpen} /> */}
      <GymCreateModal open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
};

export default Index;
