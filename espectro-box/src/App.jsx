import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import SectionContent from './components/SectionContent/SectionContent';
import CardServices from './components/CardServices/CardServices';
import TrioGoiano from './pages/TrioGoiano/TrioGoiano'; // Importe o componente para a nova rota

function App() {
  return (
    <Router>
      <div className="container">
        <div className="menu">
          <MenuBar />
          <Routes>
            <Route path="/" element={<ContentWithSections />} />
            <Route path="/trio-goiano" element={<TrioGoiano />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function ContentWithSections() {
  return (
    <div>
      <SectionContent />
      <CardServices />
    </div>
  );
}

export default App;
