// components/EmailTemplate.tsx
import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  age: string
  goals: string
  injuries: string
  activityLevel: string
  heartRate: string
  responseToExercise: string[] // array com as opções marcadas
  hasConsent: boolean
}

export function EmailTemplate(props: EmailTemplateProps) {
  const {
    name,
    email,
    age,
    goals,
    injuries,
    activityLevel,
    heartRate,
    responseToExercise,
    hasConsent,
  } = props

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Anamnese Recebida</title>
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '16px' }}>
        <h1 style={{ color: '#333', marginBottom: '8px' }}>
          Nova Anamnese Recebida
        </h1>
        <p><strong>Nome Completo:</strong> {name}</p>
        <p><strong>E-mail:</strong> {email}</p>
        <p><strong>Idade:</strong> {age}</p>
        <p><strong>Objetivos:</strong> {goals}</p>
        <p><strong>Histórico de Lesões:</strong> {injuries || 'Nenhum informado'}</p>
        <p><strong>Nível de Atividade Física:</strong> {activityLevel}</p>
        <p><strong>Frequência Cardíaca Média em Repouso:</strong> {heartRate || 'Não informado'}</p>
        <p>
          <strong>Resposta ao Exercício:</strong>{' '}
          {responseToExercise && responseToExercise.length > 0
            ? responseToExercise.join(', ')
            : 'Nenhuma opção marcada'}
        </p>
        <p>
          <strong>Consentimento:</strong>{' '}
          {hasConsent ? 'O usuário concordou com os termos.' : 'Não concordou (incompleto).'}
        </p>

        <hr style={{ margin: '16px 0' }} />
        <small style={{ color: '#999' }}>
          E-mail gerado automaticamente pelo site de consultoria.
        </small>
      </body>
    </html>
  )
}