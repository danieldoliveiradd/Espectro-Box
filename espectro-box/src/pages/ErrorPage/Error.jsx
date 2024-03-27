// Error.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-message">Esta página não existe</h1>
      <Link to="/" className="back-link">Voltar para a página inicial</Link>
    </div>
  );
}

export default Error;
