import React from "react";
import "./style.scss";

function MenuBar() {
  return (
    <div className="container">
      <div className="menu">
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
