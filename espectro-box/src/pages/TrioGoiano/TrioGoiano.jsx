import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.scss";

function TrioGoiano() {
  const [litragem, setLitragem] = useState("");
  const [subwoofers, setSubwoofers] = useState(1);

  const calcularLitragem = (values) => {
    const { altura, largura, profundidade, formato, quantidade } = values;
    let totalLitragem = 0;

    if (altura && largura && profundidade) {
      // Calcula a litragem com base no formato do gabinete
      switch (formato) {
        case "1":
          totalLitragem = (altura * largura * profundidade) / 1000; // Convertendo de cm³ para litros
          break;
        case "2":
          totalLitragem = ((altura * largura * profundidade) / 1000) * 0.5; // Considerando apenas metade do volume para formato triangular
          break;
        default:
          break;
      }
    }

    // Verifica se a litragem total é menor que 45L e define 45L como litragem mínima
    const litragemMinima = 45;
    totalLitragem = Math.max(totalLitragem, litragemMinima);

    // Divida a litragem total pelo número de subwoofers
    const litragemPorSubwoofer = totalLitragem / quantidade;
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
          quantidade: "1", // Valor padrão para a quantidade de subwoofers
        }}
        validate={(values) => {
          const errors = {};
          if (!values.altura) {
            errors.altura = "Informe a altura do gabinete";
          }
          if (!values.largura) {
            errors.largura = "Informe a largura do gabinete";
          }
          if (!values.profundidade) {
            errors.profundidade = "Informe a profundidade do gabinete";
          }
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
            <div className="trio-goiano-litragem">
              {litragem && `A litragem necessária por subwoofer é de ${litragem} litros.`}
            </div>
          </Form>
        )}
      </Formik>
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
}

export default TrioGoiano;
