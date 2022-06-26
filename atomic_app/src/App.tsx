import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './ui/contents/Login/Login';
import Menu from './ui/contents/Menu/Menu'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
