import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import FunctionCalc from "../../pages/FunctionCalc/FunctionCalc";


function CardServices() {
  return (
    <div className="container">
      <div className="card">
        <div className="options">
          <h1>TRIO GOIANO</h1>
          <img
            src="https://pbs.twimg.com/media/Eir-4YTXgAAFIiL.jpg"
            alt="Trio Goiano"
          />
          <Link to="/trio-goiano" className="button">Selecionar</Link>
        </div>
        <div className="options">
          <h1>Som Nordeste</h1>
          <img
            src="https://i.pinimg.com/originals/18/f4/e2/18f4e23c4e0237cf14e86fc94c953515.jpg"
            alt="Nordeste"
          />
          <Link className="button">Selecionar</Link>
        </div>
        <div className="options">
          <h1>Caixas Bobs</h1>
          <img
            src="https://i.pinimg.com/736x/fb/cf/6b/fbcf6b9bda6db561b546dd899ff1a565.jpg"
            alt="Caixa Bob"
          />
          <Link className="button">Selecionar</Link>
        </div>
      </div>
    </div>
  );
}

export default CardServices;
