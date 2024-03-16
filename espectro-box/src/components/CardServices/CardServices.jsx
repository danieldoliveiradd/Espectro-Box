import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function CardServices() {
  return (
    <div className="container">
      <div className="section__menu">
        <div className="content">
          <h1>CALCULE A LITRAGEM DA SUA <strong>CAIXA</strong></h1>
          <p>
            Nosso software é uma plataforma completa para o cálculo de <strong>sistemas
            de áudio</strong>
          </p>
          <Link to="/trio-goiano" className="button">
            Acessar Software
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardServices;
