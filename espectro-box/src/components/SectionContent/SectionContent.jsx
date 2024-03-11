import React from "react";
import "./style.scss";

function SectionContent() {
  return (
    <div className="container">
      <div className="content">
        <div className="infos">
        <h1>EspectroBox</h1>
        <p>
          Nosso software é uma plataforma completa para o design e cálculo de
          sistemas de áudio, especialmente focado em alto-falantes e caixas
          acústicas. Com recursos como sensibilidade, regra de três, cálculo de
          potência e associação resistiva, os usuários podem criar sistemas
          personalizados de alta qualidade. A ferramenta permite calcular e
          otimizar o volume interno das caixas acústicas, considerando formato,
          medidas externas e espessura da madeira. Além disso, oferece suporte
          para componentes como duto, corneta, filtro e volume de caixa,
          facilitando a personalização de sistemas de áudio eficientes.
        </p>
        </div>
      </div>
    </div>
  );
}

export default SectionContent;
