import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MenuRoute } from './routes/MenuRoute';
import { LoginRoute } from './routes/LoginRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={LoginRoute.element} />
        <Route path={MenuRoute.pathname} element={MenuRoute.element} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
