import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './container';
import Mypage from './container/mypage';
import Login from './container/login';
import Gym from './container/gym';
import Owner from './container/owner';
import Signup from './container/signup';
import Header from './components/Header';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
