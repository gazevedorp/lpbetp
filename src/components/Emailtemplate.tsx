import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  age: string;
  goals: string;
  injuries: string;
  activityLevel: string;
  responseToExercise: string[]; // array com as opções marcadas
}

export function EmailTemplate(props: EmailTemplateProps) {
  const {
    name,
    email,
    age,
    goals,
    injuries,
    activityLevel,
    responseToExercise,
  } = props;

  // Paleta de Cores
  const backgroundColor = "#1a1b1c"; // Fundo principal
  const containerColor = "#232425"; // Cor interna (slightly lighter/darker)
  const textColor = "#ffffff";
  const highlightColor = "#f9ab2d"; // Cor de destaque
  const secondaryTextColor = "#999999";

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Anamnese Recebida</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: backgroundColor,
          color: textColor,
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Conteúdo Central */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: containerColor,
            borderRadius: "8px",
          }}
        >
          {/* Logo (ajuste width/height conforme desejar) */}
          {/* <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <img src="/fundo.png" alt="Logo" style={{ height: "60px" }} />
          </div> */}

          {/* Título principal */}
          <h1
            style={{
              color: highlightColor,
              marginBottom: "12px",
              fontSize: "24px",
            }}
          >
            Nova Anamnese Recebida
          </h1>

          {/* Dados do formulário */}
          <p>
            <strong>Nome Completo:</strong> {name}
          </p>
          <p>
            <strong>E-mail:</strong> {email}
          </p>
          <p>
            <strong>Idade:</strong> {age}
          </p>
          <p>
            <strong>Objetivos:</strong> {goals}
          </p>
          <p>
            <strong>Histórico de Lesões:</strong>{" "}
            {injuries || "Nenhum informado"}
          </p>
          <p>
            <strong>Nível de Atividade Física:</strong> {activityLevel}
          </p>

          <p>
            <strong>Resposta ao Exercício:</strong>{" "}
            {responseToExercise && responseToExercise.length > 0
              ? responseToExercise.join(", ")
              : "Nenhuma opção marcada"}
          </p>

          {/* Rodapé */}
          <hr style={{ margin: "24px 0", borderColor: "#555" }} />
          <small style={{ color: secondaryTextColor }}>
            E-mail gerado automaticamente pelo site de consultoria.
          </small>
        </div>
      </body>
    </html>
  );
}
