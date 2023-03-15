import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './container';
import Mypage from './container/mypage';
import Login from './container/login';
import Gym from './container/gym';
import Owner from './container/owner';
import Signup from './container/signup';
import Slide from './components/Slide';
import Header from './components/common/Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSetAtom } from 'jotai';
import { userAtom } from './atoms/common';

function App() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [setUser]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Slide/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="owner" element={<Owner />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="gym" element={<Gym />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
