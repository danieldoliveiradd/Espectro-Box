// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './pages/Home/Home';
import TrioGoiano from './pages/TrioGoiano/TrioGoiano'; // Importe o componente TrioGoiano
import Error from './pages/ErrorPage/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trio-goiano" element={<TrioGoiano />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>
  );
}

export default App;
