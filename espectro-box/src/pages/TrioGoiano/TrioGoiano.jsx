import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.scss";

const TrioGoiano = () => {
  const [litragem, setLitragem] = useState("");

  const calcularLitragem = (values) => {
    const espessuraMadeira = 1.5; // Espessura da madeira em cm

    const calcularLitragemFormato = (alturaInterna, larguraInterna, profundidadeInterna) => {
      let totalLitragem = 0;
      switch (values.formato) {
        case "1": // Caixa retangular
          totalLitragem = (alturaInterna * larguraInterna * profundidadeInterna) / 1000;
          break;
        case "2": // Caixa trapezoidal
          const profundidadeMedia = (parseInt(profundidadeInterna) + parseInt(values.profundidade2)) / 2;
          totalLitragem = (alturaInterna * larguraInterna * profundidadeMedia) / 1000;
          break;
        default:
          break;
      }
      return totalLitragem;
    };

    const { altura, largura, profundidade, quantidade } = values;
    const alturaInterna = altura - 2 * espessuraMadeira;
    const larguraInterna = largura - 2 * espessuraMadeira;
    const profundidadeInterna = profundidade - 2 * espessuraMadeira;

    const totalLitragem = calcularLitragemFormato(alturaInterna, larguraInterna, profundidadeInterna);

    const litragemMinima = 45;
    const litragemMaxima = totalLitragem * 1.3;
    const litragemFinal = Math.max(Math.min(totalLitragem, litragemMaxima), litragemMinima);

    const litragemPorSubwoofer = litragemFinal / quantidade;
    setLitragem(litragemPorSubwoofer.toFixed(2));
  };

  return (
    <div className="trio-goiano-container">
      <h1 className="trio-goiano-title">
        Calculadora de Litragem para Subwoofers
      </h1>
      <Formik
        initialValues={{
          altura: "",
          largura: "",
          profundidade: "",
          formato: "1",
          quantidade: "1",
        }}
        validate={(values) => {
          const errors = {};
          ['altura', 'largura', 'profundidade'].forEach(field => {
            if (!values[field]) {
              errors[field] = `Informe a ${field} do gabinete`;
            }
          });
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          calcularLitragem(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="trio-goiano-form">
            <div>
              <label htmlFor="altura">Altura (cm):</label>
              <Field type="number" name="altura" />
              <ErrorMessage
                name="altura"
                component="div"
                className="trio-goiano-error"
              />
            </div>
            <div>
              <label htmlFor="largura">Largura (cm):</label>
              <Field type="number" name="largura" />
              <ErrorMessage
                name="largura"
                component="div"
                className="trio-goiano-error"
              />
            </div>
            <div>
              <label htmlFor="profundidade">Profundidade (cm):</label>
              <Field type="number" name="profundidade" />
              <ErrorMessage
                name="profundidade"
                component="div"
                className="trio-goiano-error"
              />
            </div>
            <div>
              <label htmlFor="quantidade">Quantos Subwoofers? (Qtd):</label>
              <Field type="number" name="quantidade" />
              <ErrorMessage
                name="quantidade"
                component="div"
                className="trio-goiano-error"
              />
            </div>
            <div>
              <label htmlFor="formato">Formato do Duto:</label>
              <Field as="select" name="formato">
                <option value="1">Retangular</option>
                <option value="2">Triangular</option>
              </Field>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Calcular Litragem
            </button>
          </Form>
        )}
      </Formik>
      <div className="trio-goiano-litragem">
        {litragem && (
          <p>
            A litragem necessária por subwoofer é de {litragem} litros.
          </p>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="https://i.ibb.co/YWQdNmt/424b6f7d591d274a1e78d3b092b732bba28e0367.png"
          alt="Foto do criador"
          className="trio-goiano-image"
        />
        <div style={{ marginTop: "10px" }}>
          <p>
            About the creator: Daniel, software engineer. I started programming
            in 2012 and professionally entered the field in 2021.
          </p>
          <p>
            Contact: (WhatsApp) <a href="tel:+5561992675023">61 992675023</a>
          </p>
          <p>ありがとうございます。全著作権所有 | コピー2024年</p>
        </div>
      </div>
    </div>
  );
};

export default TrioGoiano;
