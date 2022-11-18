import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Token from './Token';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/github-login" element={<Token />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;