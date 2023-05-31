import GymList from 'components/home/GymList';
import Slide from 'components/Slide';
import React from 'react';
import temp1 from 'assets/temp1.png';
import temp2 from 'assets/temp2.png';
// import TeamCreateModal from 'components/mypage/TeamCreateModal';
// import GymCreateModal from 'components/common/GymCreateModal';
// import Landing from 'components/home/Landing';
// import Footer from 'components/home/Footer';
import PickupList from 'components/home/PickupList';
import styled from 'styled-components';

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
  // const [open, setOpen] = useState(true);

  return (
    <>
      {/* 슬라이드 */}
      <Slide data={tempDataArr} />
      {/* <Landing /> */}
      <Section>
        <PickupList />
      </Section>
      <GymList />
      {/* <TeamCreateModal open={open} setOpen={setOpen} /> */}
      {/* <GymCreateModal open={open} setOpen={setOpen} /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Index;

const Section = styled.div`
  max-width: 1180px;
  margin: auto;

  margin-bottom: 10px;

  @media ${({ theme }) => theme.grid.laptop} {
    margin-bottom: 24px;
  }
`;
