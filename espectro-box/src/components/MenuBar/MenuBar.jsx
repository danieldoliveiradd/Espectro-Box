import React from "react";
import "./style.scss";

function MenuBar() {
  return (
    <div className="container">
      <div className="menu">
          <span>O propósito deste software é auxiliar no cálculo da litragem para caixas de subwoofer. Estamos atualmente na versão V1. Por favor, nos ajude a identificar erros, <a href="#">clicando aqui.</a></span>
        <nav>
        <h1>Espectro Box</h1>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Softawre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuBar;
