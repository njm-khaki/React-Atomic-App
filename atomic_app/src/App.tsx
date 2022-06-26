import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './ui/contents/login/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
