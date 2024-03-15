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
      </div>
    </div>
  );
}

export default CardServices;
