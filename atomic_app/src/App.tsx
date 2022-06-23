import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './ui/login/pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
