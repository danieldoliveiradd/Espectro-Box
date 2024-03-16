import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import MenuBar from './components/MenuBar/MenuBar';
import CardServices from './components/CardServices/CardServices';
import TrioGoiano from './pages/TrioGoiano/TrioGoiano'; // Importe o componente para a nova rota
import SectionContent from './components/SectionContent/SectionContent';
import Rodape from './components/Rodape/Rodape';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="menu">
          <MenuBar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<ContentWithSections />} />
            <Route path="/trio-goiano" element={<TrioGoiano />} />
          </Routes>
        </div>
        <Rodape />
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
