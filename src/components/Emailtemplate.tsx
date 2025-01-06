import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  age: string;
  goals: string;
  injuries: string;
  activityLevel: string;
  trainingExperience: string;
  responseToExercise: string[]; // array com as opções marcadas
}

export function EmailTemplate(props: EmailTemplateProps) {
  const {
    name,
    phone,
    age,
    goals,
    injuries,
    activityLevel,
    trainingExperience,
    responseToExercise,
  } = props;

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
          backgroundColor: "#f7e6cb",
          fontFamily: "Arial, sans-serif",
          color: "#232323",
        }}
      >
        {/* Container principal */}
        <table
          width="100%"
          border={0}
          cellPadding="0"
          cellSpacing="0"
          style={{
            backgroundColor: "#f7e6cb",
            margin: 0,
            padding: 0,
          }}
        >
          <tr>
            <td align="center" style={{ padding: "30px 15px" }}>
              {/* Card central */}
              <table
                width="600"
                border={0}
                cellPadding="0"
                cellSpacing="0"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                }}
              >
                {/* Cabeçalho */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#232323",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        margin: 0,
                        fontSize: "24px",
                        color: "#f9ab2d",
                      }}
                    >
                      Nova Anamnese Recebida
                    </h1>
                  </td>
                </tr>

                {/* Conteúdo principal */}
                <tr>
                  <td style={{ padding: "20px 30px" }}>
                    <h2
                      style={{
                        fontSize: "18px",
                        marginBottom: "20px",
                        color: "#232323",
                        textAlign: "left",
                      }}
                    >
                      Informações Principais
                    </h2>

                    <table
                      width="100%"
                      style={{
                        borderCollapse: "collapse",
                        marginBottom: "30px",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              width: "200px",
                              verticalAlign: "top",
                            }}
                          >
                            Nome Completo:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {name}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Telefone:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {phone}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Idade:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {age}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Objetivos:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {goals}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Histórico de Lesões:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {injuries || "Nenhum informado"}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Tempo de Treino:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {trainingExperience}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Nível de Atividade Física:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {activityLevel}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#f9ab2d",
                              padding: "8px 0",
                              verticalAlign: "top",
                            }}
                          >
                            Resposta ao Exercício:
                          </td>
                          <td style={{ padding: "8px 0", color: "#232323" }}>
                            {responseToExercise && responseToExercise.length > 0
                              ? responseToExercise.join(", ")
                              : "Nenhuma opção marcada"}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <hr
                      style={{
                        border: "none",
                        borderTop: "1px solid #f9ab2d",
                        margin: "0 0 20px 0",
                      }}
                    />

                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#555555",
                        margin: 0,
                      }}
                    >
                      E-mail gerado automaticamente pelo site de consultoria.
                      <br />
                      Favor não responder diretamente a esta mensagem.
                    </p>
                  </td>
                </tr>

                {/* Rodapé */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#f9ab2d",
                      textAlign: "center",
                      padding: "15px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        color: "#232323",
                      }}
                    >
                     Innovai Hub © 2025 | Todos os direitos reservados
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}
