import React from "react";
import "./style.scss";

function MenuBar() {
  return (
    <div className="container">
      <div className="menu">
        <nav>
        <h1>LuminaBox</h1>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Recomendações</a></li>
            <li><a href="#">Caixas</a></li>
            <li><a href="#">Creditos</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuBar;
