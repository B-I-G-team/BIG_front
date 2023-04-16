import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'container';
import Mypage from 'container/mypage';
import Login from 'container/login';
import TeamRental from 'container/team-rental';
import Owner from 'container/owner';
import TeamRank from 'container/team-rank';

import Header from 'components/common/Header';

import styled from 'styled-components';

function App() {
  // const setUser = useSetAtom(userAtom);

  return (
    <Container>
      <ContentWrrapper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="mypage" element={<Mypage />} />
            <Route path="owner" element={<Owner />} />
            <Route path="login" element={<Login />} />
            <Route path="team-rental" element={<TeamRental />} />
            <Route path="team-rank" element={<TeamRank />} />
          </Routes>
        </BrowserRouter>
      </ContentWrrapper>
    </Container>
  );
}

export default App;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 3px;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const ContentWrrapper = styled.div`
  width: 100%;

  max-width: 1180px;
`;
