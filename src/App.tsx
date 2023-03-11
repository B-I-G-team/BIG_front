import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './container';
import Mypage from './container/mypage';
import Login from './container/login';
import Gym from './container/gym';
import Owner from './container/owner';
import Signup from './container/signup';
import Header from './components/common/Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSetAtom } from 'jotai';
import { userAtom } from './atoms/common';
import styled from 'styled-components';

function App() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [setUser]);

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
            <Route path="signup" element={<Signup />} />
            <Route path="gym" element={<Gym />} />
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
  align-items: center;
  padding: 0 3px;
`;

const ContentWrrapper = styled.div`
  width: 100%;

  max-width: 1180px;
`;
